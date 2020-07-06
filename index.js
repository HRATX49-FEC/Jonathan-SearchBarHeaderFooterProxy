const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const PORT = 3000;
const express = require('express');
const app = require('express')();
const path = require('path');

var mainComponent = 'http://purrgetmainitemdisplay.us-east-2.elasticbeanstalk.com/',
    aboutComponent = 'http://purrgetaboutthisitem-dev.us-east-1.elasticbeanstalk.com/',
    searchComponent = 'http://v50-dev.us-east-1.elasticbeanstalk.com/',
    reviewsComponent = 'http://service-dev2.us-west-2.elasticbeanstalk.com/',
    reccommended = 'http://rec-feat-display.us-east-2.elasticbeanstalk.com/'
;

app.all('/reccomended*', (req, res) => {
    console.log('redirecting to reccomended server');
    apiProxy.web(req, res, {target: reccommended})
  });
 
app.all("/main*", function(req, res) {
    console.log('redirecting to main server');
    apiProxy.web(req, res, {target: mainComponent});
});

app.all("/about*", function(req, res) {
    console.log('redirecting to about server');
    apiProxy.web(req, res, {target: aboutComponent});
});

app.all("/search*", function(req, res) {
    console.log('redirecting to search server');
    apiProxy.web(req, res, {target: searchComponent});
});

app.get("/reviews*", function(req, res) {
  console.log('redirecting to reviews server');
  apiProxy.web(req, res, {target: reviewsComponent});
});


app.use(express());
app.use(express.static(path.join(__dirname, '/proxy/public')));


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});