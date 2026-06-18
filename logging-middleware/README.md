# Logging Middleware

A reusable Express.js middleware for logging HTTP requests.

## Features

- Logs HTTP method
- Logs request URL
- Logs timestamp
- Logs response status

## Usage

```javascript
const logger = require("./logger");

app.use(logger);