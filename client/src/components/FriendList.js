import React from 'react';
import { axiosAuth } from '../utils/axiosAuth';

// Components
import FriendCard from './FriendCard';
import Friends from './Friends';

class FriendList extends React.Component {
    state = {
        friendList: []
    }

    componentDidMount(){
        axiosAuth()
            .get('/api/friends', this.state.friendList)
            .then(res => {
                console.log('This is the FriendList',res.data)
                this.setState({
                    friendList: res.data
                })
            })
            .catch(err => console.log(err.response))
    }
    

    render(){    
    return(
        <div>
           <h1>Friend List</h1>
           <Friends/>
           {this.state.friendList.map(person =>
               <FriendCard friendList={person} key={person.id}/>
           )} 
        </div>
    )}

}

export default FriendList;