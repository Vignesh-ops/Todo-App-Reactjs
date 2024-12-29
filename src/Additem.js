import React from "react";
import { FaPlus } from "react-icons/fa";

const Additem = ({Additems,setitems,handletodosubmit}) => {
    return (
        <form className="additem" onSubmit={handletodosubmit}>
            <input type="text"  value={Additems} onChange={(e)=>setitems(e.target.value)}  placeholder="Add items here" 
            
            />
            <button aria-label="add item" type="submit">
                <FaPlus />

            </button>

        </form>
    )
}

export default Additem