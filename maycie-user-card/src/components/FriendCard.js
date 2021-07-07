import React from "react";
import axios from "axios";

class FriendCard extends React.Component {
    constructor() {
        super();
        this.state = {
            myGithub: "maycie-morris",
            followers: []
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/${this.state.myGithub}`)
            .then((response) => {
                const myData = response.data
                this.setState({myGithub: myData})
                console.log(myData)
            })

        axios
            .get(`https://api.github.com/users/${this.state.myGithub}/followers`)
            .then((response) => {
                const friendData = response.data
                this.setState({followers: friendData})
                console.log(friendData)
            })
    }



    render() {
        return (
            <div className="my-info">
                <h1>{this.state.myGithub.name}</h1>
                <h2>{this.state.myGithub.location}</h2>
                <p className="bio">{this.state.myGithub.bio}</p>
                <p className="my-followers">My Followers:</p>
            <div className="followers">
                {this.state.followers.map((item) => {
                    return (
                        <img src={item.avatar_url} />
                    )
                })}
                
            </div>
            </div>
        )
    }

}

export default FriendCard;