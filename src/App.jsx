import React, { useState } from 'react';
import BookList from './BookList';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function handleAddBook() {
    if (!title && !author) {
      setError('Please input a book title and an author.');
      return;
    }
    if (!title) {
      setError('Please input a book title.');
      return;
    }
    if (!author) {
      setError('Please input an author.');
      return;
    }

    setError('');

    if (editIndex !== null) {
      const updated = [...books];
      updated[editIndex] = { title, author, summary };
      setBooks(updated);
      setEditIndex(null);
    } else {
      setBooks([...books, { title, author, summary }]);
    }

    setTitle('');
    setAuthor('');
    setSummary('');
  }

  function handleEdit(index) {
    const book = books[index];
    setTitle(book.title);
    setAuthor(book.author);
    setSummary(book.summary);
    setEditIndex(index);
    setError('');
  }

  function handleDelete(index) {
    setBooks(books.filter((_, i) => i !== index));
    if (editIndex === index) {
      setTitle('');
      setAuthor('');
      setSummary('');
      setEditIndex(null);
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>
        Uwimana's Library
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ margin: '0 0 4px', color: '#444' }}>
          {editIndex !== null ? 'Edit Book' : 'Add a New Book'}
        </h3>

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

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleAddBook}
            style={{ flex: 1, padding: '10px', fontSize: '14px', backgroundColor: '#4a6741', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
          >
            {editIndex !== null ? 'Save Changes' : 'Add Book'}
          </button>
          {editIndex !== null && (
            <button
              onClick={() => { setEditIndex(null); setTitle(''); setAuthor(''); setSummary(''); setError(''); }}
              style={{ padding: '10px 16px', fontSize: '14px', backgroundColor: '#aaa', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Cancel
            </button>
          )}
        </div>

        {error && (
          <p style={{ color: 'red', fontSize: '13px', margin: '0' }}>{error}</p>
        )}
      </div>

      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;