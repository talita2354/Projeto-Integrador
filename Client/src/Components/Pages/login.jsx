import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../services/authService';
import Swal from 'sweetalert2';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false); // Adicione esta linha para controlar a visibilidade da senha.
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para navigação

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Login(username, password);
      Swal.fire('Sucesso', 'Login feito com sucesso!', 'success');
      navigate('/dashboard');
    } catch (error) {
      Swal.fire('Erro', 'Erro ao fazer login', 'error');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username">Usuário</label>
        </div>

        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Senha</label>
          <button
            type="button"
            className="show-password-btn"
          // onClick={() => setShowPassword(!showPassword)}  // Alteração: Alterna o estado showPassword.
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button className="entrar-btn" type="submit">Entrar</button>
        <a href='/register' className='login-register-button'>Cadastrar-se</a>
        <a href='/reset-password' className='login-reset-button'>Esqueceu a senha?</a>
      </form>
    </div>
  );

}
