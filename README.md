# NestJS / MongoDB / GraphQL / TypeORM Sample Application

Simple dummy application to demonstrate a NestJS application exposing a (code first, meaning gql file is generated on-the-fly) graphlQL endpoint based on a mongodb (using TypeORM).

## Setup

    $ pnpm install
    $ pnpm run start:dev

## Running MongoDB

Either use a existing mongodb or just:

    $ mkdir -p db
    $ mongod --dbpath db

### Importing dummy data

    $ export $DUMMY_USERS=`cat dummy_users.json`
    $ mongosh localhost/dummy --quiet --eval "db.users.insertMany(JSON.parse('${DUMMY_USERS}'))"

(The name of the db is _dummy_, can be configured with the rest of the DB connection in app.module.ts)
