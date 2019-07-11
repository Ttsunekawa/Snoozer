import React from 'react';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {
  constructor(props) {
    super(props)
  };

  handleClick(){
    this.props.handler(this.props.index)
  };

  render() {
    return (
        <Link className="show-nav-link" to={this.props.url}>
          <div className={this.props.isChecked ? "nav-item checked" : "nav-item"} onClick={this.handleClick.bind(this)} >
            <div className="nav-name">{this.props.header}</div>
            <div className="nav-description">{this.props.description}</div>
          </div>
        </Link>
      
    );
  };
}

export default NavItem;