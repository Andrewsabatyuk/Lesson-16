let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response){
    console.log('Server is started !');
    response.send("<h1>Welcome</h1>");
});

server.get('', function(request, response){
console.log(request.query);
let obj = request.query;
obj.surname = 'Petrenko';
obj.name = 'Petro';
obj.age = 20;
obj.place = 'Frankivsk-city';
response.send('succesfully aded data by Get:' + JSON.stringify(request.query));
} );

server.listen(3000);