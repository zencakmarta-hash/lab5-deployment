function Header() {
  return (
    <header className="bg-indigo-600 text-white py-12 px-6 text-center shadow-md">
      <h1 className="text-4xl font-bold mb-2">Женчак Марта</h1>
      <p className="text-xl text-indigo-200 mb-4">Студентка спеціальності «Кібербезпека»</p>
      <div className="flex justify-center gap-4 text-sm font-medium">
        <a href="mailto:zencakmarta@gmail.com" className="hover:text-yellow-300 transition-colors underline underline-offset-4">
          zencakmarta@gmail.com
        </a>
      </div>
    </header>
  );
}

export default Header;