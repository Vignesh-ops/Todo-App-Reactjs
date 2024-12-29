import React from "react";
import { FaTrash } from "react-icons/fa";


const Content = ({handleCheck,Tododata,handledelete}) => {

    return (
        <div className="itemscontainer">
        {(Tododata.length)?
            <ul>
                {
                    Tododata.map((data) => (
                        <li className="items" key={data.id}>
                            <input type="checkbox" checked={data.checked} onChange={() => handleCheck(data.id)}></input>
                            <label>{data.name}</label>
                            <FaTrash 
                                role="button"
                                tabIndex="0"
                                onClick={() => handledelete(data.id)}
                            />
                        </li>
                    )     )
                }
            </ul>
        : <div>No data found</div>}
        </div>
    )
}

export default Content