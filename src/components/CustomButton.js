import React, { Component } from 'react';

// deklarasi state default-nya..
const INITIAL_STATE = {
  textButton: 'button',
}

class CustomButton extends Component {
  
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
  }

  componentDidMount(){
    // jika props textBtn ada, maka state diganti dengan props
    if( this.props.textBtn ){
      // set state dengan props.textBtn
      this.setState({
        textButton: this.props.textBtn
      })
    }
    
  }

  render() {
    return(
      <button>
        { this.state.textButton }
      </button>
    );
  }

}

export default CustomButton;
