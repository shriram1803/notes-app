import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer>
                <p>SRM {year}</p>
            </footer>
        </div>        
    );
}

export default Footer;