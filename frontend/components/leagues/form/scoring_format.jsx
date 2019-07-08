import React from 'react';

class ScoringFormatRadio extends React.Component {
  constructor(props) {
    super(props)

    this.state = { format: "" }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    this.setState({ format: e.currentTarget.value })
  }


  render() {

    return (
      <div className="custom-radio-group">
        <div className="custom-radio-item">
          <div className="custom-radio">
            <div className="custom-radio-fill"></div>
          </div>
          <div className="name">
            <div>Standard Scoring
              <span className="subtext">STD</span>
            </div>
            <div className="description">Receptions are not worth extra points</div>
          </div>
        </div>
        <div className="custom-radio-item">
          <div className="custom-radio">
            <div className="custom-radio-fill"></div>
          </div>
          <div className="name">
            <div>Point Per Reception
              <span className="subtext">PPR</span>
            </div>
            <div className="description">Each reception is worth an extra points</div>
          </div>
        </div>
        <div className="custom-radio-item">
          <div className="custom-radio">
            <div className="custom-radio-fill"></div>
          </div>
          <div className="name">
            <div>0.5 Point Per Reception
              <span className="subtext">HALF PPR</span>
            </div>
            <div className="description">Each reception is worth an extra 0.5 points</div>
          </div>
        </div>
      </div>
    )
  }

}



export default ScoringFormatRadio