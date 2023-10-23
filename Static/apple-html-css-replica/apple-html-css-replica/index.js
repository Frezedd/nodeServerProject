const http= require("http")
const fs= require("fs")
const url= require("url")
const nameLookup = require ("mime-types").lookup

const Server =http.createServer(function (req, res){
    const parsedUrl =url.parse(req.url, true);
    const filePath= parsedUrl.path;

})
