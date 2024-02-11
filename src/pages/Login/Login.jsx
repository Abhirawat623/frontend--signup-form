import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { validateNumber,validatePassword } from "../../utils/index";
import {loginHandler } from "../../services";
import {useAuth} from "../../context/index";
import { useNavigate } from "react-router-dom";
let isNumberValid,isPasswordValid;

export const Login = () => {

  const navigate= useNavigate();
 const { authDispatch,password,number }= useAuth()
  

 const handleNumberLogin=(event)=>{
 isNumberValid = validateNumber(event.target.value)
 if(isNumberValid){
  authDispatch({
    type:"NUMBER",
    payload:event.target.value
  })}
  else{
    console.log('Inavlid Number')
  }
 }

 const handlePasswordLogin=(event)=>{
  isPasswordValid = validatePassword(event.target.value)
  if(isPasswordValid){
   authDispatch({
     type:"PASSWORD",
     payload:event.target.value
   })}
   else{
     console.log('Inavlid Password')
   }
  }
 
  console.log(number,password);


 const handleLogin= async (event)=>{
  event.preventDefault();
  if(isNumberValid && isPasswordValid){
    const { accessToken, username } = await loginHandler(number, password);
    authDispatch({
      type: "SET_ACCESS_TOKEN",
      payload: accessToken,
    });
    authDispatch({
      type: "SET_USER_NAME",
      payload: username,
    });
   

 console.log(accessToken)
    // const token= localStorage.getItem('token');
    // const name= localStorage.getItem('name');
const token = localStorage.getItem("token")
  if(token){
    navigate("/");
    authDispatch({
      type:"CLEAR_SIGNUP"
    })
  }
  }
 }

 

  return (
    <Fragment>
      <div className=" auth-login-container signup-container">
        <div className="auth-login d-flex justify-center dir-col align-center">
          <h2 className="color-white">Login</h2>
          <form className="d-flex dir-col gap-s align-center">
            <span className="auth-background">
              <div className="auth-form">
                <label className="form-label color-white  ">
                  Mobile Number
                </label>
                <input
                  className="input-form"
                  placeholder="Enter Registered Mobile Number"
                  onChange={handleNumberLogin}
                  defaultValue={number}
                  maxLength={10}
                />
              </div>
              <div className="auth-form">
                <label className="form-label color-white ml-l">Password</label>
                <input className="input-form" placeholder="*********" 
                onChange={handlePasswordLogin} defaultValue={password}  type="password" />
              </div>
            </span>
            <div className="cta">
              <button className="auth-login-btn" onClick={handleLogin}>Login</button>
            </div>
          </form>
         <Link to="/signup"> <button className="test-btn">Sign Up</button></Link>
        </div>
    
      </div>
    </Fragment>
  );
};
