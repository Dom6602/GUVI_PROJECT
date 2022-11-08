var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post('/Update_Form',(req,res)=>{
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var education = req.body.education;
    var experience_in_designing = req.body.experience_in_designing;
    var mobile_number = req.body.mobile_number;
    var address_line_1 = req.body.address_line_1;
    var address_line_2 = req.body.address_line_2;
    var area = req.body.area;
    var postcode = req.body.postcode;
    var state = req.body.state;
    var country = req.body.country;
    

    var data = {
        "first_name": first_name,
        "last_name" : last_name,
        "education": education,
        "experience_in_designing" : experience_in_designing,
        "mobile_number": mobile_number,
        "address_line_1" : address_line_1,
        "address_line_2": address_line_2,
        "area" : area,
        "postcode" : postcode,
        "state" : state,
        "country" : country,
        
    }
    

    
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('profile_update_success.html')

})



app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('profile.html');
}).listen(6666);


console.log("Listening on PORT 6666");


