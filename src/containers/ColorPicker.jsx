import React, { Component } from 'react';
import ColorDisplay from '../components/color-picker/ColorDisplay';
import { colorSelect } from '../utils/utils';

export default class ColorPicker extends Component {
  state = {
    theColor: 'white',
    colors: ['black', 'maroon', 'brown', 'gray', 'yellow']
  };

  componentDidMount() {
    const { colors } = this.state;
    setInterval(() => {
      this.setState({ theColor: colors[colorSelect(colors)] });
    },
    1000
    );
  }

  render() {
    const { theColor } = this.state;
  
    return (
      <>
        <ColorDisplay backgroundColor={theColor} />
      </>
    );
  }
}
