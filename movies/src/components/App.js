import React from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators} from 'redux';

import{ requestMoviesData, requestSearchMovies} from '../modules/ui/action';


//components
import SearchBar from './SearchBar';
import MovieList from './MovieList';

 class App extends React.Component{
     state={movies:[]}

    componentDidMount(){
       this.props.requestMoviesData()
    }
     onSearchSubmit=(term)=>{
        if(term){
        this.props.requestSearchMovies(term)
        }
     }
     render(){
         const {moviesData}=this.props
     return(
     <div className="ui container">
         <SearchBar onSubmit={this.onSearchSubmit}/>
         {moviesData && moviesData.data && moviesData.data.results &&
         <MovieList movies={moviesData.data.results}/>
          }
          
     </div>
    );
 }
 }
 const mapStateToProps = (state, ownProps) => {
    return {
        ui:state.ui,
        items:state.ui.items,
        moviesData:state.ui.moviesData
    }
 },
 mapDispatchToProps = (dispatch) => {
    return {
      ...bindActionCreators({
       requestMoviesData,
       requestSearchMovies
      },dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);