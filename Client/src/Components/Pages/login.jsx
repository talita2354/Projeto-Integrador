import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';



export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de autenticação
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const [showPassword, setShowPassword] = useState(false);  // Adicione esta linha para controlar a visibilidade da senha.

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
               onClick={() => setShowPassword(!showPassword)}  // Alteração: Alterna o estado showPassword.
               >
       <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </button>
        </div>

        <button className="entrar-btn" type="submit">Entrar</button>
        <a href='/register' className='login-register-button'>Cadastrar-se</a>
        <a href='/reset-password' className='login-reset-button'>Esqueceu a senha?</a>
      </form>
    </div>
  );

}
