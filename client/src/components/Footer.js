import React from "react";

// Footer doesn't need a state because it doesn't change or preform any logic.

/* There isn't a concise way to create a footer in Bootstrap so we use an in-line
   style sheet to create the style for this footer
*/
const styles = {
    footerWrapper: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "40px",
        backgroundColor: "#e9ecef"
    }
};

const Footer = () => (
    <div style={styles.footerWrapper}>
        <div className="row">
            <div className="col mt-2 ml-3">
                <small><a href="https://github.com/kyle2099/nevernote"><i className="fab fa-github"></i></a>  |  Created by Kyle Souther-Bruno</small>
            </div>
        </div>
    </div>
);

export default Footer;