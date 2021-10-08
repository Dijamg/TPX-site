import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

//Links only change the page to the home page if user is in merch page. They are there mainly for cosmetic reasons atm.

const Footer = () => (
    <footer className="footer" id="footer">
        <div className="footer-content-container">
            <div className="footer-logos">
                <a target="_blank" href="https://github.com/Dijamg/TPX-site">
                    <img alt="github-logo" className="footer-logo-github" src="https://firebasestorage.googleapis.com/v0/b/tpx-json.appspot.com/o/MerchImages%2FGitHub-Mark-120px-plus_pink.png?alt=media&token=a7f89b38-0975-4f4e-a032-116527f07a93"/>
                </a>
                <img  alt="tpx-logo" className="footer-logo-tpx" src="https://firebasestorage.googleapis.com/v0/b/tpx-json.appspot.com/o/MerchImages%2FTransparent_Version_for_merch__pannels.png?alt=media&token=784b3152-78ee-4e30-820f-7322cefb5224"></img>
                <Link to="/merch">
                    <FaShoppingCart className="footer-logo-merch"/>
                </Link>
            </div>
            <div className="footer-links-container">
                <Link to="/">
                    Home
                </Link>
                <span>&#183;</span>
                <Link to="/">
                    Members
                </Link>
                <span>&#183;</span>
                <Link to="/">
                    Tournaments
                </Link>
                <span>&#183;</span>
                <Link to="/">
                    About
                </Link>
            </div>
        </div>
    </footer>
)

export default Footer