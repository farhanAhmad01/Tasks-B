import React, { useState } from "react";

const  Project4 = () => {
    const [input,setInput] = useState()
return (
    <div>
    <input type="text" value={input} onChange={e => setInput(e.target.v)}/>
    </div>
)
}

export default Project4