import Details from "./Details";
import { useState } from "react";
const Settings = ({value, handleClick}) => {
    


         
    return (
        <>
            <button className="btn" onClick= {handleClick}>
                {value}
            </button>
           
        </>

    )
}

export default Settings;