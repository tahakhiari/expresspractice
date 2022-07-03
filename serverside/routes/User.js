const express =require("express");
const router = express.Router();
const timeMiddleware=require('../middleware/time')
let users = [
    {
        firstName : "john",
        lastName : "kennedy",
        birthday : "01/03/2000"
    },
    {
        firstName : "tom",
        lastName : "holland",
        birthday : "01/16/1991"
    },
    {
        firstName : "ellie",
        lastName : "golden",
        birthday : "11/05/1993"
    }
]
router.get("/",timeMiddleware, (req, res) => {
    res.json(users);
});
router.get("/adduser",timeMiddleware, (req, res) => {
        users.push ( {
            firstName : "Charlotte",
            lastName : "Brown",
            birthday : "11/05/1990"
        })
        res.send(users)
    });
router.put("/",timeMiddleware, (req, res) => {
    res.send({ "user updated":{} });
});
router.delete("/", timeMiddleware,(req, res) => {

});
module.exports = router;
 