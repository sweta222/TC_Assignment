 import { useState } from 'react';
 import './Home.css';
// const Home = () => {

// const [state,setState] = useState({FirstName:null,LastName:null,Email:null,Password:null});
    
// const history = useHistory();

//     const handleSubmit = () => {
//             history.push("/dashboard");
//           }

//           const handleChange = (event) => {
//             setState({
//                 ...state,
//                 [event.target.id]: event.target.value
//               });
//            }

//     return(
//         <div>
//             <div className="header">
// Try it free 7 days than $20/mo.thereafter
//       </div>
//             <div>
//        <form onSubmit={handleSubmit}>
//        <input type="text" placeholder="First Name" onChange={handleChange} required/>
//        <input type="text" placeholder="Last Name" onChange={handleChange} required/>
//        <input type="email" placeholder="Email Address" onChange={handleChange} required/>
//        <input type="password" placeholder="password" onChange={handleChange} required/>
//        <button className="myButton">CLAIM YOUR FREE TRIAL</button>
//      </form>
//     </div>
//         </div>
//     );
// }
// export default Home;

import { useHistory } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const history = useHistory();
    const handleSubmit = () => {
        //alert("clicked");
        history.push("/dashboard");
    }
    return (
        <div>

            <div className="row">
                <div className="col">
                    <h1> Learn to code by watching others </h1>
                    <p> See how experienced developers solve problems in real-time Watching scripred tutorials is great.but understanding how developers think is invaluable</p>
                </div>
                <div className="col">
                    <div className="header">
                        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Try it free 7 days </b> than $20/mo.thereafter
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="password" placeholder="Password" required />
                        <button className="myButton">CLAIM YOUR FREE TRIAL</button>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By clicking the button,you are agreeing to our<b> Terms and Services</b></p>
                    </form>

                </div>
            </div>
        </div>
    );
}
export default Home;