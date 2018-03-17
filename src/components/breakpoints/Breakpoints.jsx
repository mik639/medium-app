import React from 'react';
import Responsive from 'react-responsive';
import breakpoints from '../../constants/mediaqueries';

export const Mobile = (props) => <Responsive {...props} query={breakpoints['--sm-viewport']}/>;
export const Desktop = (props) => <Responsive {...props} query={breakpoints['--md-viewport']}/>;