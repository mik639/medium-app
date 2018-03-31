import React from 'react';
import style from '../css/_layout.scss';
import {Color} from '../components/Color/Color';

export class Lifecycles extends React.PureComponent {
    state = {
        color: 'red'
    };

    setColor = (event) => {
        this.setState({color: event.currentTarget.value});
    }

    render() {
        const {color} = this.state;
        return (
            <div className={style.content}>
                <div className={style.container}>
                    <h3>Lifecycles</h3>
                    <div>
                        <label>
                            <input type="radio" name="color" value="red" onChange={this.setColor} checked={color === 'red'} />
                            red
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="color" value="green" onChange={this.setColor} checked={color === 'green'} />
                            green
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="color" value="blue" onChange={this.setColor} checked={color === 'blue'} />
                            blue
                        </label>
                    </div>
                    <br />
                    <Color color={color} />
                </div>
            </div>
        )
    }
}