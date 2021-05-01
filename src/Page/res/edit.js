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


    const [cover, setCover] = useState("none");
    const [edit, setEdit] = useState("");

    useEffect(()=>{
        if(user!==true){
            setEdit("none");
        }
        else
        {
            setEdit("grid");
        }
    },[user])
;

    useEffect(()=>{
        if (collectionname==="/ambulance"||collectionname==="/bed"||collectionname==="/hometesting"||collectionname==="/tele")
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
        else if (collectionname==="/plasma")
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
            setEditBloodGroup("");
            setEditPBType("");
            setEditRecoveryDate("");
            setEditVaccinated(false);
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
        let cover = document.getElementById("cover2");
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
                
            <div className="edit-btn" style={{display: `${edit}`}} onClick={popup} idvalue={id}>EDIT</div>
            
        <div className="edit-cover" id="cover2" style={{display: `${cover}`}} onClick={closemodal}>
 
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
  
        </div>
        </div>
        </div>
    );
};

export default Editbtn;