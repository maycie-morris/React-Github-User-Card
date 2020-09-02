import React from "react";
import axios from "axios";
import FriendCard from "./components/FriendCard";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: "maycie-morris",
      card: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.friend}`)
      .then((response) => {
        this.setState({
          card: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    console.log("Yep it's updated");
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({
      friend: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.friend}/followers`)
      .then((response) => {
        this.setState({
          followers: [...this.state.followers, response.data],
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <h1>Github Followers</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.handleChanges} />
        </form>
        <FriendCard friends={this.state} />
      </div>
    );
  }
}
export default App;
