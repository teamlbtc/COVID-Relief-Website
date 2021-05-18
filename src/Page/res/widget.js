const Widget = () => {

    let url=window.location.href;

    const facebookLink = (Url) => {
        return Url=`https://www.facebook.com/sharer?u=${Url}`;
    };

    const twitterLink = (Url) => {
        return Url=`https://twitter.com/share?url=${Url}`;
    };

    const linkedinLink = (Url) => {
        return Url=`https://www.linkedin.com/shareArticle?url=${Url}`;
    };

    const urlcopy = () => {
        let dummy = document.createElement('input'),
        text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        setTimeout(()=>{
            let x=document.getElementById("link-copied");
                x.style.opacity=1;
        }, 50);

        setTimeout(()=>{
            let x=document.getElementById("link-copied");
                x.style.opacity=0;
        }, 2500);
    }

    const share = () =>{         
        let cover = document.getElementById("cover1");
        let body = document.querySelector("body");
        body.style.overflow = "hidden"; 
        cover.style.display = "grid";
    }
   
    const closemodal = (e) => {
        let cover = document.getElementById("cover1");
        let body = document.querySelector("body");
        if (e.target === cover) {
            body.style.overflow = "unset"; 
            cover.style.display = "none";   
        }
    }

    const closemodalx = () => {
        let cover = document.getElementById("cover1");
        let body = document.querySelector("body");
        body.style.overflow = "unset"; 
        cover.style.display = "none";   
    }

    return(
        <>
        <div className="share-widget" id="share-widget" onClick={share} >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20"
            className="share-icon">
                <path d="M15 13.442c-.633 0-1.204.246-1.637.642l-5.938-3.463c.046-.188.075-.384.075-.584s-.029-.395-.075-.583L13.3 6.025A2.48 2.48 0 0 0 15 6.7c1.379 0 2.5-1.121 2.5-2.5S16.379 1.7 15 1.7s-2.5 1.121-2.5 2.5c0 .2.029.396.075.583L6.7 8.212A2.485 2.485 0 0 0 5 7.537c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5a2.48 2.48 0 0 0 1.7-.675l5.938 3.463a2.339 2.339 0 0 0-.067.546A2.428 2.428 0 1 0 15 13.442z"/>
            </svg>
        </div>
        <div className="cover" id="cover1" onClick={closemodal}>
        <div className="popup-box" id="popup-box">
            <div className="head-container">
                <div className="popup-header">Share This Page</div>
                <div className="close-popup" onClick={closemodalx}>
                    <div className="x1"></div>
                    <div className="x2"></div>
                </div>
            </div>
            <div className="share-flex">
                <a href={facebookLink(url)} 
                target="blank" 
                rel="noreferrer noopener"
                className="media-link">
                    Facebook
                </a>
                <a href={twitterLink(url)} 
                target="blank" 
                rel="noreferrer noopener"
                className="media-link">
                    Twitter
                </a>
                <a href={linkedinLink(url)} 
                target="blank" 
                rel="noreferrer noopener"
                className="media-link">
                    LinkedIn
                </a>
                <div className="media-link" onClick={urlcopy}>
                    Copy Link
                    <div className="link-copied" id="link-copied">Link Copied!</div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Widget;