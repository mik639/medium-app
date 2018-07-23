import React from 'react';
import {Link} from 'react-router-dom';

import style from './menu.scss';

export const Menu = () => (
    <nav className={style.wrapper}>
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/normalizr">Normalizr</Link>
        <Link to="/context">Context</Link>
        <Link to="/refs">Refs</Link>
        <Link to="/lifecycles">Lifecycles</Link>
        <Link to="/todo">ToDo</Link>
    </nav>
)