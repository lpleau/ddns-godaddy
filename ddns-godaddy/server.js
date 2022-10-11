const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const server = app.listen(7314, listening);
app.use (express.static('public'));

fs.readFile(path.join(__dirname, 'data', 'domainlist'), 'utf8', (err, data) => {
    if (err) throw err;
})
fs.readFile(path.join(__dirname, 'data', '.domainAPI'), 'utf8', (err, data) => {
    if (err) throw err;
})

console.log('server is starting');
function listening() {
    console.log("Listening on port 7314")
}

app.get('/add-api/:domain/:apikey/:apisecret', addApi);
function addApi(request, response) {
    var data = request.params;
    var domain = data.domain;
    var apikey = data.apikey;
    var apisecret = data.apisecret;
    var newApi = "\n" + domain + " " + apikey + " " + apisecret;
    fs.appendFile(path.join(__dirname, 'data', '.domainAPI'), newApi, (err) => {
        if (err) throw err;
        console.log('Write complete');
    })
}

app.get('/add-host/:host/:domain', addHost);
function addHost(request, response) {
    var data = request.params;
    var host = data.host;
    var domain = data.domain;
    var domAPIlist = fs.readFileSync(path.join(__dirname, 'data', '.domainAPI'), 'utf8').split("\n").slice(1);
    let domList = domAPIlist.map(function(element){
        return element.split(" ")[0];
    });
    var domainAPIindex = domList.indexOf(domain);
    var newDom = "\n/var/www/ddns-godaddy/script/updatedns " + host + " " + domAPIlist[domainAPIindex];
    fs.appendFile(path.join(__dirname, 'data', 'domainlist'), newDom, (err) => {
        if (err) throw err;
        console.log('Write complete');
    })
    
}

app.get('/list-domains', listDomains);
function listDomains(request, response) {
    var fileList = fs.readFileSync(path.join(__dirname, 'data', '.domainAPI'), 'utf8').split("\n").slice(1);
    let domList = fileList.map(function(element){
        return element.split(" ")[0];
    });
    response.send(domList);
}

app.get('/list-hosts', listHosts);
function listHosts(request, response) {
    var fileList = fs.readFileSync(path.join(__dirname, 'data', 'domainlist'), 'utf8').split("\n").slice(4);
    let domList = fileList.map(function(element){
        return element.split(" ")[1];
    });
    response.send(domList);
}

app.get('/all', allHosts);
function allHosts(request, response) {
    var fileList = fs.readFileSync(path.join(__dirname, 'data', 'domainlist'), 'utf8').split("\n").slice(4);
    let domList = fileList.map(function(element){
        return element.split(" ");
    });
    response.send(domList);
}

app.get('/domains-api', listDomainsAPI);
function listDomainsAPI(request, response) {
    var fileList = fs.readFileSync(path.join(__dirname, 'data', '.domainAPI'), 'utf8').split("\n").slice(1);
    let domList = fileList.map(function(element){
        return element.split(" ");
    });
    response.send(domList);
}