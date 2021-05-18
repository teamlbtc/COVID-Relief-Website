const Top = () => {

    (function() {      
        function trackScroll() {
          let scrolled = window.pageYOffset;
          let coords = document.documentElement.clientHeight;
      
          if (scrolled > coords) {
            if (goTopBtn) goTopBtn.classList.add('top-show');
          }
          if (scrolled < coords) {
            if (goTopBtn) goTopBtn.classList.remove('top-show');
          }
        }
      
        function backToTop() {
          if (window.pageYOffset > 0) {
            window.scrollBy(0, -20);
            setTimeout(backToTop, 0);
          }
        }
      
        let goTopBtn = document.querySelector('.top');
      
        window.addEventListener('scroll', trackScroll);
        if (goTopBtn) goTopBtn.addEventListener('click', backToTop);
      })();

    return(
        <div className="top">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="top-icon">
                <path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15a1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"/>
            </svg>
        </div>

    );
};

export default Top;