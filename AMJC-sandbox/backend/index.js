const BASE_API_URL = "/api/v1";

var Datastore = require('nedb');
var db = new Datastore();

module.exports = (app) => {
    var contacts = [
        {
            name : "pepe",
            phone: 12345
        },
        {
            name : "pablo",
            phone : 67890
        }
    ];
    
    db.insert(contacts);
    console.log("Inserted 2 contacts on start.");
    
    app.get(BASE_API_URL+"/contacts", (request,response) => {
        console.log("New GET to /contacts");
        db.find({}, (err, contacts) => {
            if(err){
                console.log(`Error geting /contacts: ${err}`);
                response.sendStatus(500);
            }else{
                console.log(`Contacts returned ${contacts.length}`);
                response.json(contacts.map((c) =>{
                    //return {name: c.name, phone: c.phone};
                    delete c._id;
                    return c;
                }));
            }
        });
    });
    
    app.post(BASE_API_URL+"/contacts", (request,response) => {
        var newContact = request.body;

        console.log(`newContact = ${JSON.stringify(newContact,null,2)}`);
        
        console.log("New POST to /contacts");

        db.insert(newContact);

        response.sendStatus(201);
    });

    app.delete(BASE_API_URL+"/contacts/:name", (request,response) => {
        var name = request.params.name;

        console.log(`New DELETE to /contacts/${name}`);
        
        db.remove({"name" : name},{},(err, numRemoved)=>{
            if(err){
                console.log(`Error deleting /contacts/${name}: ${err}`);
                response.sendStatus(500);
            }else{
                console.log(`Contacts removed ${numRemoved}`);
                response.sendStatus(200);
               
            }
        });
    });
};