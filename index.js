const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const PORT = 3000;
const express = require('express');
const app = require('express')();
const path = require('path');


app.use(express());
app.use(express.static(path.join(__dirname, '/proxy/public')));

var mainComponent = 'http://purrgetmainitemdisplay-env.eba-upicdvwk.us-east-2.elasticbeanstalk.com',
    aboutComponent = 'http://localhost:5100',
    searchComponent = 'http://localhost:5300',
    reviewsComponent = 'http://localhost:5500';
 
app.get("/main*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: mainComponent});
});

app.get("/about*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: aboutComponent});
});

app.get("/api/search/:catName*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: searchComponent});
});

app.get("/Purrget*", function(req, res) {
  console.log('redirecting to Server3');
  apiProxy.web(req, res, {target: reviewsComponent});
});

app.listen(PORT);