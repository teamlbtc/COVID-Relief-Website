import {useEffect, useState} from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import {axios} from './axios';
import qs from 'qs';    


const Form = ({collectionname, setStateUpdate}) =>{

    const [inputtry, setTry] = useState("");
    const [btntxt, setBtnTxt] = useState("ADD");
    const [inputname, setInputName] = useState("");
    const [inputdesc, setInputDesc] = useState("");
    const [inputlocation, setInputLoc] = useState("");
    const [inputtiming, setInputTime] = useState("");
    const [inputsource, setInputSource] = useState("");
    const [inputcontactname, setInputCName] = useState("");
    const [inputcontactnum, setInputCNum] = useState("");
    const [inputcontactemail, setInputCEmail] = useState("");
    const [inputlink, setInputLink] = useState("");
    const [inputverified, setInputVerified] = useState("");
    const [inputverifiedby, setInputVerifiedBy] = useState("");
    const [inputavailable, setInputAvailable] = useState(false);
    const [inputprice, setInputPrice] = useState("");
    const [inputcapacity, setInputCapacity] = useState("");
    const [inputmedname, setInputMedName] = useState("");
    const [inputbloodgroup, setInputBloodGroup] = useState("");
    const [inputomrcondition, setInputOMRCondition] = useState("");
    const [inputoxygentype, setInputOxygenType] = useState("");
    const [inputmedtype, setInputMedType] = useState("");
    const [inputpbtype, setInputPBType] = useState("");
    const [inputfoodtype, setInputFoodType] = useState("");
    const [inputcharges, setInputCharges] = useState("");
    const [inputconsultationtype, setInputConsultationType] = useState("");
    const [samename, setSameName] = useState(false);

    useEffect(()=>{
        let name = window.localStorage.getItem("name");
        setInputVerifiedBy(name);
    },[])

    const consultationtypeinput = (e) => {
        setInputConsultationType(e.target.value);
    }
    const foodtypeinput = (e) => {
        setInputFoodType(e.target.value);
    }
    const chargesinput = (e) =>{
        setInputCharges(e.target.value);
    }
    const pbtypeinput = (e) => {
        setInputPBType(e.target.value);
    }
    const medtypeinput = (e) => {
        setInputMedType(e.target.value);
    }
    const oxygentypeinput = (e) => {
        setInputOxygenType(e.target.value);
    }
    const omrconditioninput = (e) => {
        setInputOMRCondition(e.target.value);
    }
    const bloodgroupinput = (e) => {
        setInputBloodGroup(e.target.value);
    }
    const mednameinput = (e) => {
        setInputMedName(e.target.value);
    }
    const capacityinput = (e) => {
        setInputCapacity(e.target.value);
    }
    const priceinput = (e) => {
        setInputPrice(e.target.value);
    }
    const nameinput = (e) => {
        setInputName(e.target.value);
        samename ? setInputCName(e.target.value) : setInputCName("");
    }
    const descinput = (e) => {
        setInputDesc(e.target.value);
    }
    const locinput = (e) => {
        setInputLoc(e.target.value);
    }
    const timeinput = (e) => {
        setInputTime(e.target.value);
    }
    const sourceinput = (e) => {
        setInputSource(e.target.value);
    }
    const cnameinput = (e) => {
        setInputCName(e.target.value);
    }
    const cnuminput = (e) => {
        setInputCNum(e.target.value);
    }
    const cemailinput = (e) => {
        setInputCEmail(e.target.value);
    }
    const linkinput = (e) => {
        setInputLink(e.target.value);
    }
    const verifiedinput = (e) => {
        setInputVerified(e.target.value);
    }
    const verifiedbyinput = (e) => {
        setInputVerifiedBy(e.target.value);
    }           
    const availableinput = (e) => {
        setInputAvailable(e.target.checked);
    }

    useEffect(()=>{
        let namefield=document.getElementById("name");
        let cnumfield=document.getElementById("cnum");
        if (collectionname!=="/onlinedoc")
        {
            namefield.required=true;
            cnumfield.required=true;
        }
        let verifier = document.getElementById("verifier");
        if (inputverified==="0")
        {   
            verifier.required=true;
        }
        else
        {   
            verifier.required=false;
        }
    },[inputverified, collectionname]);

    
    const setLink = (e) =>{
    e.preventDefault();
    if (inputcontactname!==""&&inputverified!=="")
    {   
        if (collectionname==="/ambulance"||collectionname==="/bed"||collectionname==="/hometesting"||collectionname==="/tele")
        {   
            setBtnTxt("PLEASE WAIT");
            let btn = document.getElementById("add-btn");
            btn.disabled=true;
            btn.style.backgroundColor="var(--lgrey)";
            axios.post(collectionname, 
            qs.stringify({
                name : inputname,
                description : inputdesc,
                location_covered : inputlocation,
                timings : inputtiming,
                contact_name : inputcontactname,
                contact_number : inputcontactnum,
                contact_email : inputcontactemail,
                link_to_go : inputlink,
                verified : inputverified,
                verified_by : inputverifiedby,
                source : inputsource,
                available : inputavailable
            }))
            .then(() => {
                setInputName("");
                setInputDesc("");
                setInputLoc("");
                setInputTime("");
                setInputCName("");
                setInputCNum("");
                setInputCEmail("");
                setInputLink("");
                setInputVerified("");
                setInputVerifiedBy("");
                setInputSource("");                
                setInputAvailable(false);
                setStateUpdate(true);
                setTry("Your Entry has Been Added Below.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--accent)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },2000);
            })
            .catch((err)=>{
                setTry("An Error Occurred at Our End.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },5000);
            });
        }
        else if (collectionname==="/blooddonor")
        {   
            if(inputpbtype!=="")
            {
            setBtnTxt("PLEASE WAIT");
            let btn = document.getElementById("add-btn");
            btn.disabled=true;
            btn.style.backgroundColor="var(--lgrey)";
            axios.post(collectionname, 
                qs.stringify({
                name : inputname,
                description : inputdesc,
                location_covered : inputlocation,
                timings : inputtiming,
                contact_name : inputcontactname,
                contact_number : inputcontactnum,
                contact_email : inputcontactemail,
                link_to_go : inputlink,
                verified : inputverified,
                verified_by : inputverifiedby,
                source : inputsource,
                available : inputavailable,
                type : inputpbtype,
                blood_group : inputbloodgroup,
            }))
            .then(() => {
                setInputName("");
                setInputDesc("");
                setInputLoc("");
                setInputTime("");
                setInputCName("");
                setInputCNum("");
                setInputCEmail("");
                setInputLink("");
                setInputVerified("");
                setInputVerifiedBy("");
                setInputSource("");                
                setInputAvailable(false);
                setInputBloodGroup("")
                setInputPBType("");
                setStateUpdate(true);
                setTry("Your Entry has Been Added Below.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--accent)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },2000);
            })
            .catch((err)=>{
                setTry("An Error Occurred at Our End.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },5000);
            });
            }
            else
            {
                setTry("Please Enter Required Fields.")
                let fail = document.getElementById("add-link");
                fail.style.opacity = 1;
                fail.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    fail.style.opacity = 0;
                },2000);
            }
        }
        else if (collectionname==="/medicine")
        {   
            if(inputomrcondition!==""&&inputmedtype!==""&&inputmedname!==""&&inputprice!=="")
            {
            setBtnTxt("PLEASE WAIT");
            let btn = document.getElementById("add-btn");
            btn.disabled=true;
            btn.style.backgroundColor="var(--lgrey)";
            axios.post(collectionname, 
                qs.stringify({
                name : inputname,
                description : inputdesc,
                location_covered : inputlocation,
                timings : inputtiming,
                contact_name : inputcontactname,
                contact_number : inputcontactnum,
                contact_email : inputcontactemail,
                link_to_go : inputlink,
                verified : inputverified,
                verified_by : inputverifiedby,
                source : inputsource,
                available : inputavailable,
                type : inputmedtype,
                condition : inputomrcondition,
                medicine_name : inputmedname,
                price : inputprice,
            }))
            .then(() => {
                setInputName("");
                setInputDesc("");
                setInputLoc("");
                setInputTime("");
                setInputCName("");
                setInputCNum("");
                setInputCEmail("");
                setInputLink("");
                setInputVerified("");
                setInputVerifiedBy("");
                setInputSource("");                
                setInputAvailable(false);
                setInputMedType("");
                setInputMedName("");
                setInputOMRCondition("");
                setInputPrice("");
                setStateUpdate(true);
                setTry("Your Entry has Been Added Below.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--accent)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },2000);
            })
            .catch((err)=>{
                setTry("An Error Occurred at Our End.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },5000);
            });
            }
            else
            {
            setTry("Please Enter Required Fields.")
            let fail = document.getElementById("add-link");
            fail.style.opacity = 1;
            fail.style.backgroundColor = "var(--red)";
            setTimeout(()=>{
                fail.style.opacity = 0;
            },2000);
            }
        }
        else if (collectionname==="/food")
        {   
            if(inputfoodtype!==""&&inputcharges!=="")
            {
            setBtnTxt("PLEASE WAIT");
            let btn = document.getElementById("add-btn");
            btn.disabled=true;
            btn.style.backgroundColor="var(--lgrey)";
            axios.post(collectionname, 
                qs.stringify({
                name : inputname,
                description : inputdesc,
                location_covered : inputlocation,
                timings : inputtiming,
                contact_name : inputcontactname,
                contact_number : inputcontactnum,
                contact_email : inputcontactemail,
                link_to_go : inputlink,
                verified : inputverified,
                verified_by : inputverifiedby,
                source : inputsource,
                available : inputavailable,
                type : inputfoodtype,
                charges: inputcharges
            }))
            .then(() => {
                setInputName("");
                setInputDesc("");
                setInputLoc("");
                setInputTime("");
                setInputCName("");
                setInputCNum("");
                setInputCEmail("");
                setInputLink("");
                setInputVerified("");
                setInputVerifiedBy("");
                setInputSource("");                
                setInputAvailable(false);
                setInputFoodType("");
                setInputCharges("");
                setStateUpdate(true);
                setTry("Your Entry has Been Added Below.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--accent)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },2000);
            })
            .catch((err)=>{
                setTry("An Error Occurred at Our End.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },5000);
            });
            }
            else
            {
            setTry("Please Enter Required Fields.")
            let fail = document.getElementById("add-link");
            fail.style.opacity = 1;
            fail.style.backgroundColor = "var(--red)";
            setTimeout(()=>{
                fail.style.opacity = 0;
            },2000);
            }
        }
        else if (collectionname==="/onlinedoc")
        {   
            if(inputcharges!=="")
            {
            setBtnTxt("PLEASE WAIT");
            let btn = document.getElementById("add-btn");
            btn.disabled=true;
            btn.style.backgroundColor="var(--lgrey)";
            axios.post(collectionname, 
                qs.stringify({
                name : inputname,
                description : inputdesc,
                location_covered : inputlocation,
                timings : inputtiming,
                contact_name : inputcontactname,
                contact_number : inputcontactnum,
                contact_email : inputcontactemail,
                link_to_go : inputlink,
                verified : inputverified,
                verified_by : inputverifiedby,
                source : inputsource,
                available : inputavailable,
                type : inputconsultationtype,
                charges : inputcharges
            }))
            .then(() => {
                setInputName("");
                setInputDesc("");
                setInputLoc("");
                setInputTime("");
                setInputCName("");
                setInputCNum("");
                setInputCEmail("");
                setInputLink("");
                setInputVerified("");
                setInputVerifiedBy("");
                setInputSource("");                
                setInputAvailable(false);
                setInputConsultationType();
                setInputCharges("")
                setStateUpdate(true);
                setTry("Your Entry has Been Added Below.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--accent)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },2000);
            })
            .catch((err)=>{
                setTry("An Error Occurred at Our End.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },5000);
            });
            }
            else
            {
            setTry("Please Enter Required Fields.")
            let fail = document.getElementById("add-link");
            fail.style.opacity = 1;
            fail.style.backgroundColor = "var(--red)";
            setTimeout(()=>{
                fail.style.opacity = 0;
            },2000);
            }
        }
        else if (collectionname==="/oxygen")
        {   
            if(inputomrcondition!==""&&inputoxygentype!==""&&inputcapacity!==""&&inputprice!=="")
            {
            setBtnTxt("PLEASE WAIT");
            let btn = document.getElementById("add-btn");
            btn.disabled=true;
            btn.style.backgroundColor="var(--lgrey)";
            axios.post(collectionname, 
                qs.stringify({
                name : inputname,
                description : inputdesc,
                location_covered : inputlocation,
                timings : inputtiming,
                contact_name : inputcontactname,
                contact_number : inputcontactnum,
                contact_email : inputcontactemail,
                link_to_go : inputlink,
                verified : inputverified,
                verified_by : inputverifiedby,
                source : inputsource,
                available : inputavailable,
                condition : inputomrcondition,
                type : inputoxygentype,
                capacity : inputcapacity,
                price : inputprice
            }))
            .then(() => {
                setInputName("");
                setInputDesc("");
                setInputLoc("");
                setInputTime("");
                setInputCName("");
                setInputCNum("");
                setInputCEmail("");
                setInputLink("");
                setInputVerified("");
                setInputVerifiedBy("");
                setInputSource("");                
                setInputAvailable(false);
                setInputOMRCondition("");
                setInputOxygenType("");
                setInputCapacity("");
                setInputPrice("");
                setStateUpdate(true);
                setTry("Your Entry has Been Added Below.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--accent)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },2000);
            })
            .catch((err)=>{
                setTry("An Error Occurred at Our End.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },5000);
            });
            }
            else
            {
            setTry("Please Enter Required Fields.")
            let fail = document.getElementById("add-link");
            fail.style.opacity = 1;
            fail.style.backgroundColor = "var(--red)";
            setTimeout(()=>{
                fail.style.opacity = 0;
            },2000);
            }
        }
        else if (collectionname==="/remdesivir")
        {   
            if(inputomrcondition!=="")
            {
            setBtnTxt("PLEASE WAIT");
            let btn = document.getElementById("add-btn");
            btn.disabled=true;
            btn.style.backgroundColor="var(--lgrey)";
            axios.post(collectionname, 
                qs.stringify({
                name : inputname,
                description : inputdesc,
                location_covered : inputlocation,
                timings : inputtiming,
                contact_name : inputcontactname,
                contact_number : inputcontactnum,
                contact_email : inputcontactemail,
                link_to_go : inputlink,
                verified : inputverified,
                verified_by : inputverifiedby,
                source : inputsource,
                available : inputavailable,
                condition : inputomrcondition,
            }))
            .then(() => {
                setInputName("");
                setInputDesc("");
                setInputLoc("");
                setInputTime("");
                setInputCName("");
                setInputCNum("");
                setInputCEmail("");
                setInputLink("");
                setInputVerified("");
                setInputVerifiedBy("");
                setInputSource("");                
                setInputAvailable(false);
                setInputOMRCondition("");
                setStateUpdate(true);
                setTry("Your Entry has Been Added Below.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--accent)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },2000);
            })
            .catch((err)=>{
                setTry("An Error Occurred at Our End.")
                let success = document.getElementById("add-link");
                success.style.opacity = 1;
                success.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    success.style.opacity = 0;
                    btn.disabled=false;
                    btn.style.backgroundColor="var(--accent)";
                    setBtnTxt("ADD");
                },5000);
            });
            }
            else
            {
            setTry("Please Enter Required Fields.")
            let fail = document.getElementById("add-link");
            fail.style.opacity = 1;
            fail.style.backgroundColor = "var(--red)";
            setTimeout(()=>{
                fail.style.opacity = 0;
            },2000);
            }
        }
    }
    else{
            setTry("Please Enter Required Fields.")
            let fail = document.getElementById("add-link");
            fail.style.opacity = 1;
            fail.style.backgroundColor = "var(--red)";
            setTimeout(()=>{
                fail.style.opacity = 0;
            },2000);
        }
    }

    const forminput = () =>{
        let l1 = document.getElementById("l1");
        let l2 = document.getElementById("l2");
        l1.classList.toggle("line1-open");
        l2.classList.toggle("line2-open");

        let form = document.getElementById("entry-form");
        form.classList.toggle("form-container-open");

        let btn = document.getElementById("btn-flex");
        btn.classList.toggle("btn-flex-open");

        let disclaimer = document.getElementById("entry-disclaimer");
        disclaimer.classList.toggle("entry-disclaimer-open");
    };

    const useStyles = makeStyles(() => ({
        formControl:{
            color:"var(--accent)",
            width: "60%",
            fontSize:"0.8rem",
            fontWeight: 600,
            marginLeft: "0.5rem",
            justifyContent:"center",
        },
        inputfield:{
            fontSize:"0.8rem",
            fontWeight: 600,
            color:"var(--dgrey)",
        },
        input:{
            color: "var(--lgrey)",
            fontSize:"0.8rem",
            fontWeight: 600,
            marginLeft: "0.5rem",
        },
        item:{
            fontSize:"0.7rem",
            fontWeight: 600,
            color:"var(--accent)",
        },
        datepicker:{
            marginLeft:"0.5rem",
            width:"60%",
        }
    }));

    const classes = useStyles();

    const NameCheck = () => {
        setSameName(!samename);
        let check = document.getElementById("contact-name").checked;
        if (check===true)
        {
            setInputCName(inputname);
        }
        else
        {
            setInputCName("");
        }
    }


    return( 
      <form className="entry-form" id="form" onSubmit={setLink}>
            <div className="form-title-container" onClick={forminput}>
                <div className="form-title">Add New Data</div>
                <div className="form-btn" >
                    <div className="line1" id="l1"></div>
                    <div className="line2" id="l2"></div>
                </div>
            </div>

            <div className="entry-disclaimer" id="entry-disclaimer">
                Note:
                <br/>
                Fields With ' * ' Are Compulsory.
                <br/>
                All Information Entered Will be Displayed as Cards Below.
                <br/>
                Please Fill All Details With Caution.
                <br/>
                Please Leave Fields Empty If Not Applicable. 
            </div>

            <div className="form-container" id="entry-form">

            <div className="add-content-flex">
            <div className="form-details" id="form-input">
            <div className="form-data-title">Service Details</div>
                <div className="input-flex" >   
                    <label className="label">Name 

                    {
                    (()=> {
                    if (collectionname==="/onlinedoc")
                    {   
                        <></> 
                    }                    
                    else
                    {   
                        return(
                        <div className="red">*</div>
                        );
                    }   
                    })()
                    }

                    </label>
                    <input className="input" id="name" value={inputname} onChange={nameinput} type="text" placeholder="Service Name"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Description</label>
                    <input className="input" value={inputdesc} onChange={descinput} type="text" placeholder="Service Description"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Location</label>
                    <input className="input" value={inputlocation} onChange={locinput} type="text" placeholder="Service Location"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Timings</label>
                    <input className="input" value={inputtiming} onChange={timeinput} type="text" placeholder="Service Timings"></input>
                </div>
            </div>
            
            <div className="form-details" id="form-input">
            <div className="form-data-title">Contact Information</div>
                <div className="input-flex">
                    <label className="service-contact-label">Same as Service Name</label>
                    <div className="service-checkbox-container">
                    <input className="checkbox" type="checkbox" checked={samename} id="contact-name" onChange={NameCheck}/>
                    <label htmlFor="contact-name" className="switch"></label> 
                    </div> 
                </div>
                <div className="input-flex" >   
                    <label className="label">Name<div className="red">*</div></label>
                    <input className="input" value={samename ? inputname : inputcontactname} onChange={samename ? "" : cnameinput} type="text" placeholder="Contact Name"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Number
                    {
                    (()=> {
                    if (collectionname==="/onlinedoc")
                    {   
                        <></> 
                    }                    
                    else
                    {   
                        return(
                        <div className="red">*</div>
                        );
                    }   
                    })()
                    }
                    </label>
                    <input className="input" id="cnum" value={inputcontactnum} onChange={cnuminput} type="number" placeholder="Contact Number" minLength="7" maxLength="13"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Email</label>
                    <input className="input" value={inputcontactemail} onChange={cemailinput} type="email" placeholder="email@email.com"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Link</label>
                    <input className="input" value={inputlink} onChange={linkinput} type="url" placeholder="https://www.examplesite.com"></input>
                </div>
            </div>
            </div>

            <div className="add-content-flex">
            <div className="form-details" id="form-input">
            <div className="form-data-title">Meta-data</div>
                <div className="input-flex" >   
                    <label className="label">Verified<div className="red">*</div></label>
                    <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Verificaiton Status</InputLabel>
                    <Select
                        value={inputverified}
                        onChange={verifiedinput}
                        placeholder="Verification Status"
                        className={classes.inputfield}
                        >
                        <MenuItem value={"0"}
                        fontSize="0.8rem"
                        fontWeight={500}
                        className={classes.item}>Verified</MenuItem>
                        <MenuItem value={"1"}
                        fontSize="0.8rem"
                        className={classes.item}>Not Verified</MenuItem>
                        <MenuItem value={"2"}
                        fontSize="0.8rem"
                        className={classes.item}>Verificaiton Pending</MenuItem>
                    </Select>
                    </FormControl>
                </div>
                <div className="input-flex" >   
                    <label className="label">Verified By</label>
                    <input id="verifier" className="input" value={inputverifiedby} onChange={verifiedbyinput} type="text" placeholder="Name of Verifier"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Source</label>
                    <input className="input" value={inputsource} onChange={sourceinput} type="text" placeholder="Enter Source"></input>
                </div>
                <div className="input-flex">
                    <label className="label">Available</label>
                    <div className="checkbox-container">
                    <input className="checkbox" type="checkbox" id="check" checked={inputavailable} onChange={availableinput}/>
                    <label htmlFor="check" className="switch"></label> 
                    </div>    
                </div>
            </div>
                        
            {
                (()=> {
                if (collectionname==="/blooddonor")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Type<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Donation Type</InputLabel>
                                    <Select
                                        value={inputpbtype}
                                        onChange={pbtypeinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        fontWeight={500}
                                        className={classes.item}>Platform</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Individual</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Blood Bank</MenuItem>
                                    </Select>
                                </FormControl>    
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Blood Group</label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Blood Group</InputLabel>
                                    <Select
                                        id="blooddonor"
                                        value={inputbloodgroup}
                                        onChange={bloodgroupinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"A+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>A+</MenuItem>
                                        <MenuItem value={"A-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>A-</MenuItem>
                                        <MenuItem value={"B+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>B+</MenuItem>
                                        <MenuItem value={"B-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>B-</MenuItem>
                                        <MenuItem value={"O+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>O+</MenuItem>
                                        <MenuItem value={"O-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>O-</MenuItem>
                                        <MenuItem value={"AB+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>AB+</MenuItem>
                                        <MenuItem value={"AB-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>AB-</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="/food")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Type<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Food Type</InputLabel>
                                    <Select
                                        value={inputfoodtype}
                                        onChange={foodtypeinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Home Chef</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>NGO</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Others</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">Charges<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Charges</InputLabel>
                                    <Select
                                        value={inputcharges}
                                        onChange={chargesinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Paid</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Free</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="/medicine")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Medicine Name<div className="red">*</div></label>
                                <input className="input" value={inputmedname} onChange={mednameinput} type="text" placeholder="Name"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Type<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Medicine Type</InputLabel>
                                    <Select
                                        value={inputmedtype}
                                        onChange={medtypeinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Tablet</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Syrup</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Injection</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>  
                            <div className="input-flex" >   
                                <label className="label">Condition<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Medicine Condition</InputLabel>
                                    <Select
                                        value={inputomrcondition}
                                        onChange={omrconditioninput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>No Stock</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Black Market</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Purchase</MenuItem>
                                        <MenuItem value={"3"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Waiting Period</MenuItem>
                                        <MenuItem value={"4"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Rental</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Price<div className="red">*</div></label>
                                <input className="input" value={inputprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="/onlinedoc")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Type</label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Consultation Type</InputLabel>
                                    <Select
                                        value={inputconsultationtype}
                                        onChange={consultationtypeinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Online</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Home</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">Charges<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Charges</InputLabel>
                                    <Select
                                        value={inputcharges}
                                        onChange={chargesinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Paid</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Free</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="/oxygen")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >       
                                <label className="label">Type<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Oxygen Type</InputLabel>
                                    <Select
                                        value={inputoxygentype}
                                        onChange={oxygentypeinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Cylinder</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Concentrator</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Both</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">Condition<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Oxygen Condition</InputLabel>
                                    <Select
                                        value={inputomrcondition}
                                        onChange={omrconditioninput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>No Stock</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Black Market</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Purchase</MenuItem>
                                        <MenuItem value={"3"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Waiting Period</MenuItem>
                                        <MenuItem value={"4"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Rental</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>                      
                            <div className="input-flex" >   
                                <label className="label">Capacity<div className="red">*</div></label>
                                <input className="input" value={inputcapacity} onChange={capacityinput} type="text" placeholder="Capacity"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Price<div className="red">*</div></label>
                                <input className="input" value={inputprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
                            </div>
                        </div>
                    );
                }       
                })()
            }
             </div>

        </div>
        <div className="btn-flex" id="btn-flex">
            <div className="try" id="add-link">{inputtry}</div>
            <button type="submit" className="add-link-btn" id="add-btn">{btntxt}</button>
        </div>
    </form>      
    );

};

export default Form;
