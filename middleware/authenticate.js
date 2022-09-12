const jwt=require('jsonwebtoken');
const User=require('../model/userShema');

const authenticate =async (req,res,next) =>{
    try {
        const token=req.cookies.jwtoken;
        const veryfytoken=jwt.verify(token,process.env.SECRET_KEY);
        const rootUser=await User.findOne({_id:veryfytoken._id, "tokens.token":token});
        if(!rootUser){
            throw new Error('User not found')
        }
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;

        next();

    } catch (error) {
        res.send('Unautherized no token provided')
        console.log(error);
    }

}



module.exports=authenticate;