const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json', {foreignKeySuffix: 'uuid'});
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

router.db._.id = 'uuid';

server.use(middlewares);
server.use(router);

server.listen(port,() => {
 
  console.log('JSON Server is running , and listen to port :' + port)
})
