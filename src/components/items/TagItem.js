import React from 'react';

const TagItem = (props) => {
    return (
        <a href={'/tag/' + props.data.id } className="tag__item">{ props.data.tag_name }</a>
    )
}

export default TagItem;