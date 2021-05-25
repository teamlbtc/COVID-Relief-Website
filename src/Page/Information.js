import {useState, useEffect} from 'react';

const Info = ({setMedName}) => {

    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            setLoader(false);
        },1000)
        setMedName("");
    }, []);

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
            <>
            </>
        )
        }
            <iframe
            title="Bed Sheet"
            id="iframe"
            className="sheet"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVgt5whO4_XEsAAUbBrFk6zAsPCpKOWj9LCfNp7KqS6-OOdUq5FeXK7Vz5fr-6LHhxn73hUwqPsomi/pubhtml?widget=false&amp;headers=false&amp;scroll=no"/>
            
        </div>
    );
};

export default Info;