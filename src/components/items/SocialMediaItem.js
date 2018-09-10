import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaItem = (props) => {
    return (
        <a className="social-media__item" href={ props.data.url } target="_blank">
            <FontAwesomeIcon icon={ props.data.icon } size="lg"></FontAwesomeIcon>
        </a>
    )
}

export default SocialMediaItem;