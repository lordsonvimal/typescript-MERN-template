# typescript-MERN-template
Template for MongoDB, Express, React and Node with typescript

## Setup

### MongoDB
- `brew tap mongodb/brew`
- `brew install mongodb-community@4`
- `brew services start mongodb-community` to start the mongoDB server
- `brew services start mongodb-community` to stop the mongoDB server
- `ps aux | grep -v grep | grep mongod` to check whether mongoDB is running
- Install `robo 3T` to view the DB contents in GUI mode
  - `sudo xattr -r -d com.apple.quarantine /Applications/Robo\ 3T.app` if permission is required

### Server+Client
- Clone the repo
- Run `npm install`

### Environment variables
Create a `.env` file in the project root. Add the following variables
- DB_HOST - [Your DB uri]
- CLIENT_PORT - [Specify port number for client]
- NODE_ENV - [Process environment - "development" | "production" | "test"]
- SALT_FACTOR - [Specify a number]
- SERVER_HOST - [Url for server]
- SERVER_PORT - [Specify port for server]

## Running the application
- run `npm run start` for running both client+server
- run `npm run serve` for running server only application
- run `npm run build` for building the frontend (After building, `npm run serve` will run the client in `/` of the server port)