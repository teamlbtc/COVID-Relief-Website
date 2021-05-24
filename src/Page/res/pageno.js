import { useEffect, useState } from "react";

const PageNo = ({i, page, setPage, setLoader}) => {
    const [back, setBack] = useState("");
    const [color, setColor] = useState("");
    const [point, setPoint] = useState("");

    useEffect(()=>{
        if (page===i.toString())
        {
            setBack("var(--accent)");
            setColor("var(--white)");
            setPoint("none");
        }
    },[i, page]);

    const setCurPage = (e) => {
        setLoader(true);
        setPage(e.target.getAttribute("pageid"));

        function backToTop() {
            if (window.pageYOffset > 0) {
              window.scrollBy(0, -10);
              setTimeout(backToTop, 0);
            }
          }
        return backToTop();
    }

    return(
        <div 
        style={{backgroundColor: `${back}`, color: `${color}`, pointerEvents: `${point}`}}
        className="page-no"
        pageid={i}
        onClick={setCurPage}>
            {i}
        </div>
    );
}
export default PageNo;