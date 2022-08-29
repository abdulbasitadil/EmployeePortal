import React, { useState } from 'react';
import './Login.css';
import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Logo from '../img/logo-dark.png';
import { useNavigate } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Login = (props) => {
  const navigate = useNavigate();

  const initialState = {
    data: {},
    loading: false,
    pass: true,
    isLogin: false,
    firstTimeAlert: true,
  };

  const [fstate, setfstate] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setfstate({ ...fstate, pass: true, loading: true });
    login(event.target[0].value, event.target[1].value);
    event.target.reset();
  };

  const login = () => {
    setfstate({ ...fstate, pass: true, loading: false });
    navigate('/admin/role');
  };

  return (
    <div>
      <div className="container">
        <div id="main-outer-div">
          <div id="logo-div">
            <img id="logo-img" src={Logo} alt="" />
          </div>
          <div id="title-div">
            <h4 className="title">Sign in</h4>
          </div>
          <div id="outer-login-form-div">
            <form action="" method="" onSubmit={handleSubmit}>
              <input
                className="login-form-input"
                type="text"
                placeholder="Email"
                required="required"
                name="Username"
              />
              <input
                className="login-form-input"
                type="password"
                placeholder="Password"
                required="required"
              />
              <input
                className="login-form-input"
                type="submit"
                value="Sign in"
                id="submitBtn"
              />
              {!fstate.pass ? (
                <p className="alert">Invalid UserName or Password</p>
              ) : (
                ''
              )}
            </form>
          </div>
          <div className="loading">
            <ScaleLoader
              css={override}
              sizeUnit={'px'}
              size={150}
              color={'#123abc'}
              loading={fstate.loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
