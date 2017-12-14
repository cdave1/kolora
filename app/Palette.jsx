'use strict';

import React from 'react';
import reactCSS from 'reactcss';

class Palette extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(index) {
        //var displayColorPicker = this.state.displayColorPicker;
        //displayColorPicker[index] = !displayColorPicker[index];
        //this.setState({ displayColorPicker: displayColorPicker })
    }

    handleClose(index) {
        //var displayColorPicker = this.state.displayColorPicker;
        //displayColorPicker[index] = false;
        //this.setState({ displayColorPicker: displayColorPicker });
    }

    handleChange(index, color) {
        //var colors = this.state.colors;
        //colors[index] = color.hex;
        //this.setState({colors: colors});

        //var displayColorPicker = this.state.displayColorPicker;
        //displayColorPicker[index] = false;
        //this.setState({ displayColorPicker: displayColorPicker });
    };

    renderSwatch(color, index) {
        var width = this.props.width || '100px';

        const styles = reactCSS({
            'default': {
                colorBeta: {
                    width: '60px',
                    height: '60px',
                    borderRadius: '1px',
                    background: `${color}`,
                },
                swatchBeta: {
                    padding: '1px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            }
        });

        return (
            <div style={{ display: 'inline-block' }} key={index}>
                <div style={ styles.swatchBeta } onClick={ this.handleClick.bind(this, index) }>
                <div style={ styles.colorBeta } />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderSwatch(this.props.formats.default.primary)}
                {this.renderSwatch(this.props.formats.default.secondary)}
                {this.renderSwatch(this.props.formats.default.tertiary)}
                {this.renderSwatch(this.props.formats.default.border)}
                {this.renderSwatch(this.props.formats.default.background)}
            </div>
        );
    }
}

export default Palette;