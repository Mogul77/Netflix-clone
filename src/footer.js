import React from "react";
function Footer(){
    return(
    <div className="text-center text-secondary mt-5 py-4" style={{background: "#111"}}>
        <div className="container">
            <p className="mb-4">Questions? call 000-800-919</p>
            <div className="row row-cols-2 row-colsomd-4 g-3">
                <div className="col">
                    <p className="text-secondary small">FAQ</p>
                    <p className="text-secondary small">Investor Relations</p>
                    <p className="text-secondary small">Privacy</p>
                </div>
                <div className="col">
                    <p className="text-secondary small">Help Center</p>
                    <p className="text-secondary small">Jobs</p>
                    <p className="text-secondary small">Cookie Preferences</p>
                </div>
                <div className="col">
                    <p className="text-secondary small">Account</p>
                    <p className="text-secondary small">Ways to Watch</p>
                    <p className="text-secondary small">Corporate Information</p>
                </div>
                <div className="col">
                    <p className="text-secondary small">Media Center</p>
                    <p className="text-secondary small">Terms of Use</p>
                    <p className="text-secondary small">Contact Us</p>
                </div>
            </div>
            <p className="text-secondary small mt-4">NETFLIX clone.created by Me</p>
        </div>
    </div>
    );

}
export default Footer;