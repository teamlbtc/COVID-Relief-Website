import {useState, useEffect} from 'react';

const Delivery = ({setMedName}) => {   

    const [loader, setLoader] = useState(true);
    
    
    useEffect(() => {
        setTimeout(()=>{
            setLoader(false);
        },1000)
        setMedName("Delivery");
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
                 Medicine Delivery
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

export default Delivery;