import React from 'react';

class TeamSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: this.props.currentIndex
    }
    this.handleClick = this.handleClick.bind(this);
  }

  

  handleClick(e) {
    e.preventDefault();
    this.props.handleTeamsChange(e.currentTarget.value);
    this.setState({ selectedValue: e.currentTarget.value });
  }

  render () {
  return (
    <div className="teams-select">
      <button onClick={this.handleClick} name="6" value="6" className={(this.state.selectedValue == 6) ? "teams-select-item checked" : "teams-select-item" }>
        <div className="teams-select-name-box">
          <div className="name">6</div>
          <div className="description">Teams</div>
        </div>
      </button>
      <button onClick={this.handleClick} value="8" className={(this.state.selectedValue == 8) ? "teams-select-item checked" : "teams-select-item"}>
        <div className="teams-select-name-box">
          <div className="name">8</div>
          <div className="description">Teams</div>
        </div>
      </button>
      <button onClick={this.handleClick} value="10" className={(this.state.selectedValue == 10) ? "teams-select-item checked" : "teams-select-item"}>
        <div className="teams-select-name-box">
          <div className="name">10</div>
          <div className="description">Teams</div>
        </div>
      </button>
      <button onClick={this.handleClick} value="12" className={(this.state.selectedValue == 12) ? "teams-select-item checked" : "teams-select-item"}>
        <div className="teams-select-name-box">
          <div className="name">12</div>
          <div className="description">Teams</div>
        </div>
      </button>
      <button onClick={this.handleClick} value="14" className={(this.state.selectedValue == 14) ? "teams-select-item checked" : "teams-select-item"}>
        <div className="teams-select-name-box">
          <div className="name">14</div>
          <div className="description">Teams</div>
        </div>
      </button>
      <button onClick={this.handleClick} value="16" className={(this.state.selectedValue == 16) ? "teams-select-item checked" : "teams-select-item"}>
        <div className="teams-select-name-box">
          <div className="name">16</div>
          <div className="description">Teams</div>
        </div>
      </button>
      <button onClick={this.handleClick} value="18" className={(this.state.selectedValue == 18) ? "teams-select-item checked" : "teams-select-item"}>
        <div className="teams-select-name-box">
          <div className="name">18</div>
          <div className="description">Teams</div>
        </div>
      </button>
      <button onClick={this.handleClick} value="20" className={(this.state.selectedValue == 20) ? "teams-select-item checked" : "teams-select-item"}>
        <div className="teams-select-name-box">
          <div className="name">20</div>
          <div className="description">Teams</div>
        </div>
      </button>
    </div>       
    )
  }
}

export default TeamSelect;