import React from 'react'
import ReactDOM from 'react-dom'

class RadioBtn extends React.Component {

  constructor(props) {
    super(props);
  }

  
  handleClick(e) {
    e.preventDefault();
    this.props.handler(this.props.index);
    this.props.handleScoringType(e.target.value)
  }

  render() {
    return (
      <div>
        <div className="custom-radio-item" >
          <button onClick={this.handleClick.bind(this)} className={this.props.isChecked ? "custom-radio checked" : "custom-radio"} value={this.props.value}>
            <div className="custom-radio-fill"></div>
          </button>
          <div className="meta">
            <div className="name">
              <div>{this.props.name}
                <span className="subtext">{this.props.subtext}</span>
              </div>
            </div>
            <div className="description">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

class ScoringFormatRadio extends React.Component {

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
    ["Standard Scoring", 
    "Points Per Reception", 
    "0.5 Points Per Reception"]

    const description = 
    ["Receptions are not worth extra points",
    "Each reception is worth an extra point",
    "Each reception is worth an extra 0.5 points"]

    const subtext = ["STD", "PPR", "1/2 PPR"]

    const { options } = this.state;

    const allOptions = options.map((option, i) => {
      return <RadioBtn 
      key={i} 
      isChecked={(this.state.selectedIndex == i)} 
      name={title[i]} 
      description={description[i]} 
      subtext={subtext[i]}
      value={subtext[i]} 
      index={i} 
      handler={this.toggleRadioBtn.bind(this)} 
      handleScoringType={this.props.handleScoringType}
      />
    });

    return (
      <div>{allOptions}</div>
    );
  }
}


export default ScoringFormatRadio;