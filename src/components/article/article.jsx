import React, {PureComponent} from 'react';
import Responsive from 'react-responsive';
import breakpoints from '../../constants/mediaqueries';

import styles from './article.scss';

class Article extends PureComponent {
    render() {
        return (
            <div>
                <div className={styles.body}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse consectetur ipsa aliquam odit provident culpa aut quam, inventore qui maiores nesciunt voluptatum blanditiis! Nobis, quaerat incidunt! Natus, repellat culpa!
                </div>
                <Responsive query={breakpoints['--sm-viewport']}>
                    <div>HEY WE DID IT!</div>
                </Responsive>
            </div>
        );
    }
}

export default Article;