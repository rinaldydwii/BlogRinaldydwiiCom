import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = (props) => {
    let bc = '', bcActive = '';
    if (props.page == 'article') {
        bcActive = <a className="breadcrumb__item breadcrumb__active">Tulisan</a>;
    }
    else if (props.page == 'tag') {
        if (props.tag) {
            bc = <a href="/" className="breadcrumb__item">Tag</a>;
            bcActive = <a className="breadcrumb__item breadcrumb__active">{ props.tag }</a>
        } else {
            bcActive = <a href="/" className="breadcrumb__item breadcrumb__active">Tag</a>;
        }
            
    }

    return (
        <div className="breadcrumb">
            <div className="container">
                <div className="breadcrumb__list">
                    <a href="/" className="breadcrumb__item">Home</a>
                    { bc }
                    { bcActive }
                </div>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    page: PropTypes.string.isRequired,
    tag: PropTypes.string
}

export default Breadcrumb;