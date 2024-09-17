// pages/index.js (ou app/page.js)

import Image from 'next/image';
import styles from './page.module.css'; // Certifique-se de que este caminho está correto

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {/* Logo no canto superior esquerdo */}
        <Image
          src="/logo.png" // Caminho relativo à pasta public
          alt="Logo"
          className={styles.logo}
          width={90} // Ajuste o tamanho conforme necessário
          height={30} // Ajuste o tamanho conforme necessário
        />

        <nav>
          <ul className={styles.navButtons}>
            <li><a href="/">Home</a></li>
            <li><a href="/register">Registrar</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>SESSÕES EM ABERTO</h1>
        <ol>
          <li>
            Bem-vindo à Página Inicial
          </li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Garanta sua Sessão
          </a>
          <a
           
          >
            
          </a>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/furiosa.png"
            alt="Imagem personalizada"
            width={300}
            height={300}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>

        </p>
      </footer>
    </div>
  );
}
