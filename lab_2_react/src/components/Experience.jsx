function Experience() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-indigo-100 pb-2 mb-4">Досвід роботи</h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-bold text-indigo-600">Junior Information Security Specialist / Trainee</h3>
        <p className="text-sm text-slate-500 font-medium mt-1">ТОВ «ІТ-Солюшн» | Травень 2026 – за сучасний час</p>
      </div>

      <p className="font-semibold text-slate-700 mb-2">Обов'язки та досягнення:</p>
      <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2 leading-relaxed">
        <li>Брала участь в аудиті інформаційної безпеки та розробці матриці ризиків відповідно до стандартів ISO/IEC 27001 та ISO/IEC 27005.</li>
        <li>Займалася аналізом мережевого трафіку та моніторингом захищених з'єднань (зокрема інспекцією), сертифікатів TLS 1.3.</li>
        <li>Розробила та підтримувала внутрішні скрипти на Python для автоматизації процесів безпеки (робота з криптографічними алгоритмами хешування, такими як blake2b).</li>
        <li>Працювала з системами контролю версій (Git) у командному середовищі, дотримуючись стандартів написання чистого коду.</li>
      </ul>
    </section>
  );
}

export default Experience;