const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const userShema=new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    tokens: [
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
});

userShema.methods.generateAuthToken= async function () {
    try {
        let token= jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (error) {
        console.log(error)
    }
}

const User=mongoose.model('User',userShema);


module.exports=User;
