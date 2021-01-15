# getir-code-challenge
[![Build Status](https://travis-ci.org/Elozzy/getir-code-challenge.svg?branch=main)](https://travis-ci.org/Elozzy/getir-code-challenge)
[![Coverage Status](https://coveralls.io/repos/github/Elozzy/getir-code-challenge/badge.svg?branch=main)](https://coveralls.io/github/Elozzy/getir-code-challenge?branch=main)

# About

A RESTful API that fetches data with a given set of perimeters from MongoDB

## Link to Hosted App

- [API link](http://safe-sierra-84083.herokuapp.com/api/v1/records)

## Link to Swagger Doc

- [Swaager Doc link](https://safe-sierra-84083.herokuapp.com/api-docs/)

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Mocha](https://mochajs.org/)
-[Chai](https://www.chaijs.com/)

## Application Features

- An Endpoint to fetch records based on a given startDate, endDate, minCount and maxCount

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash

# Clone this repository
$ git clone https://github.com/Elozzy/getir-code-challenge.git

# Navigate into the cloned repository
$ cd into the currently cloned directory

# Install dependencies
$ npm install

# Create .env file for environmental variables in your root directory like the sample.env file and provide the keys

# Run the app
$ npm start

# Check the port on the specified port on the env or 4600

# Run test
$ npm run test
```

## API endpoints

**Base_URL**-> localhost:4600/api/v1

  - Fetch records:
    
  ```
  {
    path: '/records',
    method: POST,
    body: {
      startDate: <string>,
      endDate: <string>,
      minCount: <integer>,
      maxCount: <integer>
    }
  } 
  ```
 

## Author

Eloghosa Osagie

## License

ISC

---
