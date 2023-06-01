#

## import db

$ export $DUMMY_USERS=`cat dummy_users.json`
$ mongosh localhost/dummy --quiet --eval "db.users.insertMany(JSON.parse('${DUMMY_USERS}'))"

## running db

$ mkdir -p db
$ mongod --dbpath db
