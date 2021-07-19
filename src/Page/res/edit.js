import {useState, useEffect} from 'react';
import Modal from './editmodal';
import moment from 'moment';

const Editbtn = ({
    user,
    id, 
    collectionname, 
    editlist,
    setEditList,
    linklist,
    editid,
    setEditId,
    last_update_time,
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
    editomrcondition,
    setEditOMRCondition,
    editoxygentype,
    setEditOxygenType,
    editpbtype,
    setEditPBType,
    editfoodtype,
    setEditFoodType,
    editcharges,
    setEditCharges,
    editconsultationtype,
    setEditConsultationType}) => {


    const [cover, setCover] = useState("none");
    const [edit, setEdit] = useState("");

    useEffect(()=>{
        if(user!==true){
            setEdit("none");
        }
        else
        {
            setEdit("flex");
        }
    },[user]);

    const setEditArray = () => {
        if (collectionname==="/ambulance"||collectionname==="/hometesting"||collectionname==="/tele")
        {
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
        }
        else if (collectionname==="/blooddonor")
        {   
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
        }
        else if (collectionname==="/medicine")
        {   
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
            setEditOMRCondition("");
            setEditPrice("");
            
        }
        else if (collectionname==="/food")
        {   
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
            setEditCharges("");
        }
        else if (collectionname==="/onlinedoc")
        {   
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
            setEditAvailable(false);;
            setEditConsultationType("");
            setEditCharges("");
        }
        else if (collectionname==="/oxygen")
        {   
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
        }
        else if (collectionname==="/remdesivir")
        {   
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
        }
    }

    useEffect(()=>{
        setEditArray();
    },[editid]);

    useEffect(()=>{
        if(editid==="")
        {
            setCover("none")
        }
    },[editid])


    const popup = (e) =>{
        let body = document.querySelector("body");
        body.style.overflow = "hidden";      
        setCover("grid");
        setEditId(e.target.getAttribute("idvalue"));
    }

    useEffect(()=>{
        setEditList(linklist.filter(i=>i._id===editid));
    },[editid, linklist, setEditList])

    const closemodal = (e) => {
        let cover = document.getElementById(`edit-${id}`);
        let body = document.querySelector("body");
        if (e.target === cover) {
            body.style.overflow = "unset";
            setCover("none");
            setEditId("");
        }   
    }

    const closemodalx = () => {
        let body = document.querySelector("body");
        body.style.overflow = "unset";
        setCover("none");
        setEditId("");
    }

    return(
        <div className="edit-container" >

            <div className="time-data">Last Updated: {moment(last_update_time.toString()).calendar()}</div>
                
            <div className="edit-btn" style={{display: `${edit}`}} onClick={popup} idvalue={id}>
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="edit-icon-box">
                <g fill="none">
                    <path className="edit-icon" d="M27.314 10.343a4 4 0 0 0-5.657-5.657L20.254 6.09l5.656 5.656l1.404-1.403z"/>
                    <path className="edit-icon" d="M24.496 13.16L12.541 25.117a5 5 0 0 1-2.323 1.315l-4.582 1.146a1 1 0 0 1-1.213-1.213l1.146-4.582a5 5 0 0 1 1.315-2.323L18.839 7.504l5.657 5.657z"/>
                </g>
            </svg>
                EDIT
            </div>
            
        <div className="edit-cover" id={`edit-${id}`} onClick={closemodal} style={{display: `${cover}`}}>
 
        <div className="edit-modal">

            <div className="edit-head-container">
                <div className="edit-header">EDIT</div>
                <div className="edit-close-popup" onClick={closemodalx}>
                    <div className="edit-x1"></div>
                    <div className="edit-x2"></div>
                </div>
            </div>
        
            <Modal 
            key={id}
            id={id}
            collectionname={collectionname}
            editid={editid}
            setEditId={setEditId}
            editlist={editlist}
            setEditList={setEditList}
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
            editavailable={editavailable}
            setEditAvailable={setEditAvailable}

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
            editomrcondition={editomrcondition}
            setEditOMRCondition={setEditOMRCondition}
            editoxygentype={editoxygentype}
            setEditOxygenType={setEditOxygenType}
            editpbtype={editpbtype}
            setEditPBType={setEditPBType}
            editfoodtype={editfoodtype}
            setEditFoodType={setEditFoodType}
            editcharges={editcharges}
            setEditCharges={setEditCharges}
            editconsultationtype={editconsultationtype}
            setEditConsultationType={setEditConsultationType}/>     
        </div>
        </div>
        </div>
    );
};

export default Editbtn;