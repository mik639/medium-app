// @flow
import React, {PureComponent, type Node} from 'react';
import {connect} from 'react-redux';
import {saveItem, editItem} from '../../actions/item';

type PropsType = {
    dispatch: () => void
};

type StateType = {
    id: string,
    name: string,
    options: {[string]: boolean}
};

class EditForm extends PureComponent<PropsType, StateType> {
    state = {
        id: '',
        name: '',
        options: {
            opt1: false,
            opt2: false,
            opt3: false
        }
    }

    onChange = (e: Event) => {
        const field = e.currentTarget;
        this.setState((): StateType => ({[field.name]: field.value}));
    }

    onOptionChange = (e: Event) => {
        const option = e.currentTarget;
        
        this.setState((state: StateType): StateType => ({options: {...state.options, [option.name]: option.checked}}))
    }

    save = (e: Event) => {
        e.preventDefault();
        this.props.dispatch(saveItem(this.state));
    }

    update = () => {
        this.props.dispatch(editItem(this.state));
    }

    render(): Node {
        const {id, name, options} = this.state;

        return (
            <div className="form">
                <div className="row">
                    <label className="label">
                        ID:
                        <input className="input" type="text" name="id" value={id} onChange={this.onChange} />
                    </label>
                </div>
                <div className="row">
                    <label className="label">
                        Name:
                        <input className="input" type="text" name="name" value={name} onChange={this.onChange} />
                    </label>
                </div>
                <div className="row">
                    <span className="label">
                        Options:
                    </span>
                    <div className="option-container">
                        <label className="option"><input type="checkbox" name="opt1" checked={options['opt1']} onChange={this.onOptionChange}/> Option 1</label>
                    </div>
                    <div className="option-container">
                        <label className="option"><input type="checkbox" name="opt2" checked={options['opt2']} onChange={this.onOptionChange}/> Option 2</label>
                    </div>
                    <div className="option-container">
                        <label className="option"><input type="checkbox" name="opt3" checked={options['opt3']} onChange={this.onOptionChange}/> Option 3</label>
                    </div>
                </div>
                <button onClick={this.update}>update</button>
            </div>
        )
    }
}

export default connect()(EditForm);