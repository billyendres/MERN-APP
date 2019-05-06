import React, { Component } from 'react'

 class Header extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper" style={{marginLeft: '15px'}}>
                <a href="/" className="left brand-logo">Email</a>
                <ul className="right">
                    <li><a href="/">Sign In With Google</a></li>
                </ul>
            </div>
      </nav>
    )
  }
}

export default Header;