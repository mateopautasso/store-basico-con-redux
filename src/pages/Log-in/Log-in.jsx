import { useRef} from "react";
import { getDataAxios } from "../../services/axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import './Log-in.css';
import userInLocal from './user.json'

export function LogIn() {
    const emailField = useRef();
    const passwordField = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await getDataAxios('GET', 'http://localhost:3000/user');
        let data = res.data;
        if(res.name === "AxiosError") {
          data = userInLocal.user;
        }
            
        const registeredUser = data.find( user => user.email === emailField.current.value);

          if(registeredUser) {
              if(registeredUser.password === passwordField.current.value) {
                  dispatch(logIn({
                      email: emailField.current.value,
                      fullName: `${registeredUser.firstName} ${registeredUser.lastName}`,
                      token: Date.now()
                  }))
                  navigate('/Home')
              } else alert('Contraseña incorrecta');
          } else alert('Email no registrado');
        
    }

    return (
      <div className="login-main-container">
        <div className="row justify-content-center form-login-container">
          <div className="col-14">
            <h2 className="mb-4">LOGIN FORM</h2>
            <p style={{fontSize: '13px', color: 'grey'}}>Email: example111@gmail.com</p>
            <p style={{fontSize: '13px', color: 'grey'}}>Contraseña: 111</p>
            <p style={{fontSize: '13px', color: 'grey'}}>cambiar &quot;111&quot; por &quot;222&quot;, &quot;333&quot; etc. para diferentes users.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" ref={emailField} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" ref={passwordField} />
              </div>
              <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    )
}