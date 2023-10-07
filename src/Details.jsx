import { useState } from "react"

export default function Details({list, handleClickDetail}){
   
    return (
        <div>
        {list.map((text, index) => <button key ={index} className="btn-settings" onClick={handleClickDetail}> {text} </button>)}
        </div>
    )
}