require('dotenv').config();

const server = require('./api/server');
const defaults = require('./config/defualt')

const port = defaults.port 
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))