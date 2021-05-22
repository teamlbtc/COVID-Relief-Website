const Volunteer = () => {

    const closelink = () =>{
        let banner = document.getElementById("container");
        banner.style.height=0;
        let link = document.getElementById("link-container");
        link.style.display="none";
        let closelink = document.getElementById("close-link");
        closelink.style.display="none";
    }

    return(
        <div className="container" id="container">
        <a
        href="https://forms.gle/r7WbWq6d5HqGNjHL7" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="link-container"
        id="link-container">
          <div className="link-title">BECOME A VOLUNTEER!</div>
          <svg className="plasmalink-icon"
          xmlns="http://www.w3.org/2000/svg"  
          viewBox="0 0 24 24">
            <g fill="none">
              <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g></svg>
        </a>
        <div className="close-link" id="close-link" onClick={closelink}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="close-link-icon">
                <path 
                 d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"/>
            </svg>
        </div>
        </div>
    );
}

export default Volunteer;