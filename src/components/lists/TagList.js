import React from 'react';
import TagItem from '../items/TagItem';

const TagList = (props) => {
    // console.log(props);
    
    let list = props.data.map((tag, index) => {
        // console.log(tag);
        
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