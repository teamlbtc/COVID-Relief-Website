import {useState, useEffect} from 'react';
import Data from './res/data';
import Form from './res/entryform';
import {axios} from './res/axios';

const Med = ({user}) => {

    useEffect(()=>{
        let form=document.getElementById("form");
        if(user===true){
            form.style.display="flex";
        }
        else
        {
            form.style.display="none";
        }
    },[user]);

    const [linklist, setLinkList] = useState([]);
    const [collectionname] = useState("/medicine");
    const [editlist, setEditList] = useState([]);
    const [editid, setEditId] = useState("");
    const [editname, setEditName] = useState("");
    const [editdesc, setEditDesc] = useState("");
    const [editlocation, setEditLoc] = useState("");
    const [edittiming, setEditTime] = useState("");
    const [editsource, setEditSource] = useState("");
    const [editcontactname, setEditCName] = useState("");
    const [editcontactnum, setEditCNum] = useState("");
    const [editcontactemail, setEditCEmail] = useState("");
    const [editlink, setEditLink] = useState("");
    const [editverified, setEditVerified] = useState("");
    const [editverifiedby, setEditVerifiedBy] = useState("");
    const [editavailable, setEditAvailable] = useState();
    const [editprice, setEditPrice] = useState("");
    const [editcapacity, setEditCapacity] = useState("");
    const [editmedname, setEditMedName] = useState("");
    const [editomrcondition, setEditOMRCondition] = useState("");
    const [editmedtype, setEditMedType] = useState("");
    const [stateupdate, setStateUpdate] = useState(false);
    const [loader, setLoader] = useState(true);
    const [page, setPage] = useState(1);
    const [size] = useState(16);
    const [pages, setPages] = useState();
    
    useEffect(() => {
        const request = async () => { 
            await axios.get(collectionname, {
            params:{
                pageNo:page,
                size:size
            }
        })
        .then((res)=>{
            if (res && res.data.data) 
            setLinkList(res.data.data);
            setPages(res.data.pages);
            setStateUpdate(false);
            setLoader(false);
        })
        .catch((err)=>console.log(err));
    }
    request();

    }, [collectionname, editid, stateupdate, page, size]);

    const pageno = [];

    for(let i = 1;  i<=pages; i++){
        pageno.push(i);
    }

    const setCurPage = (e) => {
        setLoader(true);
        setPage(e.target.getAttribute("pageid"));
    }
    return(
        <div className="content" id="top">
        <Form collectionname={collectionname}
        setStateUpdate={setStateUpdate}/>
                {loader ?
        (
            <div className="loader-container">
            <div className="loader">Fetching Data</div>
            </div>
        )
        :
        (
            <>
        <div className="card-grid">
            {linklist.map((i)=>(
                <Data
                key={i._id}
                contact_email={i.contact_email}
                contact_name={i.contact_name}
                contact_number={i.contact_number}
                description={i.description}
                id={i._id}
                last_update_time={i.last_update_time}
                link_to_go={i.link_to_go}
                location_covered={i.location_covered}
                name={i.name}
                source={i.source}
                timings={i.timings}
                verified={i.verified}
                verified_by={i.verified_by}
                available={i.available}
                omrcondition={i.condition}
                medtype={i.type}
                medicine_name={i.medicine_name}
                medprice={i.price}
                user={user}
                collectionname={collectionname}
                linklist={linklist}
                setLinkList={setLinkList}
                editlist={editlist}
                setEditList={setEditList}
                editid={editid}
                setEditId={setEditId}
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
                editomrcondition={editomrcondition}
                setEditOMRCondition={setEditOMRCondition}
                />
            ))}
            </div>
            <div className="current-page">Page - {page} of {pages}</div>
            <div className="page-bar-container">Go to:
            {pageno.map(i=>(
                <div 
                key={i} 
                className="page-no" 
                pageid={i}
                onClick={setCurPage}>
                    {i}
                </div>
            ))}
            </div>
            <div className="end" >
            <br/>
            <br/>
            <a className="end" href="#top">Click here to go back to the top.</a>   
            </div>
            </>
        )
        }
        </div>
    );
};

export default Med;