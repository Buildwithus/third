const express = require('express')
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');
const User = require('../model/userShema');
const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        const userexist = await User.findOne({ email: email });
        if (userexist) {
            res.send({ message: "Email already exist" })
        } else {
            const hashpassword = await bcrypt.hashSync(password)
            const user = new User({
                name,
                email,
                phone,
                password: hashpassword,
            });

            await user.save();
            res.send({ message: "Registration successfully" })
        }

    } catch (error) {
        console.log(error)
    }

});


router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        const userlogin = await User.findOne({ email: email });



        if (userlogin) {
            const ismatch = await bcrypt.compareSync(password, userlogin.password);

            /* const token = await userlogin.generateAuthToken();
             console.log(token);
 
             res.cookie("jwtoken",token, {
                 expires: new Date(Date.now() + 25892000000),
                 httpOnly:true
             });*/

            if (!ismatch) {
                res.send({ message: "password not match" });
            } else {
                const token = await userlogin.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 300000),
                    httpOnly: true
                });
                res.send({ message: "user login sucessfully" })
            }
        } else {
            res.send({ message: "email not found" })
        }
    } catch (error) {
        console.log(error);

    }
});


router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
})



module.exports = router;