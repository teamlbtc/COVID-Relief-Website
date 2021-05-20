import { useState } from "react";

const Widget = () => {

    const [copy, setCopy] = useState("Copy Link");

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
            setCopy("Copied!");
        }, 50);

        setTimeout(()=>{
            setCopy("Copy Link");
        }, 2500);
    }

    const share = (e) =>{
        let body = document.querySelector("body");
        let cover = document.getElementById("cover1");
        let box = document.getElementById("share-widget");
        let shareflex = document.getElementById("share-flex");
        let shareicon = document.getElementById("share-icon");
        if (e.target === box)
        {
            shareflex.style.display="flex";
            box.classList.add("popup-box");
            cover.style.opacity = 1;
            cover.style.pointerEvents = "unset";
            body.style.overflow = "hidden"; 
            shareicon.style.display="none"
        }
    }
   
    const closemodal = (e) => {
        let cover = document.getElementById("cover1");
        let body = document.querySelector("body");
        let box = document.getElementById("share-widget");
        let shareflex = document.getElementById("share-flex");
        let shareicon = document.getElementById("share-icon");
        if (e.target === cover) {
            body.style.overflow = "unset"; 
            cover.style.opacity = 0;
            cover.style.pointerEvents = "none";   
            box.classList.remove("popup-box");
            shareflex.style.display="none";
            shareicon.style.display="unset";
        }
    }

    const closemodalx = (e) => {
        let cover = document.getElementById("cover1");
        let body = document.querySelector("body");
        let box = document.getElementById("share-widget");
        let shareflex = document.getElementById("share-flex");
        let shareicon = document.getElementById("share-icon");
        let fb = document.getElementById("fb");
        let twit = document.getElementById("twit");
        let linkd = document.getElementById("linkd");
        if (e.target === fb || e.target === twit || e.target === linkd) {
            body.style.overflow = "unset"; 
            cover.style.opacity = 0;
            cover.style.pointerEvents = "none";   
            box.classList.remove("popup-box");
            shareflex.style.display="none";
            shareicon.style.display="unset";
        }
    }

    return(
        <>
        <div className="cover" id="cover1" onClick={closemodal}>
        </div>
        <div className="share-widget" id="share-widget" onClick={share} >
            <svg 
            id="share-icon"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20"
            className="share-icon">
                <path d="M15 13.442c-.633 0-1.204.246-1.637.642l-5.938-3.463c.046-.188.075-.384.075-.584s-.029-.395-.075-.583L13.3 6.025A2.48 2.48 0 0 0 15 6.7c1.379 0 2.5-1.121 2.5-2.5S16.379 1.7 15 1.7s-2.5 1.121-2.5 2.5c0 .2.029.396.075.583L6.7 8.212A2.485 2.485 0 0 0 5 7.537c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5a2.48 2.48 0 0 0 1.7-.675l5.938 3.463a2.339 2.339 0 0 0-.067.546A2.428 2.428 0 1 0 15 13.442z"/>
            </svg>
            <div className="share-flex" id="share-flex">
                <a className="media-link"
                href={facebookLink(url)} 
                target="blank" 
                rel="noreferrer noopener"
                id="fb"
                onClick={closemodalx}>
                    <div className="media-text">
                        Facebook
                    </div>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20"
                    className="media-icon">
                        <path stroke="none" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                    </svg>    
                </a>

                <a className="media-link"
                href={twitterLink(url)} 
                target="blank" 
                rel="noreferrer noopener"
                id="twit"
                onClick={closemodalx}>
                    <div className="media-text">
                        Twitter
                    </div>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 432 432"
                    className="media-icon">
                        <path stroke="none" d="M335 159q22-18 28-30q-13 6-31 9q18-13 24-32q-20 11-37 14q-12-14-31-16.5t-35.5 5t-26.5 25t-5 38.5q-67-4-118-59q-11 20-4.5 43.5T120 189q-11-1-24-7q1 43 44 57q-12 3-24 1q12 36 53 40q-15 13-39 19.5T85 303q45 28 92 26q70-3 113.5-49.5T335 159zM384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3h341z"/>
                    </svg> 
                </a>

                <a className="media-link"
                href={linkedinLink(url)} 
                target="blank" 
                rel="noreferrer noopener"
                id="linkd"
                onClick={closemodalx}>
                    <div className="media-text">
                        LinkedIn
                    </div>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 32"
                    className="media-icon">
                        <path stroke="none" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756zm2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"/>
                    </svg> 
                </a>
                <div className="media-link" onClick={urlcopy}>
                    <div className="media-text">
                        {copy}
                    </div>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    className="media-icon">
                        <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        </>
    );
};

export default Widget;