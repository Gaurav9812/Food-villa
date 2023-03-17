import React from "react";

class Profile extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name:"da",
                location:"dsa"
            }
        }
        console.log("child-constructor" + this.props.name);
    }

   async componentDidMount() {
        let data = await fetch("https://api.github.com/users/Gaurav9812");
        data = await data.json();
        console.log(data);
        this.setState({userInfo:data})

    }
 
    componentDidUpdate(prevProps, prevState) {
        // if(this.state.userInfo != prevProps.userInfo) {}
        console.log("ComponentDidUpdate");
    }
    componentWillUnmount() {
        console.log("ComponentWillUnmount");
    }

    render() {
        const {name} = this.props;
        const {userInfo} = this.state;
        console.log("child-render" + name);
       return (
       <div>
         <h1>This is Class based component</h1>
         <img src={userInfo?.avatar_url} />
         <h2>Name : {userInfo?.name}</h2>
            <a href={userInfo?.repos_url} >repo url</a>
       </div>
       )
       
    }

}

export default Profile