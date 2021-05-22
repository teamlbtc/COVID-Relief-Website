import { useEffect, useState } from "react";

const PageNo = ({i, page, setPage, setLoader}) => {
    const [back, setBack] = useState("");
    const [color, setColor] = useState("");

    useEffect(()=>{
        if (page===i.toString())
        {
            setBack("var(--accent)");
            setColor("var(--white)");
        }
    },[i]);

    const setCurPage = (e) => {
        setLoader(true);
        setPage(e.target.getAttribute("pageid"));
    }

    return(
        <div 
        style={{backgroundColor: `${back}`, color: `${color}`}}
        className="page-no"
        pageid={i}
        onClick={setCurPage}>
            {i}
        </div>
    );
}
export default PageNo;