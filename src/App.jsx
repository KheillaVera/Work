import React, { useState } from 'react';
import BookList from './BookList';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [books, setBooks] = useState([]);

  function handleAddBook() {
    if (!title || !author) return;
    setBooks([...books, { title, author, summary }]);
    setTitle('');
    setAuthor('');
    setSummary('');
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>
        Uwimana's Library
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '6px' }}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          style={{ padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '6px' }}
        />
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
          rows={3}
          style={{ padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '6px', fontFamily: 'sans-serif' }}
        />
        <button
          onClick={handleAddBook}
          style={{ padding: '10px', fontSize: '15px', backgroundColor: '#4a6741', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Add Book
        </button>
      </div>

      <BookList books={books} />
    </div>
  );
}

export default App;