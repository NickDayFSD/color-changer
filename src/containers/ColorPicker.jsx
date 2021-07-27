import React, { Component } from 'react';
import ColorControls from '../components/color-picker/ColorDisplay';
import ColorDisplay from '../components/color-picker/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    selectedColor: 'white'
  };

  handleColorChange = (color) => {
    this.setState({ selectedColor: color });
  }

  render() {
    const colors = ['burgundy', 'maroon', 'brown', 'slate gray', 'yellow'];
    const { selectedColor } = this.state;

    return (
      <>
        <ColorControls colors={colors} onColorChange={this.handleColorChange} />
        <ColorDisplay backgroundColor={selectedColor} />
      </>
    );
  }
}
