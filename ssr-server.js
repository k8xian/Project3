const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const MongoDB = require('mongoDB');
const api =require('./routes/api/items');
const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`server started on port ${port}`));    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();


// BodyParser Middleware
// app.use(bodyParser.json());

// DB Config
const db = require('./config/keys.js').mongoURI;

// Configure express to expose a REST API
const server = express()
server.use(bodyParser.json())
server.use((req, res, next) => {
// Also expose the MongoDB database handle so Next.js can access it.
  req.db = db
  next()
  })

server.use('/api', api)

  // Everything that isn't '/api' gets passed along to Next.js
server.get('*', (req, res) => {
  return handle(req, res)
  });

//Connect to Mongo DB
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));


// Use routes
server.use('/api/items/', items);

    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(port, function(err) {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
});
// .catch((ex) => {
//     console.error(ex.stack)
//     process.exit(1)
//   });

// server.listen(PORT)
// console.log(`Listening on ${PORT}`)
// .catch(error => console.error(error.stack));