import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <div className="container">
                <div className="breadcrumb__list">
                    <a href="/" className="breadcrumb__item">Home</a>
                    <a className="breadcrumb__item breadcrumb__active">Tulisan</a>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;