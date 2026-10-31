import { useEffect, useState } from 'react';

export default function Footer() {
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    // Зчитуємо системну інформацію
    const info = `ОС: ${navigator.platform}, Браузер: ${navigator.userAgent}`;
    // Зберігаємо в localStorage
    localStorage.setItem('systemInfo', info);
    // Отримуємо дані для відображення
    setSysInfo(localStorage.getItem('systemInfo'));
  }, []);

  return (
    <footer className="mt-12 text-center text-slate-500 text-sm" style={{ padding: '20px', borderTop: '1px solid #ccc' }}>
      <p>© 2026 Женчак Марта. Усі права захищено.</p>
      
      <div style={{ marginTop: '15px' }}>
        <p>Системна інформація з LocalStorage:</p>
        <small>{sysInfo}</small>
      </div>
    </footer>
  );
}