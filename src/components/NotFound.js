import React from 'react';
import PropTypes from 'prop-types';

const NotFound = (props) => {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <div className="not-found__title">
                    <h1>Maaf</h1>
                    <h2>{props.name + ' yang anda cari tidak ditemukan!'}</h2>
                </div>
                <hr/>
                <div className="not-found__subtitle">
                    <small>Error 404</small>
                </div>
            </div>
        </div>
    )
}

NotFound.propTypes = {
    name: PropTypes.string.isRequired
}

export default NotFound;