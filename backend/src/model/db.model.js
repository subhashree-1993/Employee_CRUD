const mongoose = require("mongoose");
const model = require("../Schama/mono.shema");

const modeldata = mongoose.model("employee", model);

module.exports = { modeldata };
