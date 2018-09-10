import React from 'react';
import SocialMediaList from './lists/SocialMediaList';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <hr className="footer__line"/>
                <div className="footer__content">
                    <div className="content__social-media">
                        <SocialMediaList></SocialMediaList>
                    </div>
                    <div className="content__copyright">
                        Copyright &copy; 2018 Rinaldy Dwi Istanto
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;