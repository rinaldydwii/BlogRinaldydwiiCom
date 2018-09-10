import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header__title">
                    Selamat Datang di<br/>
                    <i>Blog Rinaldy</i>
                </div>
                <hr className="header__line"/>
                <div className="header__quote">
                    "Tempat mencurahkan kebahagiaan, kesedihan dan kegalauan."
                </div>
            </div>
        </header>
    )
}

export default Header;