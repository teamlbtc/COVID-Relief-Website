import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Home from './Page/Home';
import Ambulance from './Page/Ambulance';
import Info from './Page/Information';
import Blood from './Page/Blood';
import Consultation from './Page/Consultation';
import Counselling from './Page/Counselling';
import Med from './Page/Medicine';
import Delivery from './Page/Delivery';
import GeoTagged from './Page/GeoTagged';
import Karnataka from './Page/Karnataka';
import Bangalore from './Page/Bangalore';
import Food from './Page/Food';
import Oxygen from './Page/Oxygen';
import Rem from './Page/Remdesivir';
import Testing from './Page/Testing';
import Widget from './Page/res/widget';
import Top from './Page/res/top';
import About from './Page/res/about';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import qs from 'qs';
import {axios} from './Page/res/axios';
import Volunteer from './Page/res/volunteer';
import fire from './Page/fire_config';

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
  const [newuser, setNewUser] = useState(false);
  const [medName, setMedName] = useState("");
  
  fire.analytics();

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
  });

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

  const trimname = (e) =>{
    setnameR((e.target.value)
    .replace(/(^\s*)|(\s*$)/gi, "")
    .replace(/[ ]{2,}/gi," ")
    .replace(/\n +/,"\n"));
  }

  const trimemail = (e) =>{
    setEmailR((e.target.value)
    .replace(/(^\s*)|(\s*$)/gi, ""));
  }

  const trimpassword = (e) =>{
    setPasswordR((e.target.value)
    .replace(/(^\s*)|(\s*$)/gi, ""));
  }

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
          e.style.color= "var(--green)";
          setSuccess(result.data.data)
          usercheck();
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
        else if(result.data.error==="Password length should be more than 8 characters" || result.data.error==="Invalid Password")
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

  const usercheck = () =>{
    setNewUser(!newuser);
    clearInputs();
  }

  const openNav = () => {
    document.querySelector("body").style.overflow="hidden";
    let navlink = document.getElementById("navlinks");
    navlink.classList.add("navlinks-open");

    let navcover = document.getElementById("navcover");
    navcover.classList.add("nav-cover-open");
  }

  const closeNavE = (e) => {
    let navcover = document.getElementById("navcover");
    let navlink = document.getElementById("navlinks");
    if (e.target===navcover)
    { 
      document.querySelector("body").style.overflow="";
      navcover.classList.remove("nav-cover-open");
      navlink.classList.remove("navlinks-open");
    }
  }

  const closeNav = () => {
    let navcover = document.getElementById("navcover");
    let navlink = document.getElementById("navlinks");
    document.querySelector("body").style.overflow="";
    navcover.classList.remove("nav-cover-open");
    navlink.classList.remove("navlinks-open");
  }
  
  return (
    <Router>
    <div className="app">
      <div className="header">
      <Volunteer/>
        <div className="title-container">
          <NavLink to="/" exact className="title">COVID RELIEF</NavLink>
            <div className="food-about-container">
              <button className='food-form' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSduhCb3rwaFnCLSL1JyMehoJDKmI0tHeeZCNDc8RQ6uOMLqjA/viewform',"_blank")} >Catering Service Form</button>
              <About/>
            </div>
        </div>
        <div className="navbar-container">
        <div className="navbar">
          <div className="login-btn" id="admin-btn" 
          onClick={loginOpen}
          >
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24">
            <path className="login-icon" d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10s10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"/>
          </svg>
          </div>
          
          <div class="box" onClick={openNav}> 
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24">
              <g fill="none">
                <path className="burger-line" d="M4 6h16M4 12h16M4 18h7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </div>
          
          <div 
          className="nav-cover" id="navcover" onClick={closeNavE}>
          </div>
          <div className="navlinks" id="navlinks">
              <NavLink to="/Ambulance" className="link" onClick={closeNav}>Ambulance</NavLink>
              <NavLink to="/Oxygen" className="link" onClick={closeNav}>Oxygen</NavLink>
              <NavLink to="/Blood" className="link" onClick={closeNav}>Blood Donors</NavLink>
              
              <div className="medlink" id="medlink">
                <div className="med-title">Medicine
                <div className="med">{medName}</div>
                </div>
                <div className="dropdown-menu" id="dropdown">
                  <NavLink to="/Delivery" className="link" onClick={closeNav}>Online Pharmacies</NavLink>
                  <NavLink to="/GeoTagged" className="link" onClick={closeNav}> Offline Pharmacies </NavLink>
                  <NavLink to="/Karnataka" className="link" onClick={closeNav}>Jana Aushadhi Kendra (Karnataka)</NavLink>
                  <NavLink to="/Bangalore" className="link" onClick={closeNav}>Jana Aushadhi Kendra (Bengaluru)</NavLink>
                </div>
              </div>
              
              <div className="dropdown-menu2" id="dropdown">
              <div>Medicine</div>
                  <NavLink to="/Delivery" className="link" onClick={closeNav}>Online Pharmacies</NavLink>
                  <NavLink to="/GeoTagged" className="link" onClick={closeNav}> Offline Pharmacies </NavLink>
                  <NavLink to="/Karnataka" className="link" onClick={closeNav}>Jana Aushadhi Kendra (Karnataka)</NavLink>
                  <NavLink to="/Bangalore" className="link" onClick={closeNav}>Jana Aushadhi Kendra (Bengaluru)</NavLink>
              </div>

              <NavLink to="/Food" className="link" onClick={closeNav}>Food</NavLink>
              <NavLink to="/Consultation" className="link" onClick={closeNav}>Online Consultation</NavLink>
              <NavLink to="/Testing" className="link" onClick={closeNav}>Home Testing</NavLink>
              <NavLink to="/Counselling" className="link" onClick={closeNav}>TeleCounselling</NavLink>
              <NavLink to="/Information" className="link" onClick={closeNav}>Information</NavLink>
              <NavLink to="/Remdesivir" className="link" onClick={closeNav}>Remdesivir</NavLink>
          </div>
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
            {newuser ?
              (
                <>
                <div className="login">          
                <div className="login-title" id="signin">REGISTER A USER!</div>

                  <input className="login-input" type="text" placeholder="Name"
                  required
                  onChange={trimname}
                  id="name"></input>
                  <p className="logerror" id="errorname">{nameError}</p>

                  <input className="login-input" type="email" placeholder="Email"
                  required
                  onChange={trimemail}
                  id="email"></input>
                  <p className="logerror" id="erroree">{emailError}</p> 

                  <input className="login-input" type="password" placeholder="Password"
                  required
                  onChange={trimpassword}
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
                <div className="sign-up-text"
                onClick={usercheck}>
                  Go Back</div>
                </>
               
              )
              :
              (
                <>
                <div className="login">
                <div className="login-title" id="signin">You are Logged in as {localStorage.getItem('name')}!</div>
                <button className="log" onClick={handleLogOut}>LOGOUT</button>       
                </div>
                <div className="sign-up-text"
                onClick={usercheck}>
                  Add A New Volunteer!</div>
                </>
              )
              }
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
                <>
                <div className="login">          
                <div className="login-title" id="signin">USER LOGIN</div>
    
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
                </>

            </div>
            </div>
          )
          }  
 
      <Switch>
        <Route path="/" exact component={props => (<Home {...props} setMedName={setMedName}/>)}></Route>
        <Route path="/Ambulance" component={props => (<Ambulance {...props} user={user} setMedName={setMedName}/>)}></Route>
        <Route path="/Blood" component={props => (<Blood {...props} user={user} setMedName={setMedName}/>)}></Route>
        <Route path="/Delivery" component={props => (<Delivery {...props} setMedName={setMedName}/>)}></Route>
        <Route path="/GeoTagged" component={props => (<GeoTagged {...props} setMedName={setMedName}/>)}></Route>
        <Route path="/Karnataka" component={props => (<Karnataka {...props} setMedName={setMedName}/>)}></Route>
        <Route path="/Bangalore" component={props => (<Bangalore {...props} setMedName={setMedName}/>)}></Route>
        <Route path="/Food" component={props => (<Food {...props} user={user} setMedName={setMedName}/>)}></Route>
        <Route path="/Testing" component={props => (<Testing {...props} user={user} setMedName={setMedName}/>)}></Route>
        <Route path="/Consultation" component={props => (<Consultation {...props} user={user} setMedName={setMedName}/>)}></Route>
        <Route path="/Oxygen" component={props => (<Oxygen {...props} user={user} setMedName={setMedName}/>)}></Route>
        <Route path="/Counselling" component={props => (<Counselling {...props} user={user} setMedName={setMedName}/>)}></Route>
        <Route path="/Information" component={props => (<Info {...props} setMedName={setMedName}/>)}></Route>
        <Route path="/Remdesivir" component={props => (<Rem {...props} setMedName={setMedName}/>)}></Route>
      </Switch>
      <Top/>
      <Widget/>
    </div>
    </Router>
  );
}

export default Main;
