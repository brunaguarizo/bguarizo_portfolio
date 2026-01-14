import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeWindow.module.css';

const CodeWindow = ({ code, title = "Component.jsx", language = "javascript" }) => {
  return (
    <div className={styles.codeWindow}>
      {/* Barra de Título (Header) */}
      <div className={styles.header}>
        {/* Botões da Janela (Mac Style) */}
        <div className={styles.windowButtons}>
          <div className={`${styles.button} ${styles.buttonRed}`}></div>
          <div className={`${styles.button} ${styles.buttonYellow}`}></div>
          <div className={`${styles.button} ${styles.buttonGreen}`}></div>
        </div>
        
        {/* Nome do Arquivo */}
        <div className={styles.fileName}>
          {title}
        </div>
        
        {/* Espaço vazio para equilibrar o layout */}
        <div className={styles.spacer}></div>
      </div>

      {/* Área do Código */}
      <div className={styles.codeContainer}>
        <SyntaxHighlighter 
          language={language} 
          style={vscDarkPlus}
          customStyle={{ 
            margin: 0, 
            padding: '1.5rem', 
            background: 'transparent',
            fontSize: '14px',
            lineHeight: '1.6'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeWindow;
