import React from 'react';
import {Link} from 'react-router-dom';

import style from './menu.scss';

export const Menu = () => (
    <nav className={style.wrapper}>
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/category/12">Category 12</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
    </nav>
)