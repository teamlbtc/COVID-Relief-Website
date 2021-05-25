import {useState, useEffect} from 'react';

const Home = () => {   

    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            setLoader(false);
        },1000)

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
            Landing Page
        </div>
        <p className="para">
            WELCOME
        </p>
        </div>
        )
        }
        </div>
    );
};

export default Home;