import { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {axios} from './axios';
import qs from 'qs';    

const Modal = ({
    editid,
    setEditId,
    collectionname, 
    editlist,
    editname,
    setEditName,
    editdesc,
    setEditDesc,
    editlocation,
    setEditLoc,
    edittiming,
    setEditTime,
    editsource,
    setEditSource,
    editcontactname,
    setEditCName,
    editcontactemail,
    setEditCEmail,
    editcontactnum,
    setEditCNum,
    editlink,
    setEditLink,
    editverified,
    setEditVerified,
    editverifiedby,
    setEditVerifiedBy,
    editavailable,
    setEditAvailable,
    editprice,
    setEditPrice,
    editcapacity, 
    setEditCapacity,
    editmedname,
    setEditMedName,
    editmedtype,
    setEditMedType,
    editbloodgroup,
    setEditBloodGroup,
    editrecoverydate,
    setEditRecoveryDate,
    editvaccinated,
    setEditVaccinated,
    editomrcondition,
    setEditOMRCondition,
    editoxygentype,
    setEditOxygenType,
    editpbtype,
    setEditPBType,
    editfoodtype,
    setEditFoodType,
    editconsultationtype,
    setEditConsultationType}) => {

    const consultationtypeinput = (e) => {
        setEditConsultationType(e.target.value);
    }
    const foodtypeinput = (e) => {
        setEditFoodType(e.target.value);
    }
    const pbtypeinput = (e) => {
        setEditPBType(e.target.value);
    }
    const medtypeinput = (e) => {
        setEditMedType(e.target.value);
    }
    const oxygentypeinput = (e) => {
        setEditOxygenType(e.target.value);
    }
    const omrconditioninput = (e) => {
        setEditOMRCondition(e.target.value);
    }
    const vaccinatedinput = (e) => {
        setEditVaccinated(e.target.checked);
    }
    const recoverydateinput = (inputrecoverydate) => {
        setEditRecoveryDate(inputrecoverydate);
      }
    const bloodgroupinput = (e) => {
        setEditBloodGroup(e.target.value);
    }
    const mednameinput = (e) => {
        setEditMedName(e.target.value);
    }
    const capacityinput = (e) => {
        setEditCapacity(e.target.value);
    }
    const priceinput = (e) => {
        setEditPrice(e.target.value);
    }
    const nameinput = (e) => {
        setEditName(e.target.value);
    }
    const descinput = (e) => {
        setEditDesc(e.target.value);
    }
    const locinput = (e) => {
        setEditLoc(e.target.value);
    }
    const timeinput = (e) => {
        setEditTime(e.target.value);
    }
    const sourceinput = (e) => {
        setEditSource(e.target.value);
    }
    const cnameinput = (e) => {
        setEditCName(e.target.value);
    }
    const cnuminput = (e) => {
        setEditCNum(e.target.value);
    }
    const cemailinput = (e) => {
        setEditCEmail(e.target.value);
    }
    const linkinput = (e) => {
        setEditLink(e.target.value);
    }
    const verifiedinput = (e) => {
        setEditVerified(e.target.value);
    }
    const verifiedbyinput = (e) => {
        setEditVerifiedBy(e.target.value);
    }                
    const availableinput = (e) => {
        setEditAvailable(e.target.checked);
    }

    useEffect(()=>{
        if (collectionname==="/ambulance"||collectionname==="/bed"||collectionname==="/hometesting"||collectionname==="/tele")
        {
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
            });
        }
        else if (collectionname==="/blooddonor")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
                setEditPBType(i.type);
                setEditBloodGroup(i.blood_group);
            });
        }
        else if (collectionname==="/medicine")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
                setEditMedType(i.type);
                setEditMedName(i.medicine_name);
                setEditOMRCondition(i.condition);
                setEditPrice(i.price);
            });
        }
        else if (collectionname==="/food")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
                setEditFoodType(i.type);
            });
        }
        else if (collectionname==="/onlinedoc")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
                setEditConsultationType(i.type);
            });
        }
        else if (collectionname==="/oxygen")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
                setEditOMRCondition(i.condition);
                setEditOxygenType(i.type);
                setEditCapacity(i.capacity);
                setEditPrice(i.price);
            });
        }
        else if (collectionname==="/plasma")
        {   
            editlist.forEach(i=>{
                setEditName(i.name );
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
                setEditBloodGroup(i.blood_group);
                setEditPBType(i.type);
                setEditRecoveryDate(i.covid_recovery_date !== null ? i.covid_recovery_date.toString() : null);
                setEditVaccinated(i.vaccinated);
            });
        }
        else if (collectionname==="/remdesivir")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditAvailable(i.available);
                setEditOMRCondition(i.condition);
            });
        }
        
    },[editlist, editid]);

    const deleteData = () => {
        axios.delete(`${collectionname}/${editid}`)
        .then((res) => {
            setEditId(""); 
        })
        .catch((err)=>{
            console.log(err);
        });
        let body = document.querySelector("body");
        body.style.overflow = "unset"; 
    };

    const updateData = () => {
        if (collectionname==="/ambulance"||collectionname==="/bed"||collectionname==="/hometesting"||collectionname==="/tele")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
              }))
            .then((res) => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditId("");
                console.log(res);
                let body = document.querySelector("body");
                body.style.overflow = "unset"; 
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        else if (collectionname==="/blooddonor")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
                type: editpbtype,
                blood_group: editbloodgroup
            }))
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditPBType("");
                setEditBloodGroup("");
                setEditId(""); 
                let body = document.querySelector("body");
                body.style.overflow = "unset";          
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        else if (collectionname==="/medicine")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
                type: editmedtype,
                condition : editomrcondition,
                medicine_name : editmedname,
                price : editprice
            }))
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditMedType("");
                setEditMedName("");
                setEditPrice("");
                setEditOMRCondition("");
                setEditId("");     
                let body = document.querySelector("body");
                body.style.overflow = "unset";        
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        else if (collectionname==="/food")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
                type: editfoodtype,
            }))
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditFoodType("");
                setEditId(""); 
                let body = document.querySelector("body");
                body.style.overflow = "unset"; 
            });
        }
        else if (collectionname==="/onlinedoc")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
                type: editconsultationtype,
            }))
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditConsultationType("");
                setEditId("");
                let body = document.querySelector("body");
                body.style.overflow = "unset"; 
            });
        }        
        else if (collectionname==="/oxygen")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
                condition : editomrcondition,
                type : editoxygentype,
                capacity : editcapacity,
                price : editprice
            }))
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditOMRCondition("");
                setEditOxygenType("");
                setEditCapacity("");
                setEditPrice("");
                setEditId("");
                let body = document.querySelector("body");
                body.style.overflow = "unset"; 
            });
        }
        else if (collectionname==="/remdesivir")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
                condition : editomrcondition,
            }))
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditOMRCondition("");
                setEditId("");
                let body = document.querySelector("body");
                body.style.overflow = "unset"; 
            });
        }
        else if (collectionname==="/plasma")
        {   
            axios.patch(`${collectionname}/${editid}`, 
            qs.stringify({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                source : editsource,
                available : editavailable,
                type: editpbtype,
                blood_group: editbloodgroup,
                covid_recovery_date: editrecoverydate,
                vaccinated: editvaccinated
            }))
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditAvailable(false);
                setEditPBType("");
                setEditBloodGroup("");
                setEditRecoveryDate(null);
                setEditVaccinated("");
                setEditId("");
                let body = document.querySelector("body");
                body.style.overflow = "unset"; 
            });
        }             
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

    return (
    <>
        <div className="edit-box">

        <div className="add-content-flex">

        <div className="form-details" id="form-input">
        <div className="form-data-title">Service Details</div>
        <div className="input-flex">   
        <label className="label">Name<div className="red">*</div></label>
        <input className="edit-input" value={editname} onChange={nameinput} type="text" placeholder="Service Name" maxLength="50"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Description</label>
        <input className="edit-input" value={editdesc} onChange={descinput} type="text" placeholder="Service Description" maxLength="100"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Location</label>
        <input className="edit-input" value={editlocation} onChange={locinput} type="text" placeholder="Service Location" maxLength="50"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Timings</label>
        <input className="edit-input" value={edittiming} onChange={timeinput} type="text" placeholder="Service Timings" maxLength="50"></input>
        </div>
        </div>

        <div className="form-details" id="form-input">
        <div className="form-data-title">Contact Information</div>
        <div className="input-flex" >   
        <label className="label">Contact Name<div className="red">*</div></label>
        <input className="edit-input" value={editcontactname} onChange={cnameinput} type="text" placeholder="Contact Name" maxLength="50"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Contact Number<div className="red">*</div></label>
        <input className="edit-input" value={editcontactnum} onChange={cnuminput} type="tel" placeholder="Contact Number" minLength="10" maxLength="13"></input>
        </div>
    <div className="input-flex" >   
        <label className="label">Contact Email</label>
        <input className="edit-input" value={editcontactemail} onChange={cemailinput} type="email" placeholder="Contact E-mail" maxLength="50"></input>
    </div>
    <div className="input-flex" >   
        <label className="label">Link</label>
        <input className="edit-input" value={editlink} onChange={linkinput} type="url" placeholder="https://www.examplesite.com"></input>
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
                        value={editverified}
                        onChange={verifiedinput}
                        placeholder="Verification Status"
                        className={classes.inputfield}
                        required
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
        <input className="edit-input" value={editverifiedby} onChange={verifiedbyinput} type="text" placeholder="Name of Verifier"></input>
    </div>
    <div className="input-flex" >       
        <label className="label">Source</label>
        <input className="edit-input" value={editsource} onChange={sourceinput} type="text" placeholder="Enter Source " maxLength="50"></input>
    </div>
    <div className="input-flex">
        <label className="label">Available</label>
        <div className="checkbox-container">
        <input className="checkbox" type="checkbox" id="checkedit1" checked={editavailable} onChange={availableinput}/>
        <label htmlFor="checkedit1" className="switch"></label> 
        </div>    
    </div>
</div>
            
{
    (()=> {
    if (collectionname==="/blood")
    {
        return (
            <div className="form-details" id="form-input">
            <div className="form-data-title">Information</div>
            <div className="input-flex" >   
                <label className="label">Donation Type<div className="red">*</div></label>
                <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Donation Type</InputLabel>
                    <Select
                        value={editpbtype}
                        onChange={pbtypeinput}
                        className={classes.inputfield}
                        required
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
                        value={editbloodgroup}
                        onChange={bloodgroupinput}
                        className={classes.inputfield}
                        required
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
                            value={editfoodtype}
                            onChange={foodtypeinput}
                            className={classes.inputfield}
                            required
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
            </div>
        );
    }
    else if (collectionname==="/medicine")
    {
        return (
            <div className="form-details" id="form-input">
            <div className="form-data-title">Information</div>
            <div className="input-flex" >   
                <label className="label">Condition<div className="red">*</div></label>
                <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Medicine Condition</InputLabel>
                    <Select
                        value={editomrcondition}
                        onChange={omrconditioninput}
                        className={classes.inputfield}
                        required
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
                <label className="label">Type<div className="red">*</div></label>
                <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Medicine Type</InputLabel>
                    <Select
                        value={editmedtype}
                        onChange={medtypeinput}
                        className={classes.inputfield}
                        required
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
                    <label className="label">Medicine Name<div className="red">*</div></label>
                    <input className="edit-input" value={editmedname} onChange={mednameinput} type="text" placeholder="Name" maxLength="50"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Price<div className="red">*</div></label>
                    <input className="edit-input" value={editprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
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
                    <label className="label">Type<div className="red">*</div></label>
                    <FormControl className={classes.formControl}>
                        <InputLabel  
                        fontSize="0.8rem"
                        fontWeight={500}
                        className={classes.input}
                        >Consultation Type</InputLabel>
                        <Select
                            value={editconsultationtype}
                            onChange={consultationtypeinput}
                            className={classes.inputfield}
                            required
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
            </div>
        );
    }
    else if (collectionname==="/oxygen")
    {
        return (
            <div className="form-details" id="form-input">
            <div className="form-data-title">Information</div>
            <div className="input-flex" >   
                <label className="label">Condition<div className="red">*</div></label>
                <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Oxygen Condition</InputLabel>
                    <Select
                        value={editomrcondition}
                        onChange={omrconditioninput}
                        className={classes.inputfield}
                        required
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
                <label className="label">Type<div className="red">*</div></label>
                <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Oxygen Type</InputLabel>
                    <Select
                        value={editoxygentype}
                        onChange={oxygentypeinput}
                        className={classes.inputfield}
                        required
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
                    <label className="label">Capacity</label>
                    <input className="edit-input" value={editcapacity} onChange={capacityinput} type="text" placeholder="Capacity"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Price</label>
                    <input className="edit-input" value={editprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
                </div>
            </div>
        );
    }
    else if (collectionname==="/plasma")
    {
        return (
            <div className="form-details" id="form-input">
            <div className="form-data-title">Information</div>
            <div className="input-flex" >   
                <label className="label">Donation Type<div className="red">*</div></label>
                <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Donation Type</InputLabel>
                    <Select
                        value={editpbtype}
                        onChange={pbtypeinput}
                        className={classes.inputfield}
                        required
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
                        value={editbloodgroup}
                        onChange={bloodgroupinput}
                        className={classes.inputfield}
                        required
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
                <div className="input-flex" >   
                    <label className="label">COVID Recovery Date</label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        placeholder="Recovery Date"
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="recovery-date-picker-inline"
                        value={editrecoverydate}
                        onChange={recoverydateinput}
                        autoOk={true}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        className={classes.datepicker}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="input-flex">
                    <label className="label">Vaccinated</label>
                    <div className="checkbox-container">
                        <input className="checkbox" type="checkbox" id="checkedit2" checked={editvaccinated} onChange={vaccinatedinput} />
                        <label htmlFor="checkedit2" className="switch"></label> 
                    </div>    
                </div>
            </div>
        );
    }
    else if (collectionname==="/remdesivir")
    {
        return (
            <div className="form-details" id="form-input">
            <div className="form-data-title">Information</div>
            <div className="input-flex" >   
                <label className="label">Condition<div className="red">*</div></label>
                <FormControl className={classes.formControl}>
                    <InputLabel 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Remdesivir Condition</InputLabel>
                    <Select
                        value={editomrcondition}
                        onChange={omrconditioninput}
                        className={classes.inputfield}
                        required
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
                    </Select>
                </FormControl>
            </div>
            </div>
        );
    }        
    })()
    }
    </div>
    </div>
    <div className="edit-btn-container">
        <div className="edit-btn-flex">
            <button className="edit-d-btn" id="add-btn" onClick={deleteData}>DELETE</button>
            <button className="edit-u-btn" id="add-btn" onClick={updateData}>UPDATE</button>
        </div>
    </div>

    </>
    );
};

export default Modal;