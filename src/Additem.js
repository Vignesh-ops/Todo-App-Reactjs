import React from "react";
import { FaPlus } from "react-icons/fa";

const Additem = ({Additems,setitems,handletodosubmit,addipref}) => {
    return (
        <form className="additem" onSubmit={handletodosubmit}>
            <input type="text" ref={addipref} value={Additems} onChange={(e)=>setitems(e.target.value)}  placeholder="Add items here" 
            
            />
            <button aria-label="add item" type="submit" onClick={()=>addipref.current.focus()}>
                <FaPlus />

            </button>

        </form>
    )
}

export default Additem