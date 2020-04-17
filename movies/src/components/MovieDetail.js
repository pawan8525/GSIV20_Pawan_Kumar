import React from 'react'
import { connect } from 'react-redux';
import  { bindActionCreators} from 'redux';
import{ requestMovieDetail} from '../modules/ui/action';
import  Config from '../config';
import './MovieDetail.css'

class MovieDetail extends React.Component{
    componentDidMount(){
        this.props.requestMovieDetail(this.props.match.params.id)
    }
    render(){
        const{movie}=this.props;
    return(
      <div className="ui container">
            Movie Detail 
           <hr/>
          {movie && movie.data &&<div className="movieDetail">
               <div >
                   <img className="movieImage" src={`${Config.imgeUrl+movie.data.poster_path}`}/>
               </div>
               <div className="movieDescription">
                <p>{movie.data.title}</p>
                 <p>Year|length|Director</p>
                 <p>Cast:Actor 1,Actor 2</p>
                  <p>Description:{movie.data.overview}</p>
               </div>
           </div>
          }
        </div>
    
    );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log("state.ui.movieDetail",state.ui.movieDetail)
     return{
         movie:state.ui.movieDetail
      
     }
    },
    mapDispatchToProps=(dispatch)=>{
        return {
            ...bindActionCreators({
                requestMovieDetail
            },dispatch)
        }

    };
export default connect (mapStateToProps,mapDispatchToProps)(MovieDetail);
    