# Funnel Code Challenge

## Initial setup

To execute the initial setup, you'll need to run `npm install`. 

```
$ npm install
```

## Running

To run the API:

```
$ npm start
```

You can then access the API through `http://localhost:3000`

## Testing

To run the tests:

```
$ npm run test
```

## Problem

Funnel has launched a satellite in order to tackle the lucrative lunar real
estate market. To make sure the satellite doesn’t come crashing back down,
we’re creating a web application to monitor its status. Your job is to write a
health API for it.

Realtime information about the satellite is available from the
`http://nestio.space/api/satellite/data` endpoint. The data is updated every ten
seconds. The data is returned in this format:

```
{
"last_updated": "2017-04-07T02:53:10.000Z",
"altitude": "213.001"
}
```

`last_updated` is an ISO 8601 representation of the last time the data was
updated and altitude is the altitude of the satellite in kilometers.

Your application should read the real-time altitude data from
`nestio.space/api/satellite/data`, and expose an API over HTTP:

 - Expose a /stats end-point that:
    - Returns the minimum, maximum and average altitude for the last 5 minutes.
    - Don’t worry about persisting data beyond the life of the process -- if
     you don’t have 5 minutes of data when the end-point is requested, return
     the stats for what you do have.
 - Expose an /health end-point that:
    - Whenever the average altitude of the satellite over the last minute goes
    below 160km, return the message “WARNING: RAPID ORBITAL DECAY IMMINENT”
    - Once the average altitude over the last minute of the satellite returns
    to 160km or above, return the message “Sustained Low Earth Orbit Resumed”
    for 1 minute.
    - Otherwise return the message “Altitude is A-OK”
 - Write unit tests for the health logic.
 - Use any language/environment/dependencies you want to.
 - Please provide a README describing how to setup and run the application.
