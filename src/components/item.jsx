import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {makeSelectItemName} from '../selectors/items';

class Item extends PureComponent {
    componentDidUpdate() {
        const {name, id} = this.props;
        console.log(`render ${name.name}`);
    }
    render() {
        const {name, id} = this.props;
        
        return (
            <div className="item">
            <strong>ID: {id}</strong>
                <div className="item__title">{name}</div>
            </div>
        )
    }
}

const makeMapStateToProps = () => {
    const selectItemName = makeSelectItemName();
    const mapStateToProps = (state, props) => ({
        name: selectItemName(state, props)
    });
    return mapStateToProps;
}

const mapStateToProps = () => (state, props) => ({
    name: state.items.find(item => item.id === props.id).name,
})


export default connect(mapStateToProps)(Item);