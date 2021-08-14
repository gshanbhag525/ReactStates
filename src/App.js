import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      meanOfLife : 43
    }
    this.props = props

  // to use props here u need to pass  it in super and constructor

  }
  
  handleClick = () => {
    this.setState( (prevState, prevProps) => {
      return { meanOfLife: prevState.meanOfLife + prevProps.increment }
    }
    ,
      () => console.log(this.state.meanOfLife)  
    )
  }

  render() {  
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meanOfLife}
          </p>
          <button onClick={this.handleClick}>
            update STATE
          </button>
        </header>
      </div>
    )
  }
}

export default App;
