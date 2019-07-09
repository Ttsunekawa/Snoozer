import React from 'react'
import ReactDOM from 'react-dom'

class RadioBtn extends React.Component {

  constructor(props) {
    super(props);
  }


  

  handleClick(e) {
    e.preventDefault();
    this.props.handler(this.props.index);
    this.props.handleLeagueType(e.target.value)
  }

  render() {
    return (
      <div className="custom-radio">
        <div className="custom-radio-item" onClick={this.handleClick.bind(this)}>
          <button className={this.props.isChecked ? "custom-radio checked" : "custom-radio"} value={this.props.value}>
            <div className="custom-radio-fill"></div>
          </button>
          <div className="meta">
            <div className="name">
              <div>{this.props.name}
                {/* <span className="subtext">{this.props.subtext}</span> */}
              </div>
            </div>
            <div className="description">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

class LeagueTypeRadio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.currentIndex,
      selectedValue: null,
      options: ["Standard", "PPR", "0.5 PPR"]
    };
  }

  toggleRadioBtn(index) {
    this.setState({
      selectedIndex: index,
      selectedValue: this.state.options[index],
      options: this.state.options
    });
  }

  render() {
    const title =
      ["Redraft",
        "Keeper",
        "Dynasty"]

    const description =
      ["All rosters from this season are reset. Owners must participate in a draft where all players are available.",
        "Each owner can designate players to keep on their roster for next season.The number of keepers is customizable via league settings.",
        "All rosters stay with owners. Owners will need to conduct a draft from the new rookies and free agent pool."]

    // const subtext = ["STD", "PPR", "1/2 PPR"]

    const { options } = this.state;

    const allOptions = options.map((option, i) => {
      return <RadioBtn
        key={i}
        isChecked={(this.state.selectedIndex == i)}
        name={title[i]}
        description={description[i]}
        // subtext={subtext[i]}
        value={title[i]}
        index={i}
        handler={this.toggleRadioBtn.bind(this)}
        handleLeagueType={this.props.handleLeagueType}
      />
    });

    return (
      <div>{allOptions}</div>
    );
  }
}


export default LeagueTypeRadio;