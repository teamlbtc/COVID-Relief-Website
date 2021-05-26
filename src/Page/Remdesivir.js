import {useState, useEffect} from 'react';

const Rem = ({setMedName}) => {   

    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            setLoader(false);
        },1000)
    }, []);
    
    setMedName("");
 
    return(
        <div className="content">
        {loader ?
        (
            <div className="loader-container">
            <div className="loader">Fetching Data</div>
            </div>
        )
        :
        (
        <div className="rem">
            
        <div className="rem-steps">
            Steps to procure Remdesivir injection in Karnataka :
        </div>

        <p className="para">
        To ensure uninterrupted Remdesivir supply, the Karnataka State Drug Control department has opened a war room. This war room functions round the clock.
        <br/>
        Patient’s attenders seeking to obtain Remdesivir in Karnataka are requested to call the below mentioned helpline number.
        <br/>
        <br/>
        Karnataka Drug Control Department Remdesivir Helpline (24x7)
        <a href="tel:+91 8951755722"
        className="rem-link">+91 8951755722</a>
        </p>
        <br/>
        Please keep the below mentioned information handy before contacting the department.
        <ol className="list">
            <li>SRF ID</li>
            <li>BU Number</li>
            <li>Patient Mobile Number</li>
            <li>Patient Name</li>
            <li>Age</li>
            <li>Gender</li>
            <li>Hospital Details(Address with PIN code)</li>
            <li>Hospital Admission details: </li>
            <li>Doctor's Prescription</li>
            <li>Number of doses as per the prescription</li>
        </ol>
        <br/>
        <p className="para">
        As the department gets innumerable requests on a daily basis, it is recommended to call the number multiple times.
        <br/>
        In case the hospital is not registered for COVID-19 care, the patient’s attender needs to raise an indent to the BBMP through the hospital.
        </p>
        </div>
        )
        }
        </div>
    );
};

export default Rem;