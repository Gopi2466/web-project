const express = require("express");
const cors = require("cors")
const app = express();

PORT = 3000
app.use(express.json())
app.use(cors())
app.get("/home", function(req, res) {
    res.send("hi there")
});

app.get("/signup", function(req, res) {
         
})

app.post("/signup", function(req, res) {

}
)

app.get("/courses", function(req, res) {

})

app.post("/signin", function(req, res) {
     
})



app.listen(PORT);