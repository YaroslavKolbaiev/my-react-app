import { useState, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../components/Loader";
import { actions as authActions } from "../../features/auth";

export const Login = () => {
  const [ displayError, setDisplayError ] = useState(false);
  const dispatch = useDispatch();
  const { authorised, login, password } = useSelector(state => state.auth);
  
  const onLoginChange = (value) => {
    dispatch(authActions.setLogin(value));
  };

  const onPasswordChange = (value) => {
    dispatch(authActions.setPassword(value));
  };

  const clearLoginAndPassword = () => {
    dispatch(authActions.setLogin(""));
    dispatch(authActions.setPassword(""));
  };

  const onSubmit = () => {
    try {
      dispatch(authActions.setAthorised());
    } catch (err) {
      setDisplayError(true);
    } finally {
      clearLoginAndPassword();
    }
  };

  return (
    <div className="section">
      <div className="container">
        {
       authorised 
       ? <Loader path="/profile" />
       : (
         <div className="columns is-centered">
           <div className="column is-one-third">
             <form 
          className="box"
          onFocus={() => {
            setDisplayError(false);
          }}
          onSubmit={onSubmit}
          >
               <div className="field">
                 <label className="label has-text-primary">LOGIN</label>
                 <input 
            type="text"
            value={login}
            className="input"
            placeholder="enter login"
            onChange={(event) => {
              event.preventDefault();
              onLoginChange(event.target.value);
            }}
          />
               </div>

               <div className="field">
                 <label className="label has-text-primary">PASSWORD</label>
                 <input
              type="text"
              value={password}
              className="input"
              placeholder="enter password"
              onChange={(event) => {
                event.preventDefault();
                onPasswordChange(event.target.value);
              }}
            />
               </div>

               <button
            type="submit"
            className="button is-primary"
         >
                 LOGIN
               </button>
             </form>
           </div> 
         </div>
       )
     }
        {displayError && (
        <div className="columns is-centered">
          <div className="column is-one-third">
            <div className="box has-background-warning">
              <h2>User name or password is incorrect</h2>
            </div>
          </div>
        </div>
     )}
      </div>
    </div>
  );
};
