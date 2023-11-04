import generic_user from '../resources/icons8-male-user-50.png'
import '../App.css'

function User({isLoggedIn}) {
   if (isLoggedIn) {
       return (
           <a href="account.html">
               <img src={generic_user} alt="user=icon"/>
           </a>
       )
   }
   else {
       return (
           <div className="login">
               <div className="col-6">
                   <a href="login.html"><button className="btn">Login</button></a>
               </div>
               <div className="col-6">
                   <a href="register.html"><button class="btn">Register</button></a>
               </div>
           </div>
       )
   }
}

export default User