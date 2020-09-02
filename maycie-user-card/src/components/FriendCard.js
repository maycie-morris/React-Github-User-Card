import React from "react";

function FriendCard(props) {
  console.log(props.friends.followers);
  return (
    <div className="card">
      {props.friends.followers.map((user, index) => {
        return (
          <div className="card-info" key={index}>
            <img src={user.avatar_url} alt=""></img>
            <p>{user.login}</p>
            <p>Profile:</p>
            <a href={user.html_url}></a>
          </div>
        );
      })}
    </div>
  );
}

export default FriendCard;