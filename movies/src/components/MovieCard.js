import React from 'react';
import './MovieCard.css';
import Config from '../config';
import { Link } from "react-router-dom"; 
import { BrowserRouter } from 'react-router-dom'


import MovieDetail from './MovieDetail';




class  MovieCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            spans:0,showDetail:false
        }

        this.imageRef=React.createRef()
    }
    componentDidMount(){
        
        this.imageRef.current.addEventListener('load',this.setSpans)

    }
    setSpans=()=>{
        const heights=this.imageRef.current.clientHeight;
        const spans=Math.ceil(heights/20)
        this.setState({
            spans
        })

    }
 
    render(){
        const {title ,poster_path,overview, vote_average}=this.props.image;
        return(
            <div  props={this.props.image} style={{gridRowEnd :`span ${this.state.spans}`}} className="movieCard">
            <Link to={`/Detail/${this.props.image.id}`}  >
                <img
                ref={this.imageRef}
                alt={title}
                src={`${Config.imgeUrl+poster_path}`}
                />
                <div className="movieDetail">
                    <div>
                   <span className="movieTitle">{title}</span>
                    <span>{vote_average}</span>
                    </div>
                    <p className="movieOverview">{overview}</p>
                    </div>
            </Link>
           
            </div>
        )
    }

}
export default MovieCard;