import React from 'react';
import CollectionItem from '../collection-items/collection_item.component';
import './preview-collection.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.map( ({ id, ...otherProps}) => (
                <CollectionItem key={id} {...otherProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;