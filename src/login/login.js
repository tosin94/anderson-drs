import React from 'react';
import '../index.css';

class Login extends React.Component
{
    constructor(props){
        super(props);
        this.state = {username: '', password: ''};
    

        //ensuring all state changes and actions are controlled by REACT as html elements habve theirs
        this.watchChange = this.watchChange.bind(this);
        this.watchSubmit = this.watchSubmit.bind(this);
    }
        watchChange(event) {
            console.log(event.target.name);
            const val = event.target.name;
            // square breackets => computed properties 
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
            this.setState({[val]: event.target.value});
            
        }
        watchSubmit(event) {
            event.preventDefault();
            alert("Username: " + this.state.username);
            //write own handle for submit
        }
    
    render(){
        return(
            <div class="row">

                <div class="col-lg-6 col-md-8">
                    <img src="../logo-adrs.png" alt="Anderson Drs" />
                </div>

                <div class="col-lg-6 col-md-4 form-group" >
                    <form method="post" id="login_form" name="login" onSubmit={this.watchSubmit}>
                        <label>Username: </label>
                        <input class="form-control" type="text" value={this.state.username} name="username" onChange = {this.watchChange} required/>
                        <label>Password:</label>
                        <input class="form-control" type="password" value={this.state.password} name="password" onChange = {this.watchChange} required />

                        <button class="btn btn-primary"> Submit </button>

                    </form>
                </div>
            </div>
            
        );
    }
}

export default Login;