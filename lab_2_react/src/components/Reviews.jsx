import { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const variant = 11;

  useEffect(() => {
    // Запит на сервер для отримання коментарів
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка при завантаженні:', error));
  }, [variant]);

  return (
    <section className="mt-8 mb-8 text-left">
      <h2 className="text-xl font-bold mb-4">Відгуки роботодавців</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {reviews.map(review => (
          <div key={review.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h4 className="font-semibold text-blue-600">{review.name}</h4>
            <small className="text-gray-500">{review.email}</small>
            <p className="mt-2 text-sm">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}