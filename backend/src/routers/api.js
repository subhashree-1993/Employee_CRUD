const express = require("express");


const app = express();

app.use("/login", loginRouter);
app.use("/adduser", adduserRouter);
