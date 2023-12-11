import '../App.scss'
import { connect } from 'react-redux';
import { login, logout } from './actions';

function User({ isAuthenticated, user, login, logout }) {
    return (
      <div>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => login({ username: 'exampleUser' })}>
            Login
          </button>
        )}
      </div>
    );
  }

// function User({isLoggedIn}) {
//     if (isLoggedIn) {
//        return (
//            <Link to="account.html">
//                <img src={generic_user} alt="user=icon"/>
//            </Link>
//        )
//    }
//    else {
//        return (
//            <div className="login">
//                <div className="col-6">
//                    <Link to="login.html"><button className="btn">Login</button></Link>
//                </div>
//                <div className="col-6">
//                    <Link to="register.html"><button class="btn">Register</button></Link>
//                </div>
//            </div>
//        )
//    }
// }


const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  });
  
const mapDispatchToProps = {login,logout,};

export default connect(mapStateToProps, mapDispatchToProps)(User);