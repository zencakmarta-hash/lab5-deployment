import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    // Денна тема: від 07:00 до 21:00
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Визначаємо класи для Tailwind залежно від обраної теми
  const themeClasses = theme === 'light' 
    ? 'bg-slate-50 text-slate-900' 
    : 'bg-slate-900 text-slate-50';

  return (
    <div className={`min-h-screen pb-10 font-sans transition-colors duration-300 ${themeClasses}`}>
      
      {/* Кнопка перемикання теми */}
      <div className="flex justify-end p-4 max-w-3xl mx-auto">
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 text-sm font-semibold rounded-full border border-current opacity-80 hover:opacity-100 transition"
        >
          {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
        </button>
      </div>

      <Header />
      
      <main className="max-w-3xl mx-auto px-6 mt-4 space-y-6">
        <About />
        <Experience />
        <Education />
        <Reviews />
      </main>
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;