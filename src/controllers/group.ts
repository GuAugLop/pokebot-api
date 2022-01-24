import express = require('express');
import mongoose from '../db';
const route = express.Router();

route.post('/credentials', (req, res) => {
  const { groupID }: { groupID: string } = req.body;

  console.log(groupID);
  res.send({ groupID });
});

export default route;
