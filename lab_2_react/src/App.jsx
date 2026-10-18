import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-10">
      <Header />
      <main className="max-w-3xl mx-auto px-6 mt-8 space-y-6">
        <About />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;