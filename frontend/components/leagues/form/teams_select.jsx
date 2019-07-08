import React from 'react';

class TeamSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected_value: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleTeamsChange(e.currentTarget.value)
  }

  render () {
  return (
    <div className="teams-select">
      <button onClick={this.handleClick} name="6" value="6" className="teams-select-item">
        <div className="name">6</div>
        <div className="description">Teams</div>
      </button>
      <button onClick={this.handleClick} value="8" className="teams-select-item">
        <div className="name">8</div>
        <div className="description">Teams</div>
      </button>
      <button onClick={this.handleClick} value="10" className="teams-select-item">
        <div className="name">10</div>
        <div className="description">Teams</div>
      </button>
      <button onClick={this.handleClick} value="12" className="teams-select-item">
        <div className="name">12</div>
        <div className="description">Teams</div>
      </button>
      <button onClick={this.handleClick} value="14" className="teams-select-item">
        <div className="name">14</div>
        <div className="description">Teams</div>
      </button>
      <button onClick={this.handleClick} value="16" className="teams-select-item">
        <div className="name">16</div>
        <div className="description">Teams</div>
      </button>
      <button onClick={this.handleClick} value="18" className="teams-select-item">
        <div className="name">18</div>
        <div className="description">Teams</div>
      </button>
      <button onClick={this.handleClick} value="20" className="teams-select-item">
        <div className="name">20</div>
        <div className="description">Teams</div>
      </button>
    </div>       
    )
  }
}

export default TeamSelect;