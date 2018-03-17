import React from 'react';
import Slider from 'nuka-carousel';
import style from './style.scss';

export const ImagesSlider = ({images = []}) => (
    <Slider slidesToShow={1.3} cellSpacing={6} renderBottomCenterControls={null}>
        {
            images.map(image => (
                <div className={style.item}>
                    <img src={image} />
                </div>
            ))
        }
    </Slider>
)