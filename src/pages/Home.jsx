import React from 'react';
import style from '../css/_layout.scss';
import {ImagesGrid} from '../components/ImagesGrid/ImagesGrid';
import {ImagesSlider} from '../components/imagesSlider/ImagesSlider';
import {Desktop, Mobile} from '../components/breakpoints/Breakpoints';

const images = Array.from(new Array(12), (_, i) => `./content/${i + 1}.jpg`);

export const Home = () => {
    return (
        <div className={style.content}>
            <Desktop>
                <ImagesGrid images={images} />
            </Desktop>
            <Mobile>
                <ImagesSlider images={images} />
            </Mobile>
        </div>
    )
}