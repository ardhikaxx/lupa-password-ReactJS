import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailSent(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lupa Password</h1>
        {isEmailSent ? (
          <div className="reset-message">
            Email pemulihan kata sandi telah dikirim. Silakan periksa kotak masuk Anda.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Kirim Email Pemulihan</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default App;