import React, { Component } from 'react';
import './App.css';

import CustomButton from './components/CustomButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {{
        // custom button dengan text button default (sesuai initial state dari custom button)
        }}
        <CustomButton />

        {{
        // custom button dengan text button yang diset menggunakan property textBtn
        }}
        <CustomButton textBtn="ini text btn" />
        
      </div>
    );
  }
}

export default App;
