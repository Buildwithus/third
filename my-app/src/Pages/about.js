import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';



function About() {
  const history=useNavigate();
  const [user,setUser]=useState({});

    const callaboutpage= async () =>{
        try {
            const res=await fetch('/about',{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data=await res.json();
            setUser(data);
            if(!data){
                const error=new Error(res.error);
                throw error;

            }
        } catch (error) {
            console.log(error)
            history("/login")
        }
    }

   useEffect(()=>{
    callaboutpage();

   },[]);

    return <>
        <div className="div">
            <h1>Your data</h1>
            {<ul id='ttt'><li id='list'>{user.name}</li></ul>}
            {<ul id='ttt'><li id='list'>{user.email}</li></ul>}
            {<ul id='ttt'><li id='list'>{user.phone}</li></ul>}
           
        

        </div>
    </>
}



export default About;



/*   {user && <ul id='ttt'><li id='list'>{user.name}</li></ul>}
            {user && <ul id='ttt'><li id='list'>{user.email}</li></ul>}
            {user && <ul id='ttt'><li id='list'>{user.phone}</li></ul>}*/ 
