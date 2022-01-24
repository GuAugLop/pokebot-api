"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('API is running in port ', PORT);
});
