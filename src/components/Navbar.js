import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary p-0" style={{ fontSize: "18px" }}>
        <div className="navbar-nav px-2 font-weight-bold">
          <p className='text-white'>Account information is: {this.props.account} </p>
        </div>
        <img width="80px" height="60px" src={box} />
      </nav>

    );
  }
}

export default Navbar;