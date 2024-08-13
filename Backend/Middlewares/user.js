const zod = require("zod");

const inputSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8, {message:"Must be 8 or more characters long"})
})

function UserMiddleware(req, res, next) {
// this is a middleware where all the user information is verified and if this is good we call the next() otherwise send an error to the user
const username = req.body.username;
const password = req.body.password;
const response = inputSchema.safeParse({username, password})
if(!response) {
    res.status(411).json({message: "Invalid user inputs."}); 
}
else {
    next()


}
//Input validation.



}