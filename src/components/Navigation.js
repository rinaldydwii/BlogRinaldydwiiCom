import React from 'react';

import brand from '../assets/brand.svg';

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            isTop: true,
        };
        this.onScroll = this.onScroll.bind(this);
    }
    onScroll() {
        const isTop = window.scrollY < 52;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        };
    }
    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }
    render() {
        return (
            <nav id="nav" className={ this.state.isTop ? '' : 'nav__sticky'}>
                <div className="container">
                    <div className="nav__brand">
                        <a href="/">
                            <img src={ brand } alt="Blog Rinaldydwii.com Logo"></img>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;