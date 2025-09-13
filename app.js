const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('DB.json');
const middlewares = jsonserver.defaults();


const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
server.use(middlewares);
server.use(router);
// Custom route example: Add a timestamp to POST requests
server.listen(PORT , ()=> {
    console.log(`http://${HOST}:${PORT}`);
})