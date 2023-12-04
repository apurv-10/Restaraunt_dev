// mockServer.js
const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('restaurantData.json');
const middlewares = jsonServer.defaults();

server.use(cors({ origin: 'http://localhost:3000' })); // Update to your React app URL
server.use(middlewares);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

