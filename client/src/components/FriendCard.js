import React from 'react';

export default function FriendCard(props){
    console.log('Friend Card Props',props)
    return(
        <div>
            <p>Name: {props.friendList.name}</p>
            <p>Age: {props.friendList.age}</p>
            <p>Email: {props.friendList.email}</p>
        </div>
    )
}