import {useEffect, useState} from 'react';
import Editbtn from './edit';
import moment from 'moment'
const Data = (
    {user,
    id,
    comments,
    contact_email,
    contact_name,
    contact_number,
    description,
    last_update_time,
    link_to_go,
    location_covered,
    name,
    source,
    timings,
    verified,
    verified_by,
    available,
    covid_recovery_date,
    vaccinated,
    oxytype,
    oxyprice,
    oxycapacity,
    omrcondition,
    medtype,
    medicine_name,
    medprice,
    consultationtype,
    foodtype,
    pbtype,
    blood_group,
    collectionname,
    linklist,
    setLinkList,
    editlist, 
    setEditList,
    editid,
    setEditId,
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
    editcomments,
    setEditComment,
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
    setEditConsultationType,
    }
    ) => {

    const [availabletext, setAvailableText] = useState();
    const [availablecolor, setAvailableColor] = useState();     
    const [verifiedtext, setVerifiedText] = useState();
    const [verifiedbytext, setVerifiedByText] = useState();
    const [color, setColor] = useState();
    const [numcolor, setNumColor] = useState();
    const [numpoint, setNumPoint] = useState();
    const [ecolor, setEColor] = useState();
    const [epoint, setEPoint] = useState();
    const [linkcolor, setLinkColor] = useState();
    const [linkpoint, setLinkPoint] = useState();
    const [pbtypetext, setPBTypetext] = useState();
    const [foodtypetext, setFoodTypetext] = useState();
    const [consulttext, setConsultConditionText] = useState();
    const [omrconditiontext, setOMRConditionText] = useState();
    const [medtypetext, setMedTypeText] = useState();
    const [oxytypetext, setOxyTypeText] = useState();
    const [vaccinatedtext, setVaccinatedText] = useState();

    
    useEffect(()=>{
        if(available===true)
        {
            setAvailableText("Available");
            setAvailableColor("var(--accent)");
        }
        else if(available===false)
        {
            setAvailableText("Unavailable");
            setAvailableColor("var(--lgrey)");
        }
    },[available]);


    useEffect(()=>{
        if(vaccinated===true)
        {
            setVaccinatedText("Yes");
        }
        else
        {
            setVaccinatedText("No");
        }
    },[vaccinated]);

    useEffect(()=>{
        if(oxytype==="0")
        {
            setOxyTypeText("Cylinder");
        }
        else if(oxytype==="1")
        {
            setOxyTypeText("Concentrator");
        }
        else if(oxytype==="2")
        {
            setOxyTypeText("Both");
        }
        else
        {
            setOxyTypeText("No Data");
        }
    },[oxytype]);

    useEffect(()=>{
        if(medtype==="0")
        {
            setMedTypeText("Tablet");
        }
        else if(medtype==="1")
        {
            setMedTypeText("Syrup");
        }
        else if(medtype==="2")
        {
            setMedTypeText("Injection");
        }
        else 
        {
            setMedTypeText("No Data");
        }
    },[medtype]);

    useEffect(()=>{
        if(omrcondition==="0")
        {
            setOMRConditionText("No Stock");
        }
        else if(omrcondition==="1")
        {
            setOMRConditionText("Black Market");
        }
        else if(omrcondition==="2")
        {
            setOMRConditionText("Purchase");
        }
        else if(omrcondition==="3")
        {
            setOMRConditionText("Waiting Period");
        }
        else if(omrcondition==="4")
        {
            setOMRConditionText("Rental");
        }
        else 
        {
            setOMRConditionText("No Data");
        }
    },[omrcondition]);

    useEffect(()=>{
        if(consultationtype==="0")
        {
            setConsultConditionText("Online");
        }
        else if(consultationtype==="1")
        {
            setConsultConditionText("Home");
        }
        else 
        {
            setConsultConditionText("No Data");
        }
    },[consultationtype]);

    useEffect(()=>{
        if(foodtype==="0")
        {
            setFoodTypetext("Home Chef");
        }
        else if(foodtype==="1")
        {
            setFoodTypetext("NGO");
        }
        else if(foodtype==="2")
        {
            setFoodTypetext("Other");
        }
        else 
        {
            setFoodTypetext("No Data");
        }
    },[foodtype]);

    useEffect(()=>{
        if(pbtype==="0")
        {
            setPBTypetext("Platform");
        }
        else if(pbtype==="1")
        {
            setPBTypetext("Individual");
        }
        else if(pbtype==="2")
        {
            setPBTypetext("Blood Bank");
        }
        else 
        {
            setPBTypetext("No Data");
        }
    },[pbtype]);


    //verification check
    useEffect(() => {
        if(verified==="0")
        {
            setVerifiedText("Verified"); 
            setVerifiedByText(verified_by);
            setColor("var(--green)");
        }
        else if(verified==="2")
        {
            setVerifiedText("Verificaiton Pending");
            setVerifiedByText("No Data");
            setColor("var(--yellow)");
            
        }
        else
        {
            setVerifiedText("Not Verified");
            setVerifiedByText("No Data");
            setColor("var(--lgrey)");
        }
    }, [verified, verified_by]);

    useEffect(()=>{
        if (contact_email!=="")
        {
            setEColor("var(--accent)");
            setEPoint("unset");
        }
        else
        {
            setEColor("var(--back)");
            setEPoint("none");
        }   
        
        if (contact_number!=="")
        {
            setNumColor("var(--accent)");
            setNumPoint("unset");
        }
        else
        {
            setNumColor("var(--back)");
            setNumPoint("none");
        }
        
        if (link_to_go!=="")
        {
            setLinkColor("var(--accent)");
            setLinkPoint("unset");
        }
        else
        {
            setLinkColor("var(--back)");
            setLinkPoint("none");
        }
    },[contact_number, link_to_go, contact_email])

    const getClickableLink = (link_to_go) => {
        return link_to_go.startsWith("http://") || link_to_go.startsWith("https://") ?
        link_to_go:`https://${link_to_go}`;
      };
    
    const detailsbtn = () => {
        let cover = document.getElementById(id);
        cover.style.display="grid";
        let body = document.querySelector("body");
        body.style.overflow="hidden";
    }

    const closemodalx = () => {
        let cover = document.getElementById(id);
        cover.style.display = "none";
        let body = document.querySelector("body");
        body.style.overflow="unset";
    }

    return(
        <>
        <div className="card">
            <div className="name-container">
                <div className="name">{name}</div>
                <div className="av-container">
                    <div className="available" style={{backgroundColor: `${availablecolor}`}}>{availabletext}</div>
                    <div className="verified-btn">

                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24">
                        <path className="verification-icon" style={{fill: `${color}`}} id="verification-icon" d="M22.42 11.34l-1.86-2.13l.26-2.82c.05-.5-.29-.96-.77-1.07l-2.76-.62l-1.44-2.44c-.26-.43-.79-.61-1.26-.41L12 2.96L9.41 1.85c-.46-.2-1-.02-1.25.41L6.71 4.69l-2.75.62c-.49.11-.83.56-.78 1.06l.26 2.83l-1.87 2.14c-.33.38-.33.94 0 1.32l1.87 2.13l-.26 2.83c-.05.5.29.96.77 1.07l2.76.63l1.44 2.43c.26.43.8.61 1.26.41L12 21.03l2.59 1.11c.46.2 1 .02 1.25-.41l1.44-2.43l2.76-.63c.49-.11.82-.57.77-1.07l-.26-2.82l1.86-2.13a.98.98 0 0 0 .01-1.31zm-12.19 3.49l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01z"/>
                    </svg>
      
                    <div className="verified-card" id="verified-card">    
                        <div className="data-container">
                            <div className="data-label">Status:</div>
                        <div className="data">{verifiedtext}</div>
                        </div>
                        <div className="data-container">
                            <div className="data-label">Verified By:</div>
                        <div className="data">{verifiedbytext}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <Editbtn
            key={id}
            user={user}
            collectionname={collectionname}
            id={id} 
            editlist={editlist}
            setEditList={setEditList} 
            linklist={linklist}
            setLinkList={setLinkList}
            editid={editid}
            setEditId={setEditId}
            available={available}
            editname={editname}
            setEditName={setEditName}
            editdesc={editdesc}
            setEditDesc={setEditDesc}
            editlocation={editlocation}
            setEditLoc={setEditLoc}
            edittiming={edittiming}
            setEditTime={setEditTime}
            editsource={editsource}
            setEditSource={setEditSource}
            editcontactname={editcontactname}
            setEditCName={setEditCName}
            editcontactemail={editcontactemail}
            setEditCEmail={setEditCEmail}
            editcontactnum={editcontactnum}
            setEditCNum={setEditCNum}
            editlink={editlink}
            setEditLink={setEditLink}
            editverified={editverified}
            setEditVerified={setEditVerified}
            editverifiedby={editverifiedby}
            setEditVerifiedBy={setEditVerifiedBy}
            editcomments={editcomments}
            setEditComment={setEditComment}
            editavailable={editavailable}
            setEditAvailable={setEditAvailable}
            last_update_time={last_update_time}

            editprice={editprice}
            setEditPrice={setEditPrice}
            editcapacity={editcapacity}
            setEditCapacity={setEditCapacity}
            editmedname={editmedname}
            setEditMedName={setEditMedName}
            editmedtype={editmedtype}
            setEditMedType={setEditMedType}
            editbloodgroup={editbloodgroup}
            setEditBloodGroup={setEditBloodGroup}
            editrecoverydate={editrecoverydate}
            setEditRecoveryDate={setEditRecoveryDate}
            editvaccinated={editvaccinated}
            setEditVaccinated={setEditVaccinated}
            editomrcondition={editomrcondition}
            setEditOMRCondition={setEditOMRCondition}
            editoxygentype={editoxygentype}
            setEditOxygenType={setEditOxygenType}
            editpbtype={editpbtype}
            setEditPBType={setEditPBType}
            editfoodtype={editfoodtype}
            setEditFoodType={setEditFoodType}
            editconsultationtype={editconsultationtype}
            setEditConsultationType={setEditConsultationType}/>


            <div className="desc-container">
                <div className="desc-label">Description:</div> 
                <div className="desc">{description !== "" ? description : "No Data"}</div>
            </div>
            <div className="data-container">
            <div className="details" onClick={detailsbtn}>Details</div> 
                <div className="contact-info">
                <a href={`tel:${contact_number}`}
                style={{pointerEvents: `${numpoint}`}}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    className="contact-icon"
                    style={{fill: `${numcolor}`, pointerEvents: `${numpoint}`}}>
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                </a>
                <a href={`mailto:${contact_email !== "" ? contact_email : ""}`}
                style={{pointerEvents: `${epoint}`}}
                target="_top">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="contact-icon"
                    style={{fill: `${ecolor}`, pointerEvents: `${epoint}`}}>
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10z"/>
                    </svg>
                </a>
                <a href={link_to_go !== "" ? getClickableLink(link_to_go) : ""}
                style={{pointerEvents: `${linkpoint}`}}
                target="_blank" 
                rel="noreferrer" >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    className="contact-icon"
                    style={{fill: `${linkcolor}`, pointerEvents: `${linkpoint}`}}>
                        <path d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42z"/>
                    </svg>
                </a>             
                </div>
            </div>
        </div>

        <div className="details-card-cover" id={id}>

            <div className="details-card-container">
            <div className="details-head-container">
                <div className="details-close-popup" onClick={closemodalx}>
                    <div className="details-x1"></div>
                    <div className="details-x2"></div>
                </div>
            </div>

            <div className="details-card">
            <div className="name-container">
                <div className="dname">{name}</div>
                <div className="av-container">
                    <div className="davailable" style={{backgroundColor: `${availablecolor}`}}>{availabletext}</div>
                    <div className="dverified-btn">

                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24">
                        <path className="dverification-icon" style={{fill: `${color}`}} id="verification-icon" d="M22.42 11.34l-1.86-2.13l.26-2.82c.05-.5-.29-.96-.77-1.07l-2.76-.62l-1.44-2.44c-.26-.43-.79-.61-1.26-.41L12 2.96L9.41 1.85c-.46-.2-1-.02-1.25.41L6.71 4.69l-2.75.62c-.49.11-.83.56-.78 1.06l.26 2.83l-1.87 2.14c-.33.38-.33.94 0 1.32l1.87 2.13l-.26 2.83c-.05.5.29.96.77 1.07l2.76.63l1.44 2.43c.26.43.8.61 1.26.41L12 21.03l2.59 1.11c.46.2 1 .02 1.25-.41l1.44-2.43l2.76-.63c.49-.11.82-.57.77-1.07l-.26-2.82l1.86-2.13a.98.98 0 0 0 .01-1.31zm-12.19 3.49l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01z"/>
                    </svg>
      
                    <div className="dverified-card" id="verified-card">    
                        <div className="extra-container">
                            <div className="data-label">Status:</div>
                        <div className="data">{verifiedtext}</div>
                        </div>
                        <div className="extra-container">
                            <div className="data-label">Verified By:</div>
                        <div className="data">{verifiedbytext}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="time-container" >
                <div className="dtime-data">Last Updated: {moment(last_update_time.toString()).calendar()}</div>
            </div>
            
            <div className="extra-container">
                <div className="ddesc-label">Description:</div> 
                <div className="ddesc">{description !== "" ? description : "No Data"}</div>
            </div>

            <div className="card-flex">
            <div className="extra">
                <div className="extra-container">
                    <div className="data-label">Location:</div> 
                    <div className="data">{location_covered !== "" ? location_covered : "No Data"}</div>
                </div>
                <div className="extra-container">
                <div className="data-label">Timings:</div> 
                    <div className="data">{timings !== "" ? timings : "No Data"}</div>
                </div>
                <div className="extra-container">
                <div className="data-label">Source:</div> 
                    <div className="data">{source !== "" ? source : "No Data"}</div>
                </div>
            </div>

                {
                (()=> {
                if (collectionname==="/blooddonor")
                {
                    return (                    
                    <div className="extra">
                    <div className="extra-container">
                    <div className="data-label">Blood Type:</div> 
                        <div className="data">{pbtypetext !== "" ? pbtypetext : "No Data"}</div>
                    </div>
                    <div className="extra-container">
                    <div className="data-label">Blood Group:</div> 
                        <div className="data">{blood_group !== "" ? blood_group : "No Data"}</div>
                    </div>
                    </div>);
                }
                else if (collectionname==="/food")
                {
                    return (
                        <div className="extra">
                        <div className="extra-container">
                        <div className="data-label">Type:</div> 
                            <div className="data">{foodtypetext !== "" ? foodtypetext : "No Data"}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="/medicine")
                {
                    return (
                        <div className="extra">
                        <div className="extra-container">
                        <div className="data-label">Condition:</div> 
                            <div className="data">{omrconditiontext !== "" ? omrconditiontext : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Type:</div> 
                            <div className="data">{medtypetext !== "" ? medtypetext : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Medicine Name:</div> 
                            <div className="data">{medicine_name !== "" ? medicine_name : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Price:</div> 
                            <div className="data">{medprice !== "" ? medprice : "No Data"}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="/onlinedoc")
                {
                    return (
                        <div className="extra">
                        <div className="extra-container">
                        <div className="data-label">Condition:</div> 
                            <div className="data">{consulttext !== "" ? consulttext : "No Data"}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="/oxygen")
                {
                    return (
                        <div className="extra">
                        <div className="extra-container">
                        <div className="data-label">Condition:</div>
                            <div className="data">{omrconditiontext !== "" ? omrconditiontext : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Type:</div> 
                            <div className="data">{oxytypetext !== "" ? oxytypetext : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Capacity:</div> 
                            <div className="data">{oxycapacity !== "" ? oxycapacity : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Price:</div> 
                            <div className="data">{oxyprice !== "" ? oxyprice : "No Data"}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="/plasma")
                {
                    return (
                        <div className="extra">
                        <div className="extra-container">
                        <div className="data-label">Blood Group:</div> 
                            <div className="data">{blood_group  !== "" ? blood_group : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Type:</div> 
                            <div className="data">{pbtypetext  !== "" ? pbtypetext : "No Data"}</div>
                        </div>
                        <div className="extra-container">
                        <div className="data-label">Covid Recovery Date:</div> 
                            <div className="data">{covid_recovery_date ? moment(covid_recovery_date.toString()).calendar() : "No Data"}</div>
                        </div> 
                        <div className="extra-container">
                        <div className="data-label">Vaccinated:</div> 
                            <div className="data">{vaccinatedtext !== "" ? vaccinatedtext : "No Data"}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="/remdesivir")
                {
                    return (
                        <div className="extra">
                        <div className="extra-container">
                        <div className="data-label">Condition:</div> 
                            <div className="data">{omrconditiontext !== "" ? omrconditiontext : "No Data"}</div>
                        </div>
                        </div>
                    );
                }

                })()
            }
            </div>
            <div className="data-container">
            <div className="contact-label">{contact_name}</div> 
                <div className="contact-info">
                <a className="contact-icon"  
                href={`tel:${contact_number}`}
                style={{fill: `${numcolor}`, pointerEvents: `${numpoint}`}}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    padding="0.5rem">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                </a>
                <a className="contact-icon" 
                href={`mailto:${contact_email !== "" ? contact_email : ""}`}
                style={{fill: `${ecolor}`, pointerEvents: `${epoint}`}}
                target="_top">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10z"/>
                    </svg>
                </a>
                <a className="contact-icon" 
                
                href={link_to_go !== "" ? getClickableLink(link_to_go) : ""} 
                style={{fill: `${linkcolor}`, pointerEvents: `${linkpoint}`}}
                target="_blank" 
                rel="noreferrer" >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24">
                        <path d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42z"/>
                    </svg>
                </a>             
                </div>
            </div>

            </div>
            </div>

        </div>
        </>
    );
};

export default Data;