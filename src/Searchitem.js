import React from "react";


const Searchitem = ({Search,setsearch}) => {
    return (
        <form className="searchform" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" 
            placeholder="Search name"
            value={Search}
            aria-label="search item"
            onChange={(e)=>setsearch(e.target.value)}
            />
        </form>
    )
}

export default Searchitem