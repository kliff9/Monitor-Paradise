import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  { useSelector } from 'react-redux';
import { signin } from '../actions/UserActions';
import LoadingBox from '../componets/LoadingBox';
import MessageBox from '../componets/MessageBox';


export default function SigninScreen(P) {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const redirect = P.location.search
 ? P.location.search.split('=')[1] 
 : '/';
console.log('redirect', P.location.search.split('=')[1]) 

const userSignin = useSelector(state => state.userSignin); 
console.log('usersignin', typeof userSignin)

const { userInfo, loading, error } = userSignin;



  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password)); 
}

useEffect(() => {
  if (userInfo) { //if signin
    P.history.push(redirect);
  }
}, [P.history, redirect, userInfo]);
  return (
         <div className="flex">

    <div>

      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
          <label htmlFor="email">Email address</label> 
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label />
          <div>
          New customer?{' '}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>

    <div class="wrapper">


  <input type="radio" id="tab-1" name="tabs" className="inputnone"></input>
  <label for="tab-1"><div>Signin</div><div class="cross"></div></label>
  <div class="content">Email: admin@example.com <br></br> 
                        Password: 1234 <br></br>
                        </div>
    
</div>
</div>
  );
  }