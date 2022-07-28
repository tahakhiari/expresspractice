const express =require("express");
const router = express.Router();
const timeMiddleware=require('../middleware/time')


router.get("/",timeMiddleware, (req, res) => {
    res.sendFile(__dirname + "/components/ContactUs.html")
});
router.get("/",timeMiddleware, (req, res) => {
    res.sendFile(__dirname + "/components/index.html")
    });
router.get("/",timeMiddleware, (req, res) => {
    res.sendFile(__dirname + "/components/OurServices.html")
    });

module.exports = router;
 