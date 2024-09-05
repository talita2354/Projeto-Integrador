import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './register.css';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState(''); // Adicionado para erros de usuário
  const [emailError, setEmailError] = useState(''); // Adicionado para erros de email
  const [showPassword, setShowPassword] = useState(false);

  // Mock de usuários (simula uma base de dados)
  const users = [
    { username: 'Talita1', email: 'talita1@exemplo.com', password: 'Talita2222' },
    { username: 'Talita2', email: 'talita2@exemplo.com', password: 'Talita1111' },
  ];

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 5) {
      errors.push('A senha deve ter pelo menos 5 caracteres.');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('A senha deve conter pelo menos uma letra minúscula.');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('A senha deve conter pelo menos uma letra maiúscula.');
    }
    if ((password.match(/\d/g) || []).length < 4) {
      errors.push('A senha deve conter pelo menos 4 números.');
    }
    if (/\s/.test(password)) {
      errors.push('A senha não pode conter espaços.');
    }
    if (/-/.test(password)) {
      errors.push('A senha não pode conter o caractere "-".');
    }
    return errors;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const errors = validatePassword(newPassword);
    if (errors.length > 0) {
      setPasswordError(errors.join(' '));
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validatePassword(password);

    // Resetando mensagens de erro
    setUsernameError('');
    setEmailError('');

    // Verifica se o usuário já existe
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      setUsernameError('Usuário já existente.');
    }

    // Verifica se o email já existe
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      setEmailError('Já  existe um usuário com esse Email .');
    }

    // Se houver erros, não prossegue com o cadastro
    if (userExists || emailExists || errors.length > 0) {
      setPasswordError(errors.join(' '));
      return;
    }

    setPasswordError('');
    console.log('Cadastro bem-sucedido');
    // Adicione aqui a lógica de autenticação após sucesso
  };

  return (
    <div className="register-container">
      <h1>Cadastro</h1>
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
          {usernameError && <p className="error">{usernameError}</p>}
        </div>

        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          {emailError && <p className="error">{emailError}</p>}
        </div>

        <div className="password-conteiner">
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label htmlFor="password">Senha</label>
            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <button className="register-btn" type="submit">Entrar</button>
      </form>
    </div>
  );
}
