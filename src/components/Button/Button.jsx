import React from 'react';
import classNames from 'classnames';
import {ThemeContext} from '../../constants/theme';

import s from './button.scss'; 

export const Button = (props) => {
    return (
        <ThemeContext.Consumer>
            {
                theme => <button
                    {...props} 
                    className={classNames(s.btn, s[theme], props.className)}
                />
            }
        </ThemeContext.Consumer>
    );
}