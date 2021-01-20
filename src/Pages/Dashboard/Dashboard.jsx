import { useState } from 'react';
import './Dashboard.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Details from '../Details/Details';
import { Switch, Route, BrowserRouter } from "react-router-dom";
const Dashboard = () => {
    const history = useHistory();
    const [query,setQuery] = useState("");
    const [genres,setGenres] = useState([]);
    const [movies,setMovies] = useState([]);
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = () => {
       sendDetailsToServer();
    }
    //console.log(query);
    const sendDetailsToServer = () => {
        //alert("bhabani");
        if(query){
        axios.get("https://wookie.codesubmit.io/movies",{
            headers: {
              'Authorization': `Bearer Wookie2019`
            }
          }).then((responseData) => {
              setMovies(responseData.data.movies);
              setGenres(responseData.data.movies.map(item => item.genres))
            console.log(responseData.data);})
        //console.log(responseData.data.movies.map((item) => item.genres))})
        }
    }
    //console.log(genres)
    const details = () => {
        <div>
        {history.push("/details")}
        </div>
    }
    return(
        <div>
            <div>
                <h3>WOOKIE MOVIES</h3>
                <div className="searchbox">
                <input type="text" onChange={handleChange}></input>
                <button onClick={handleSubmit}>search</button>
                </div>
                <hr></hr>
            </div>
            {movies.length >= 1 ? (<div className="showresults">
                {movies.map((item) => (<ol key={movies.id}>Movie-{item.title} , Type-{item.genres} ,
                <img src={item.poster} onClick={details} alt="new" />
                  </ol>))}
            </div>) : (<div></div>)}
        </div>
    );
}
export default Dashboard;