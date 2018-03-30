import React from 'react';
import {ThemeContext} from '../constants/theme';
import { Button } from "../components/Button/Button";

import style from '../css/_layout.scss';

export class AboutContext extends React.PureComponent {
    state = {
        theme: 'default',
    };
    toggleTheme = (event) => {
        const {value} = event.currentTarget;
        this.setState({theme: value});
    }
    render() {
        const {theme} = this.state;
        return (
            <ThemeContext.Provider value={theme}>
                <div className={style.content}>
                    <div className={style.container}>
                        <h2>Context</h2>
                        <div>
                            <label>
                                <input type="radio" value="default" name="theme" checked={theme === 'default'} onChange={this.toggleTheme} />
                                Default
                        </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="gusa" name="theme" checked={theme === 'gusa'} onChange={this.toggleTheme} />
                                GlassesUSA
                    </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="ottica" name="theme" checked={theme === 'ottica'} onChange={this.toggleTheme} />
                                Ottica
                    </label>
                        </div>
                        <br/>
                        <Button>Choose Lenses</Button>
                    </div>
                </div>
            </ThemeContext.Provider>
        )
    }
}