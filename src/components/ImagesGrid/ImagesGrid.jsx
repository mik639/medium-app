import React from 'react';
import style from './style.scss';

export const ImagesGrid = ({images = []}) => (
    <div className={style.container}>
        {images.map(image => (
            <div className={style.item} key={image}>
                <img src={image} />
            </div>
        ))}
    </div>
)