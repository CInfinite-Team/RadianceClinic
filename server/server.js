const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { PORT } = require('./constants')


if (require.main === module) {
  const app = express();
  app.use(express.json());


  // cors
  app.use(cors({origin : true}));

  
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}