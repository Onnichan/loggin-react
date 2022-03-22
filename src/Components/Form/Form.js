import React from 'react';
import './styles.css';
import logo from '../../Assets/icons/google+.svg';

export default class Form extends React.Component{
  render(){
    return(
      <form className='frm-loggin'>
        <p className='title-loggin'>LOGGING</p>
        <div className='input-loggin'>
          <label className='lbl-loggin'>Username : </label>
          <input className='input user-loggin' type="text" name="username" autoComplete='off'/>
        </div>
        <div className='input-loggin'>
          <label className='lbl-loggin'>Password :</label>
          <div class="cont-pass">
            <input className='input pass-loggin' type="password" name="password" />
            <i class="far fa-eye"></i>
          </div>
        </div>
        <div className="input-loggin">
          <div className="remember">
            <input type="checkbox" className="chk-remember" />
            <label className="lbl-remember">Remember me</label>
          </div>
          <a className="forgot-password" href="#">Forgot your password?</a>
        </div>
        <input className='btn submit-loggin' type="submit" />
        <hr className="line" />
        <h5 className="txt-sign">Or sign in with</h5>
        <div>
          <button type="button" className="btn facebook">
            <i className="fab fa-facebook-f"></i>Login with Facebook
          </button>
          <button type="button" className="btn google">
            <div className="content-svg">
              <img src={logo} alt="icon google+" />
            </div>
            Login with Google+
          </button>
        </div>
        <p className="account">Don't have an account?   <span className="create-account">Create an account</span>
        </p>
      </form>
    )
  }
}