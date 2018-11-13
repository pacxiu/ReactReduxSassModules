import React, { Component } from 'react';
import { connect } from 'react-redux';

class Marketplace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marketItems: 0,
    };
  }

  render() {
    const { marketItems } = this.state;

    return (
      <div>Marketplace {marketItems}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    web3: state.web3,
    contract: state.contract,
  };
}

export default connect(mapStateToProps)(Marketplace);
