import { useState } from "react";
import styled from "styled-components";

type Props={
    msg:string
    variant:string
};

const Alert=({msg,variant}:Props)=>{
    const [timeOut, setTimeOut] = useState<number|null>(null)

      setTimeout(() => {
        setTimeOut(1)
      }, 3000)
    return(
        timeOut !== 1 && <div className={`alert alert-${variant}`}>{msg}</div>
    );
};

// const AlertCard=styled.div`
//     height: 50px;
//     width: 200px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

export default Alert;