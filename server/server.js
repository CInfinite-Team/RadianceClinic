const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { PORT } = require('./constants');
const formRouter = require('./src/routes/forms');
const connectDB = require('./src/db/connection');

if (require.main === module) {
  const app = express();
  app.use(express.json());


  // cors
  app.use(cors({origin : true}));

  // routes
  app.use("/api/forms",formRouter);
  
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    connectDB();
  });
}