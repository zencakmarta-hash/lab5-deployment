import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Відкриваємо модальне вікно через 3 секунди (для тестування, потім можна змінити на 60000)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer); // Очищення таймера
  }, []);

  if (!isOpen) return null; // Якщо isOpen = false, нічого не показуємо

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle} className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full relative">
        <h3 className="text-2xl font-bold mb-4 text-slate-800">Зворотний зв'язок</h3>
        <p className="text-sm text-slate-500 mb-4">Будь ласка, залиште свої дані, і ми з вами зв'яжемося.</p>
        
        <form action="https://formspree.io/f/xpppydwl" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Ім'я" required className="border border-slate-300 p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required className="border border-slate-300 p-2 rounded" />
          <input type="tel" name="phone" placeholder="Номер телефону" required className="border border-slate-300 p-2 rounded" />
          <textarea name="message" placeholder="Ваше повідомлення" required rows="4" className="border border-slate-300 p-2 rounded"></textarea>
          
          <button type="submit" className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">
            Надіслати
          </button>
          <button 
            type="button" 
            onClick={() => setIsOpen(false)} 
            className="text-slate-500 hover:text-slate-700 text-sm mt-2"
          >
            Закрити
          </button>
        </form>
      </div>
    </div>
  );
}

// Стилі для затемнення фону під модальним вікном
const modalStyle = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 1000
};
const modalContentStyle = {
  color: 'black'
};