import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Ambulance from './Page/Ambulance';
import Beds from './Page/Beds';
import Blood from './Page/Blood';
import Consultation from './Page/Consultation';
import Counselling from './Page/Counselling';
import Med from './Page/Medicine'
import Food from './Page/Food';
import Oxygen from './Page/Oxygen';
import Plasma from './Page/Plasma';
import Rem from './Page/Remdesivir';
import Testing from './Page/Testing';
import Widget from './Page/res/widget';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import qs from 'qs';
import {axios} from './Page/res/axios';
import { blue, green } from '@material-ui/core/colors';



function Main() {

  const [logincheck, setLoginCheck] = useState(false);
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [admincheck, setAdminCheck] = useState(false);
  const [emailR, setEmailR] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [success, setSuccess] = useState("");
  const [nameR, setnameR] = useState("");
  const [nameError, setnameError] = useState("");
  

  const submit =  (e) => {
    clearErrors();
    e.preventDefault();
    
    axios.post("/login", 
      qs.stringify({
          email: email,
          password: password
      }))
      .then(res => {
          console.log(res)
          if(res.data.status === "ok"){
            localStorage.setItem('token-data',res.data.data)
            localStorage.setItem('name',res.data.name)
            setnameR("");
            setLoginCheck(true);
          }
          if(res.data.status === "error"){
            if(res.data.error==="Invalid email-ID/password")
            { 
              let e = document.getElementById("errore");
              e.style.opacity=1;
              setEmailError(res.data.error);
               setTimeout(()=>{
                    setEmailError("");
                    e.style.opacity=0;
                },10000);
            }
            else if(res.data.error==="Password length should be more than 8 characters")
            {
              let e = document.getElementById("errorp");
              e.style.opacity=1;
              setPasswordError(res.data.error);
              setTimeout(()=>{
                setPasswordError("");
                e.style.opacity=0;
              },10000);
            }
          }
           
        }).catch(error => {
            console.log(error.response.data.error)
            if(error.response.data.error==="Invalid email-ID/password")
            { 
              let e = document.getElementById("errore");
              e.style.opacity=1;
              setEmailError(error.response.data.error);
               setTimeout(()=>{
                    setEmailError("");
                    e.style.opacity=0;
                },10000);
            }
            else if(error.response.data.error==="Invalid email-ID/password")
            {
              let e = document.getElementById("errorp");
              e.style.opacity=1;
              setPasswordError(error.response.data.error);
              setTimeout(()=>{
                setPasswordError("");
                e.style.opacity=0;
              },10000);
            }
  })
}

  

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  } 

  const clearErrors = () =>{
    setEmailError("");
    setPasswordError("");
  } 

  const handleLogOut = () => {
    localStorage.removeItem('token-data');
    localStorage.removeItem('name');
    setLoginCheck(false);
  }

  const userListener = (logincheck) => {
      if(logincheck ||  localStorage.getItem('token-data') !== null)
      {
        clearInputs();
        setLoginCheck(logincheck);
      }
      else
      {
        setLoginCheck(false);
      }
    
  }

  useEffect(()=>{
    userListener();
  },[]);

    function showpass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

  useEffect(()=>{

    if(logincheck!==false || localStorage.getItem('token-data') !== null)
    {
      setUser(true);
    }
    else
    {
      setUser(false);
    }
  },[logincheck]);


  useEffect(()=>{ 
    if  (admincheck===true)
    {
      let body = document.querySelector("body");
      body.style.overflow = "hidden";  
      let cover = document.getElementById("admin-cover");         
      cover.style.display = "grid";
    }
    else if  (admincheck===false)
    {
      let body = document.querySelector("body");
      let cover = document.getElementById("admin-cover");
      body.style.overflow = "unset";      
      cover.style.display = "none";
    }
  },[admincheck]);

  const loginOpen = () => {
    setAdminCheck(true);
  };

  const closemodal = () => {
    setAdminCheck(false);
  };

  const register = (e) => {
    clearErrors();
    e.preventDefault();
    let config = {
      headers: {
        Authorization : 'Bearer '+ localStorage.getItem('token-data'),
      }
    }
    
    let data = {
      name: nameR,
      email: emailR,
      password: passwordR
    }

    axios.post("/register",qs.stringify(data),config)
    .then(result  => {
      console.log(result)
      if(result.data.status === "ok")
      {
        let e = document.getElementById("successm");
          e.style.opacity=1;
          e.style.color= green
          setSuccess(result.data.data)
          setTimeout(()=>{
            setSuccess("");
            e.style.opacity=0;
        },10000);
      }
      if(result.data.status === "error")
      {
        if(result.data.error === "Email ID already exists.")
        {
        let e = document.getElementById("erroree");
              e.style.opacity=1;
              setEmailError(result.data.error);
               setTimeout(()=>{
                    setEmailError("");
                    e.style.opacity=0;
                },10000);
        }
        else if(result.data.error==="Password length should be more than 8 characters")
        {
              let e = document.getElementById("errorppc");
              e.style.opacity=1;
              setPasswordError(result.data.error);
              setTimeout(()=>{
                setPasswordError("");
                e.style.opacity=0;
              },10000);
        }
        else if(result.data.error==="Invalid name")
        {
          let e = document.getElementById("errorname");
              e.style.opacity=1;
              setnameError(result.data.error);
              setTimeout(()=>{
                setnameError("");
                e.style.opacity=0;
              },10000);
        }
      }
    })
  }

  return (
    <>
    <Router>
    <div className="app">
      <div className="header">
        <div className="title-container">
          <div className="title">COVID RELIEF</div>
          <div>
            <a href="https://forms.gle/FXoAnjJtufRcoDGJ9" target="_blank" rel="noopener noreferrer">Donate Plasma!</a>
          </div>
        </div>
        <div className="navbar">
          <div className="login-btn" id="admin-btn" 
          onClick={loginOpen}
          >
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="1.83em" height="2em" 
          viewBox="0 0 496 512">
            <path className="login-icon" d="M248 104c-53 0-96 43-96 96s43 96 96 96s96-43 96-96s-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4c14.9-23 40.4-38.6 69.6-39.5c20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5c-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9c-10.2 0-26 9.6-57.6 9.6c-31.5 0-47.4-9.6-57.6-9.6c-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"/>
          </svg>
          </div>
            <div className="navlinks">
                <NavLink to="/" exact className="link">Ambulance</NavLink>
                <NavLink to="/Beds" className="link">Bed Availablity</NavLink>
                <NavLink to="/Blood" className="link">Blood Donors</NavLink>
                <NavLink to="/Medicine" className="link">Medicine</NavLink>
                <NavLink to="/Food" className="link">Food</NavLink>
                <NavLink to="/Testing" className="link">Home Testing</NavLink>
                <NavLink to="/Consultation" className="link">Online Consultation</NavLink>
                <NavLink to="/Oxygen" className="link">Oxygen</NavLink>
                <NavLink to="/Plasma" className="link">Plasma Donors</NavLink>
                <NavLink to="/Remdesivir" className="link">Remdesivir</NavLink>
                <NavLink to="/Counselling" className="link">TeleCounselling</NavLink>
            </div>
        </div>
        </div>

        {
          
        (logincheck || localStorage.getItem('token-data') !== null) ?
          ( 
          <div className="admin-cover" id="admin-cover">
            <div className="login-tab">
            <div className="admin-x-btn" onClick={closemodal}>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24">
                <path className="admin-x" d="M13.314 11.9l3.535-3.536a1 1 0 1 0-1.414-1.414l-3.536 3.535L8.364 6.95A1 1 0 1 0 6.95 8.364l3.535 3.535l-3.535 3.536a1 1 0 1 0 1.414 1.414l3.535-3.535l3.536 3.535a1 1 0 1 0 1.414-1.414l-3.535-3.536z"/>
              </svg>
            </div>      
            <div className="login">
            <div className="sv"></div> 
            <div className="login-title" id="signin">You are Logged in as {localStorage.getItem('name')}!</div>
            <button className="log" onClick={handleLogOut}>LOGOUT</button> 
            <div className="login-title" id="signin">REGISTER A USER</div>

            <input className="login-input" type="text" placeholder="Name"
            required
            onChange={(e) => setnameR(e.target.value)}
            id="name"></input>
            <p className="logerror" id="errorname">{nameError}</p>

            <input className="login-input" type="email" placeholder="Email"
            required
            onChange={(e) => setEmailR(e.target.value)}
            id="email"></input>
            <p className="logerror" id="erroree">{emailError}</p> 

            <input className="login-input" type="password" placeholder="Password"
            required
            onChange={(e) => setPasswordR(e.target.value)}
            id="password"></input>
            <p className="logerror" id="errorppc">{passwordError}</p>

            <div className="login-flex">
              <label className="password-check-label">Show Password</label>
              <input className="checkbox" type="checkbox" id="passwordcheck" onClick={showpass}/>
              <label htmlFor="passwordcheck" className="switch"/>      
            </div>  
            <button className="log" onClick={register}>Register</button>
            <p className="logerror" id="successm">{success}</p>
            </div>
            </div>
          </div>
          )
          :
          (
            <div className="admin-cover" id="admin-cover" >
            <div className="login-tab">
            <div className="admin-x-btn" onClick={closemodal}>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24">
                <path className="admin-x" d="M13.314 11.9l3.535-3.536a1 1 0 1 0-1.414-1.414l-3.536 3.535L8.364 6.95A1 1 0 1 0 6.95 8.364l3.535 3.535l-3.535 3.536a1 1 0 1 0 1.414 1.414l3.535-3.535l3.536 3.535a1 1 0 1 0 1.414-1.414l-3.535-3.536z"/>
              </svg>
            </div>
            <div className="login">
            <div className="sv"></div>            

            <div className="login-title" id="signin">ADMINISTRATOR LOGIN</div>

            <input className="login-input" type="email" placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"></input>
            <p className="logerror" id="errore">{emailError}</p> 

            <input className="login-input" type="password" placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            id="password"></input>
            <p className="logerror" id="errorp">{passwordError}</p>

            <div className="login-flex">
              <label className="password-check-label">Show Password</label>
              <input className="checkbox" type="checkbox" id="passwordcheck" onClick={showpass}/>
              <label htmlFor="passwordcheck" className="switch"/>      
            </div>  
            <button className="log" onClick={submit}>LOGIN</button>
            </div>
            </div>
            </div>
          )
          }  
 
      <Switch>
        <Route path="/" exact component={props => (<Ambulance {...props} user={user}/>)}></Route>
        <Route path="/Beds" component={props => (<Beds {...props} user={user}/>)}></Route>
        <Route path="/Blood" component={props => (<Blood {...props} user={user}/>)}></Route>
        <Route path="/Medicine" component={props => (<Med {...props} user={user}/>)}></Route>
        <Route path="/Food" component={props => (<Food {...props} user={user}/>)}></Route>
        <Route path="/Testing" component={props => (<Testing {...props} user={user}/>)}></Route>
        <Route path="/Consultation" component={props => (<Consultation {...props} user={user}/>)}></Route>
        <Route path="/Oxygen" component={props => (<Oxygen {...props} user={user}/>)}></Route>
        <Route path="/Plasma" component={props => (<Plasma {...props} user={user}/>)}></Route>
        <Route path="/Remdesivir" component={props => (<Rem {...props} user={user}/>)}></Route>
        <Route path="/Counselling" component={props => (<Counselling {...props} user={user}/>)}></Route>
      </Switch>
      <Widget/>
    </div>
    </Router> 
    </>
  );
}

export default Main;
