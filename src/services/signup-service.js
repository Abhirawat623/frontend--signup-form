import axios from "axios";
import {  toast } from 'alert';

export const signupHandler = async (username, number, email, password,setAlert) => {
  try {
    const data = await axios.post(
        "https://backend-signup-form.vercel.app/api/auth/signup",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
   
      toast(`Hii, ${username}!Your Account Created`)
      
    
    console.log("Signed Up");
    console.log(data);
    
  } catch (err) {
    console.log("error adding user to database");
    toast("Can't add User, Pls fill form again")
  }
};