import React from 'react';


class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedIndex: null }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlayers(this.props.league.id)
  }


  handleClick(){
    $(document).ready(function() {
      $('.actions .btn').click(function() {
        $('.ui.modal').modal('show');
      })
    })
  }

  render() {
    return(
      <div>
        <div class="ui modal">
          <i class="close icon"></i>
          <div class="header">
            Profile Picture
          </div>
          <div class="image content">
            <div class="ui medium image">
              <img src="/images/avatar/large/chris.jpg" />
            </div>
            <div class="description">
              <div class="ui header">We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div class="actions">
            <div class="ui black deny button">
              Nope
            </div>
            <div class="ui positive right labeled icon button">
              Yep, that's me
              <i class="checkmark icon"></i>
            </div>
          </div>
        </div>
        <div className="team-main-container">
          <div className="actions">
            <div onClick={this.handleClick} className="btn">
              <img className="button-icon" src="https://sleepercdn.com/images/v2/button/add_player_button.png"></img>
              Add Players
            </div>
            <div className="btn">
              <img className="button-icon" src="https://sleepercdn.com/images/v2/button/drop_player_button.png"></img>
              Drop Players
            </div>
          </div>
        </div>
      </div>
    )
  }



}

export default Team;