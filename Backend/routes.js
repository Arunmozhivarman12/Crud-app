const express = require('express')
const router = express.Router();
const Emp = require('./model');


router.get("/", async (req, res) => {
    const data = await Emp.find();
    res.json(data);
});

router.post("/user", async (req, res) => {

    try {
        const data = new Emp(req.body);
        await data.save();
        res.json({ message: "user registered" });
    } catch(err){
        res.status(500).send({err});
    }
});


router.put("/user/edit", async(req, res) => {
    await Emp.findByIdAndUpdate(req.body.id,{name:req.body.name,email:req.body.email,Number:req.body.Number})
    res.send('updated')
});


router.delete("/del/:id", async(req, res) => {
    try{
        await Emp.findByIdAndDelete(req.params.id)
          res.send('deleted')
    }catch(err){
console.log(err)
    }
     ;
  
});


module.exports = router;





















