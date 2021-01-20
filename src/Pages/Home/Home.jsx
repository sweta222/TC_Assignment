import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';
const Home = () => {

const [state,setState] = useState({FirstName:null,LastName:null,Email:null,Password:null});
    
const history = useHistory();

    const handleSubmit = () => {
            history.push("/dashboard");
          }

          const handleChange = (event) => {
            setState({
                ...state,
                [event.target.id]: event.target.value
              });
           }

    return(
        <div>
            <div className="header">
Try it free 7 days than $20/mo.thereafter
      </div>
            <div>
       <form onSubmit={handleSubmit}>
       <input type="text" placeholder="First Name" onChange={handleChange} required/>
       <input type="text" placeholder="Last Name" onChange={handleChange} required/>
       <input type="email" placeholder="Email Address" onChange={handleChange} required/>
       <input type="password" placeholder="password" onChange={handleChange} required/>
       <button className="myButton">CLAIM YOUR FREE TRIAL</button>
     </form>
    </div>
        </div>
    );
}
export default Home;