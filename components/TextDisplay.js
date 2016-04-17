import React, { Component } from 'react'

class TextDisplay extends Component {

  handleClick(){
      //console.log(this)
      this.props.deleteLetter()
  }


  render() {
    return <div>
        <div>
        <br/><br/>I'm displaying text from my parent: {this.props.text}
            </div>
        <br/><br/>
        <button onClick={this.handleClick.bind(this)}>Delete 1 letter</button>
      </div>
  }

}

export default TextDisplay
