'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../RegisterPage.css'; // Importa o arquivo CSS

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async () => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      router.push('/login');
    } else {
      setError('Erro ao registrar');
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="logoSpace">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <nav>
          <ul className="navButtons">
            <li><a href="/">Home</a></li>
            <li><a href="/register">Registrar</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <h1>Registrar</h1>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button onClick={handleRegister} className="button">
          Registrar
        </button>
        <p className="text">
          Já tem uma conta?{' '}
          <a href="/login" className="link">
            Faça login
          </a>
        </p>
      </main>

      <footer className="footer">
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
