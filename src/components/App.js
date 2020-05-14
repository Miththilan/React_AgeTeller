import React,{Component} from 'react';
import {from,FormControl,Button, Form} from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component{
    constructor(){
        super();

        this.state={
            newDate:'',
            birthDay:'1996-03-31'
        }
    }
    changeBirthday(){
        console.log(this.state);
        this.setState({birthDay:this.state.newDate});
    }

    render(){
        return(
            <div className="App">
                <Form inline>
                    <h2>Input Your BirthDay!</h2>
                    <FormControl type='date' 
                    onChange={event=>this.setState({newDate:event.target.value})}>

                    </FormControl>
                    {'  '}
                    <Button onClick={()=>this.changeBirthday()}>
                        Submit
                    </Button>
                     
                    <AgeStats date={this.state.birthDay}/>
                </Form>
            </div>
        )
    }
}

export default App;