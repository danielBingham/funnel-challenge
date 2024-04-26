import express, {Request, Response, NextFunction} from 'express'
import createError, { HttpError } from 'http-errors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import { SatelliteTracker } from './lib/SatelliteTracker'
import { SatelliteStatsCalculator } from './lib/SatelliteStatsCalculator'
import { HealthChecker } from './lib/HealthChecker'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Initialize the tracker and begin tracking.  This will begin polling the
// satelite data API.
const tracker = new SatelliteTracker()
tracker.track()

app.get('/stats', function(request: Request, response: Response, next: NextFunction) {
  const calculator = new SatelliteStatsCalculator(tracker.data)
  const stats = calculator.getStats(300000)
  return response.json(stats)
})

app.get('/health', function(request: Request, response: Response, next: NextFunction) {
  const checker = new HealthChecker()
  const message = checker.checkHealth(tracker.data)

  return response.json({ message: message })
})

// catch 404 and forward to error handler
app.use('*', function(request: Request, response: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(error: Error, request: Request, response:Response) {
  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  if ( 'status' in error ) {
    // render the error page
    response.status((error as HttpError).status).send();
  } else {
    response.status(500).send()
  }
});

module.exports = app;
