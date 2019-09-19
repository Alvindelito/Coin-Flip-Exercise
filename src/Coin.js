import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    let coin;
    if (this.props.isHead === true) {
      coin = "https://tinyurl.com/react-coin-heads-jpg"
    } else {
      coin = "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
    }
    return (
      <div className="Coin">
        <img src={coin}></img>
      </div>
    )
  }
}

export default Coin;