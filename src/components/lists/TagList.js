import React from 'react';

const TagItem = (props) => {
    return (
        <a href={'/tag/' + props.data.id } className="tag__item">{ props.data.tag_name }</a>
    )
}

const TagList = (props) => {
    let list = props.data.map((tag, index) => {
        return (
            <TagItem data={ tag } key={ index }></TagItem>
        )
    })
    return (
        <div className="article__list">
            { list }
        </div>
    )
}

export default TagList;