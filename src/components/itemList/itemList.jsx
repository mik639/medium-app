import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Item from '../item';

class ItemList extends PureComponent {
    render() {
        const {items} = this.props;


        return (
            <div className="items-list">
                {
                    items.map(item => (
                        <Item key={item.id} id={item.id}/>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(ItemList);
