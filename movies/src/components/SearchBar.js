import React from 'react';

class  SearchBar  extends React.Component{
    state={term:''}

    onFormSubmit=(event)=>{
        const { term }=this.state;
        event.preventDefault()
        this.props.onSubmit(term)

    }
    
    render(){
        const { term }=this.state;
        return (
        <div className="ui segment">
         <form  onSubmit={this.onFormSubmit} className="ui form">
             <div className="ui field">
             <input type="text" 
                value={term}
                onChange={(e)=>this.setState({term:e.target.value})}/>
             </div>
         </form>
        </div>
        );
    }
}
export default SearchBar
