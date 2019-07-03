# Rest server for [reactive todo list](https://github.com/Burize/reactive-todo-list) 

For development environment testing, there is throttling in 2 seconds.


### Used features:
 * [KoaJS](https://github.com/koajs/koa) as rest framework
 * TypeScript
 * MongoDB

### Restore and start DataBase

```bash
# create local folder for data base 
$ mkdir dataBase

# restore data from backup
$ mongorestore backup

# run mongo at restored dump
$  mongod --port 27017 --dbpath=./dataBase 

# or
$  npm run db
```

### Start server

```bash
npm i
npm run dev
```
