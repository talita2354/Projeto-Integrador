import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';



export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Adicione esta linha para controlar a visibilidade da senha.

  const [errorMessage, setErrorMessage] = useState('');



   // Mock de usuários (simula uma base de dados)
   const users = [
    { username: 'Talita1', password: 'Talita2222' },
    { username: 'Talita2', password: 'Talita1111' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o usuário existe
    const user = users.find((user) => user.username === username);
    if (!user) {
      setErrorMessage('Usuário não encontrado.');
      return;
    }

    // Verifica se a senha está correta
    if (user.password !== password) {
      setErrorMessage('Senha incorreta.');
      return;
    }

    // Reseta a mensagem de erro se a autenticação for bem-sucedida
    setErrorMessage('');
    console.log('Login bem-sucedido');
    // Adicione aqui a lógica de autenticação após sucesso
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
               onClick={() => setShowPassword(!showPassword)}  // Alteração: Alterna o estado showPassword.
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
