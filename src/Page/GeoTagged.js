import {useState, useEffect} from 'react';

const GeoTagged = ({setMedName}) => {   

    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            setLoader(false);
        },1000)
    }, []);
    
    setMedName("Geo-Tagged");

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
                Medicine Geo-Tagged
            </div>
            <p className="para">
                Coming Soon
            </p>
            </div>
        )
        }
        </div>
    );
};

export default GeoTagged;