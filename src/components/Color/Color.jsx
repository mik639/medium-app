import React from 'react';

export class Color extends React.PureComponent {
    static defaultProps = {
        color: 'red'
    }

    static getDerivedStateFromProps(nextProps) {
        return {color: nextProps.color}
    }

    state = {
        color: this.props.color,
    }

    setColor = (event) => {
        this.setState({color: event.currentTarget.value});
    }

    render() {
        const {color} = this.state;
        return (
            <div>
                <div style={{width: 200, height: 200, backgroundColor: color}} />
                <div>
                    <label>
                        <input type="radio" name="color[1]" value="red" onChange={this.setColor} checked={color === 'red'} />
                        red
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="color[1]" value="green" onChange={this.setColor} checked={color === 'green'} />
                        green
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="color[1]" value="blue" onChange={this.setColor} checked={color === 'blue'} />
                        blue
                    </label>
                </div>
            </div>
        )
    }
}