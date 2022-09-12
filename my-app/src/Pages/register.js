import React, { useState } from 'react';
import User from '../images/user.png';
import email from '../images/email.png';
import padlock from '../images/padlock.png';
import phone from '../images/phone.png';
import registrationi from '../images/reg.png';
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    let name,value;

    const registration = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
    };


  

    const submission = async(e) => {
        e.preventDefault();
        const { name,email,phone,password }=user;
        const res= await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, phone, password
            })
        });
        
        const data=await res.json();

        if(!data){
            window.alert("invalid registration");
        } else{
            window.alert(data.message);
            history("/login");
        }
        

    };
    



    return <>

        <div className='div'>
            <div className='divv'>

                <form method='POST' onSubmit={submission} >

                    <div className='div1'>
                        <h2>Sign up</h2>

                    </div>

                    <div className='div1'>
                        <label><img id='img' src={User}></img>
                            <input type="text"
                                name='name'
                                onChange={registration}
                                value={user.name}
                                placeholder='Name'

                                id='name'
                                required


                            >
                            </input>
                        </label>
                    </div>

                    <div className='div1'>
                        <label><img id='img' src={email}></img>
                            <input type="email"
                                name='email'
                                onChange={registration}
                                value={user.email}
                                placeholder='Email'
                                id='email'
                                required


                            >
                            </input>
                        </label>
                    </div>

                    <div className='div1'>
                        <label><img id='img' src={phone}></img>
                            <input type="text"
                                name='phone'
                                pattern="\d{10}"
                                
                                onChange={registration}
                                value={user.phone}
                                placeholder='Mobile'
                                id='phone'
                                required





                            >
                            </input>
                        </label>
                    </div>

                    <div className='div1'>
                        <label><img id='img' src={padlock}></img>
                            <input type="password"
                                name='password'
                                onChange={registration}
                                value={user.password}
                                placeholder='Password'
                                id='password'
                                minLength={6}
                                required


                            >
                            </input>
                        </label>
                    </div>
                    <button type='submit'>Register</button>
                </form>

            </div>

            <div className='divvimage'>
                <img id='imgl' src={registrationi}></img>
                <Link to="/login" style={{ textDecoration: 'none' }}><p id='p'>Already registered</p></Link>

            </div>
        </div>

    </>

}
export default Register;