import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialMediaItem = (props) => {
    return (
        <a className="social-media__item" href={ props.data.url } target="_blank">
            <FontAwesomeIcon icon={ props.data.icon } size="lg"></FontAwesomeIcon>
        </a>
    )
}

const SocialMediaList = () => {
    let listData = [
        {
            name: 'facebook',
            url: 'https://facebook.com/rinaldydwii',
            icon: faFacebookF
        },
        {
            name: 'instagram',
            url: 'https://instagram.com/rinaldydwii',
            icon: faInstagram
        },
        {
            name: 'linkedin',
            url: 'https://linkedin.com/in/rinaldydwii',
            icon: faLinkedin
        },
        {
            name: 'github',
            url: 'https://github.com/rinaldydwii',
            icon: faGithub
        },
    ];
    let list = listData.map((socialMedia, index) => {
        return (
            <SocialMediaItem data={ socialMedia } key={ index }></SocialMediaItem>
        )
    })
    return (
        <div className="social-media__list">
            { list }
        </div>
    )
}

export default SocialMediaList;