import React from 'react';
import ReactJson from 'react-json-view';
import {normalize, schema} from 'normalizr';
import data from '../data.json';
import style from '../css/_layout.scss';

const option = new schema.Entity('options', {}, {processStrategy: option => option.values[0]});
const group = new schema.Entity('groups', {options: [option]}, {idAttribute: option => option.code});
const pack = new schema.Entity('packages', {groups: [group]});
const optonGroup = new schema.Entity('optionGroups', {packages: [pack]});
const wizardScheme = {use_for: {values: [optonGroup]}};
const normalizedData = normalize(data, wizardScheme);


export const Normalizr = () => (
    <div className={style.container}>
        <h1>Normalizr</h1>
        <div style={{display: 'flex'}}>
            <div style={{width: '50%'}}>
                <ReactJson src={data} name={false} collapsed />
            </div>
            <div style={{width: '50%'}}>
                <ReactJson src={normalizedData} name={false} collapsed />
            </div>
        </div>
    </div>
)