'use strict';

import React from 'react';
import superagent from 'superagent';

import Header from './Header.jsx';
import Palette from './Palette.jsx';

import { Calendar } from 'antd';
//import 'antd/dist/antd.css';
import './main.less';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palettes: []
        };
    }

    componentWillMount() {
        superagent.get('/palettes')
            .accept('json')
            .end(function(err, res) {
                if (err) {
                    console.log(err);
                } else {
                    this.setState({palettes: res.body});
                }
            }.bind(this));
    }

    render() {
        if (this.state.palettes) {
            return (
                <div>
                    <h1>Kolora</h1>

                    {this.state.palettes.map((palette, index) => {
                       return <div><h4>{palette.name}</h4><Palette formats={palette.formats} /></div> 
                    })}
                </div>
            );
        } else {
            return (
                <p>No palettes to show</p>
            );
        }
    }
}

export default Home;
