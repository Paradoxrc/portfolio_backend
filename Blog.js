const mongoose = require("./DB");

const blogSchema = new mongoose.Schema({
title: String,
content: String,
date: Date,
});
const Blog= mongoose.model("Blog",blogSchema);

module.exports=Blog;