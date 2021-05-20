const About = () => {
    // overflow: hidden;
    const share = () =>{
        let body = document.querySelector("body");
        body.style.overflow = "hidden";      
        let cover = document.getElementById("about-cover");
        cover.style.display = "grid";
    }
   
    const closemodal = (e) => {
        let cover = document.getElementById("about-cover");
        let body = document.querySelector("body");
        if (e.target === cover) {
            cover.style.display = "none";
            body.style.overflow = "unset";      
        }
    }

    const closemodalx = () => {
        let cover = document.getElementById("about-cover");
        let body = document.querySelector("body");
        cover.style.display = "none";
        body.style.overflow = "unset"; 
    }

    return(
        <>
        <div className="info-container" onClick={share}>
            <div className="about">ABOUT</div>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="info">
                <g  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </g>
            </svg>
        </div>
        
        <div className="about-cover" id="about-cover" onClick={closemodal}>
        <div className="info-box">
            <div className="about-head-container">
                <div className="info-header">ABOUT</div>
                <div className="close-popup1" onClick={closemodalx}>
                    <div className="x11"></div>
                    <div className="x21"></div>
                </div>
            </div>
            <div className="about-flex">
                <div className="instruction">
                    Let's Be The Change

                </div>
                <div className="instruction">
                    About
                    <p className="para">
                    This site is made to assist people with Verified Information related to COVID.
                    <br/>
                    Resources are verified by Volunteers
                    </p>
                </div>
                <div className="e-form-container">
                    <div className="e-from-title">Have a Suggestion or Issue?</div>
                    <p className="para">Talk to Us.</p>
                    <form className="e-form" action="https://formsubmit.co/tech@iku.earth" method="POST">
                        <input type="text" className="e-input-title" name="Name" placeholder="Name" required/>
                        <textarea type="text" className="e-input-desc" name="Query" placeholder="Add your query here..." required/>
                        <button type="submit" className="e-link-btn">SEND</button>
                    </form>
                </div>
            </div>
        </div>
        </div>

        </>
    );
};

export default About;


