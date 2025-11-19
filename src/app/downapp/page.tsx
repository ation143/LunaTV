import React, { useState } from 'react';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img src="data:image/png;base64,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" alt="蓝奏云扫描下载" style={styles.image} />
        <a href="https://ation143.lanzouu.com/ixAS83bm4hdg" download style={styles.button}>
          GitHub仓库下载
        </a>
        <button onClick={onClose} style={styles.closeButton}>
          关闭
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
  },
  image: {
    width: '35px',
    height: '35px',
    display: 'block' as 'block',
    margin: '0 auto',
  },
  button: {
    display: 'block' as 'block',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>打开弹窗</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
