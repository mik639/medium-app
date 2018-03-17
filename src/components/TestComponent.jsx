// @flow
import React, {PureComponent, type Node} from "react";
import {connect} from "react-redux";

type PropsType = {
    items: Array<{}>
};

class TestComponent extends PureComponent<PropsType> {
    render(): Node {
        const {items} = this.props;
        console.log('test render');
        
        return (
            <div>
                {
                    items.map((item: {}): Node => <div key={item.id}>item</div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state: {}): PropsType => ({items: state.wishList.items});

export default connect(mapStateToProps)(TestComponent);
