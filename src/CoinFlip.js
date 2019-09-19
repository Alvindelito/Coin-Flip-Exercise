import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHead: true,
      totalFlips: 0,
      heads: 0,
      tails: 0
    }
    this.flipCoin = this.flipCoin.bind(this);
  }
  flipCoin(e) {
    let randomBoolean = Math.random() >= 0.5;
    let newHeads = this.state.heads;
    let newTails = this.state.tails;
    let newTotalFlips = this.state.totalFlips;
    if (randomBoolean) {
      newTotalFlips++;
      newHeads++;
      this.setState({
        isHead: randomBoolean,
        totalFlips: newTotalFlips,
        heads: newHeads
      })
    } else {
      newTotalFlips++
      newTails++;
      this.setState({
        isHead: randomBoolean,
        totalFlips: newTotalFlips,
        tails: newTails
      })
    }
  }
  render() {
    return (
      <div className="CoinFlip">
        <h1>Flip The Coin!</h1>
        <Coin isHead={this.state.isHead} />
        <button onClick={this.flipCoin}>FLIP THE COIN!!</button>
        <p>Out of {this.state.totalFlips} flips, there have been {this.state.heads} heads and {this.state.tails} tails</p>
      </div>
    )
  }
}

export default CoinFlip;