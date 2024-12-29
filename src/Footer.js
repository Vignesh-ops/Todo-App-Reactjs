import React from "react";


const Footer = ({itemslength}) => {
    const year = new Date();
    return (
        <footer>
            <div>{itemslength} Todo list are there!</div>
            Copy rights &copy; {year.getFullYear()}        
        </footer>
    )
}

export default Footer