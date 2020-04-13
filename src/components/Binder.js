import React, {Component} from 'react';


class Binder extends Component{
        constructor(){
            super()
            this.state = {
                text: 'Hello state',
                somethingText: '',
            };
            // this.onClickMe = this.onClickMe.bind(this)//V.1
            // this.onClickMe = () => console.log(this);//V.2
        }
    // onClickMe(){
    //     console.log(this)//V.1
    // }
    onClickMe = () => {
        console.log(this); //Preferred method
    }
    handleSomething = (text) => {
        this.setState({
            somethingText:'Clicked on Handle Something'
        })
    }

    render(){
           return (
           <div>
               <h1>{this.state.somethingText}</h1>
        <button 
        className="ui primary button" 
        style={{margin:'10px 15px'}} 
        onClick={this.onClickMe}
        // onClick={this.onClickMe.bind(this)} //V.3
       >
           Click Me
       </button>
       <button 
        className="ui black button" 
        style={{margin:'10px 15px'}} 
        onClick={this.handleSomething}
        // onClick={this.onClickMe.bind(this)} //V.3
       >
           Do Something
       </button>

           </div>
            )
        }

}



export default Binder;