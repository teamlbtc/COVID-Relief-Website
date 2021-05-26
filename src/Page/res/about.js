import { axios } from './axios';
import {useState} from 'react';
import qs from 'qs';

const About = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");

    const share = () => {
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
        setSubmitMsg("")
    }

    const closemodalx = () => {
        let cover = document.getElementById("about-cover");
        let body = document.querySelector("body");
        setSubmitMsg("")
        cover.style.display = "none";
        body.style.overflow = "unset";
    }

    const trimname = (e) =>{
        setName((e.target.value)
        .replace(/(^\s*)|(\s*$)/gi, "")
        .replace(/[ ]{2,}/gi," ")
        .replace(/\n +/,"\n"));
      }

    const submit = (e) => {
        e.preventDefault();

        axios.post("/feedback",
            qs.stringify({
                name:name,
                text:text
            })
            )
            .then(res => {
                console.log(res.status);
                res.status==200?setSubmitMsg("Your Feedback was Sent"):setSubmitMsg("Error please try again later")
            })
            .catch(error => {
                console.log(error.response.data.error)
            })
    }

    return (
        <>
            <div className="info-container" onClick={share}>
                <div className="about">ABOUT</div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="info">
                    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
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
                    <p className="para">
                                Let's Be The Change (#TeamLBTC) is a non-profit organization which aims to build a cleaner,
                                healthier and more sustainable society by working in synergy with the citizens and the Government.
                    <br />
                    #TeamLBTC is now offering volunteering services towards the COVID-19 efforts in and around Bangalore.
                    </p>
                            <a className="lbtc-container"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://letsbethechange.in/">
                                <div
                                    className="lbtc-link"
                                >https://letsbethechange.in/
                        </div>
                                <svg className="lbtc-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g></svg>
                            </a>
                        </div>
                        <div className="instruction">
                            Disclaimer
                    <p className="para">
                                Information on this website is verified by group of citizen volunteers. Please use the information at your own discretion.
                    </p>
                        </div>
                        <div className="e-form-container">
                            <div className="e-from-title">Have a Suggestion or Issue?</div>
                            <p className="para">Talk to Us.</p>
                            <form className="e-form" onSubmit={submit} method="POST">
                                <input type="text" className="e-input-title" name="Name" placeholder="Name" required onChange={trimname} onChange={(e) => setName(e.target.value)}/>
                                <textarea type="text" className="e-input-desc" name="Query" placeholder="Add your query here..." required onChange={(e) => setText(e.target.value)}/>
                                <button type="submit" className="e-link-btn">SEND</button>
                                <p style={{height:"1rem"}} className={submitMsg.includes("Sent")?'success-submit':'fail-submit'}>{submitMsg}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;


