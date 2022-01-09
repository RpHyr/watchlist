'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

module.exports={
  app,
  start: port => {
    app.listen(port,()=>{
      console.log(`Server is running on port ${port}`)
    });
  }
};