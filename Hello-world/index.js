import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mystyle.scss';

/*
const myelement=React.createElement("h1",{},Hello world gokul kamaraj!");
function Header(){
    return  <div>
    <h1>Dharmapuram Adhinam Arts college</h1>
    <h2>place :Dharmapuram</h2>
</div>
}
function Navigatebar(){
    return  <div>
    <h1>Navigatebar</h1>
   
</div>
}
function Sidebar(){
    return  <div>
   <h1>sidebar</h1>
   
</div>
}
function Footer(){
    return  <div>
    <h1>footrer</h1>
</div>  
}

function Webpage(){
    return <div>
    <Header/>
    <Footer/>
    <Sidebar/>
    <Navigatebar/>
    <Footer/>
    </div>
   
   }
ReactDOM.render(<Webpage/>,document.getElementById("root"))
class Myclass extends React.Component{
    render(){
        return <h1 style={mystyle}>My College is {this.props.cname} in {this.props.place}</h1>
    }

}
var mystyle={
    backgroundColor:"black",
    color:"red",
    textAlign:"center"
}
Myclass.defaultProps={cname:"Dharmapuram Adhinam Arts college",place:"Dharamapuram"}
ReactDOM.render(<Myclass /> ,document.getElementById('root'))

class Eventbind extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"Hello Subhani"
        }
    }
    clickEvent=(a)=>{
        this.setState({
            msg:a
        })
    }
    render(){
        return <div>
            <h1>{this.state.msg}</h1>
            <button onClick={this.clickEvent.bind(this,"I love you lot!")}>click me!</button>

            <h1 onClick={this.clickEvent.bind(this,"I love you lot!")}>click me!</h1>
        </div>
    }
}
ReactDOM.render(<Eventbind />,document.getElementById('root')); */

class ReactForm extends React.Component{
    constructor(){
        super()
        this.state={username:"",
    age:null, errmsg:""}
    }
    uservalue=(event)=>{
       let n=event.target.name;
       let v=event.target.value;
       let err="";
       if(n==="age"){
        if(v!=""&& !Number(v))
        {
            err=<strong>Invalid value,your age must be a numbers</strong>
        }
       }
       this.setState({errmsg:err})
       this.setState({[n]:v});
    }
    
    render(){
        return <form>
            <h1> Hello {this.state.username}</h1>
            <h1> Hello {this.state.age }</h1>
           Enter your Name: <input type='text' name='username' onChange={this.uservalue}/>
           Enter your Age: <input type="text" name="age" onChange={this.uservalue}/>{this.state.errmsg}
        </form>
    }
}

ReactDOM.render(<ReactForm/>,document.getElementById('root'))