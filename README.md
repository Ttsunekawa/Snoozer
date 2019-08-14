# README

# Snoozer Fantasy Football App

This is a webapp made for hosting Fantasy Football Leagues with easy creation of customizable leagues and an invite system to easily send to your friends! 

<p align="center">
  <img width="" height="" src="https://user-images.githubusercontent.com/49226084/61166116-70e08200-a4dd-11e9-91e3-4052ed946190.png">
</p>

### [Snoozer](https://snoozer-app.herokuapp.com/#/) 

## About the Project

This project challenged all of my abilities for frontend and backend management. And, I learned many lessons along the way. 

Postgresql/Rails were used for the backend with React/Redux on the frontend.

## Features

Some of the biggest challenges of this project was learning to build custom tools. Getting all of my props to the right places and making sure that they came back up to the right place began as a challenging task. Throughout the project, I became more and more comfortable. Here are a couple features that were my favorite to work on:
***

#### Custom Select Item

The first forms that I built (Login and Sign Up forms) were giant blocks of code that were a pain to sift through when trying to style. Once I hit my Leagues Creation form, I wanted to make sure that I was DRYing up my code and creating specific components that served their own purpose. These components helped me to become a more efficient and DRYer coder.

<p align="center">
  <img width="" height="" src="https://user-images.githubusercontent.com/49226084/61166262-d03f9180-a4df-11e9-96b8-3aec84a59c98.png">
</p>

```javascript
     <button 
      onClick={this.handleClick} 
      name="6" 
      value="6" 
      className={(this.state.selectedValue == 6) ? 
      "teams-select-item checked" : 
      "teams-select-item" 
      }>
        <div className="teams-select-name-box">
          <div className="name">6</div>
          <div className="description">Teams</div>
        </div>
     </button>
```   

This was code I wrote in the beginning of the Leagues form which involved using CMD+Shift+D to make copies and fill in what I wanted.

#### Custom Radio Buttons

I knew that I had to reuse my code for two different sets of radio buttons, so I wanted to make it more dynamic and less forced.

<p align="center">
  <img width="" height="" src="https://user-images.githubusercontent.com/49226084/61166269-d5044580-a4df-11e9-8976-c36a7d2bbe62.png">
</p>


```javascript
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
```  

This format made my clean much more DRY, easier to decipher, and more easily reusable by modifying the arrays it will iterate over.

These would all play options into my larger League Form for league creation. 

#### League Creation

For each league, it was necesary to create the amount of **Teams** that was specified by the user. This way, they can eventually be assigned to each user accordingly and we won't have to make separate calls to our backend to create a team every time that a new user joins a league. The teams will simply be waiting to be assigned to a user, but we want to first make sure that our **User** who created the league is assigned a team.

```ruby
  def create
    @league = League.new(league_params)
    @user = current_user
    @league.user_id = params[:league][:user_id]
    if @league.save

      invite_link = SecureRandom.urlsafe_base64
      Invite.create({url: invite_link, league_id: @league.id })

        commish_team = Team.new(
          name: "Team 1",
          league_id: @league.id,
          user_id: @league.user_id
          )
        commish_team.save

      x = params[:league][:amount_of_teams].to_i
      x -= 1
      i = 2

      x.times do 
        Team.create(
          name: "Team #{i}",
          league_id: @league.id
          )
        i += 1
        end

      render "/api/leagues/show"
    else
      render json: @league.errors.full_messages, status: 422
    end
```    

Lastly, since our **Users** can only see their own **Leagues**, we want them to be able to invite their friends.

#### Invite Link

This was, by far, my favorite feature to implement. Also, the most frustrating to cover all of the edgecases. 

<p align="center">
  <img width="" height="" src="https://user-images.githubusercontent.com/49226084/61166525-9b353e00-a4e3-11e9-941a-ef09e2c236a0.png">
</p>

**Invites** ended up being it's only table that stored a randomly generated **url** and a **league_id**. The initial logic was getting a user assigned to a team by making an Ajax to it's route:

```ruby
  def show
   invite = Invite.find_by(url: params[:id])
   league = League.find(invite.league_id)
   @user = current_user

    league.teams.each do |team|
      if team.user_id == nil
        team.user_id = current_user.id
        team.save
        break
      end
    end

    render "/api/leagues/index"
  end
```

This ended up working fine IF the **User** was already logged in, but the struggles of setting this up is *what if a user wasn't already currently logged in OR signed up*? 

```javascript
//ProtectedRoute in RouteUtil

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  let intd_loc = location.hash.slice(1)
  return (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{pathname: "/signup", nextPath: intd_loc}} />
      )
    )} />
  )
};
```
This helped me path to sign up and store their nextPath so that I could direct them there once they finished signing up. But, what if they needed to login? This would make me lose my nextPath and would fail to redirect them to invite url and hit our invites route. This was solved this way:

```javascript
//mapStateToProps in SignUpContainer

const mapStateToProps = (state, ownProps) => {
  let nextPath;
  if (ownProps.location.nextPath && ownProps.location.nextPath.includes("/invites")) {
    nextPath = ownProps.location.nextPath
    dispatch(receiveInvite(nextPath))
  } else {
    nextPath = null
  };
};
```

Now, we need logic to go back to sign up:

```javascript
//mapStateToProps in LoginContainer

if(state.invite !== undefined){
    nextPath = state.invite
    link = <Link className="right-header-action" to={nextPath}>Don't have an account? Sign Up</Link>
  } else {
    nextPath = null
    link =  <Link className="right-header-action" to="/signup">Don't have an account? Sign Up</Link> 
  };
```

Inside the session form, we are redirecting them back and forth to Login and Signup through a link, so to make sure we continue to grab our nextPath, we redirection them to the original Invite link that will start the process over again. Lastly, they hit the route and finally hit the logic that will achieve what we want.

```javascript
  componentWillMount() {
    if(this.props.fetchInvite){
      this.props.history.push(this.props.match.url);
      this.props.fetchInvite(this.props.match.params.id);
      this.props.history.push('/leagues');
      window.location.reload();
    } else if (this.props.fetchLeagues) {
      this.props.fetchLeagues().then(() =>{
        this.props.history.push('/leagues');
      });
    };
  };
```

They hit the route, we fire the Ajax call with our LeagueId attached and our user gets assigned to a team in the league they were invited to!

Thank you for checking out Snoozer!

-Tyler
