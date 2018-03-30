import React from 'react';
import style from '../css/_layout.scss';

export class Refs extends React.PureComponent {
    player = React.createRef();

    toggleVideo = (e) => {
        const {current: player} = this.player;

        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    }

    render() {
        console.log('start render', this.player);

        return (
            <div className={style.content}>
                <div className={style.container}>
                    <h2>Refs</h2>
                    <div>
                        <h3>Parent component</h3>
                        <div>
                            <video src="/content/video.mp4" width="500" ref={this.player} />
                        </div>
                        <button onClick={this.toggleVideo}>toggle video</button>
                    </div>
                </div>
            </div>
        )
    }
}