import {useState, useEffect} from 'react';

const Karanataka = ({setMedName}) => {   

    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            setLoader(false);
        },1000)
        setMedName("-Karanataka");
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
            <div className="rem">
            <div className="rem-steps">
                Medicine Karanataka
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

export default Karanataka;