import React from 'react';
import {connect} from 'react-redux';
import {replace, push} from 'react-router-redux';
import style from '../css/_layout.scss';

class Category extends React.PureComponent {
    state = {
        size: '',
        color: '',
    }
    
    attrsToString() {
        return Object.keys(this.state)
        .map(key => this.state[key] ? `${key}=${this.state[key]}`: null)
        .filter(i => i)
        .join('&');
    }
    
    updateUrl = () => {
        const {dispatch} = this.props;
        dispatch(replace({search: `?${this.attrsToString()}`}))
    }

    onChange = (e) => {
        const {currentTarget: input} = e;
        this.setState({[input.name]: input.value}, this.updateUrl);
    }

    goToHome = () => {
        const {dispatch} = this.props;
        dispatch(push('/'));
    }

    render() {
        return (
            <div className={style.content}>
                <div className={style.container}>
                    <h3>Size</h3>
                    <div>
                        <label>
                            <input name="size" type="radio" value="large" onChange={this.onChange}/>
                            Large
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="size" type="radio" value="medium" onChange={this.onChange}/>
                            Medium
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="size" type="radio" value="small" onChange={this.onChange}/>
                            Small
                        </label>
                    </div>
                    <h3>Color</h3>
                    <div>
                        <label>
                            <input name="color" type="radio" value="blue" onChange={this.onChange}/>
                            Blue
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="color" type="radio" value="red" onChange={this.onChange}/>
                            Red
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="color" type="radio" value="green" onChange={this.onChange}/>
                            Green
                        </label>
                    </div>
                </div>
                <button onClick={this.goToHome}>To home page</button>
            </div>
        )
    }
};

export const CategoryConnected = connect()(Category);