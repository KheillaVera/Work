import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p style={{ textAlign: 'center', color: '#999' }}>No books yet. Add one above!</p>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: '16px', color: '#333' }}>My Books ({books.length})</h2>
      {books.map((book, index) => (
        <div
          key={index}
          style={{ padding: '16px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}
        >
          <h3 style={{ margin: '0 0 4px', color: '#222' }}>{book.title}</h3>
          <p style={{ margin: '0 0 8px', color: '#4a6741', fontSize: '14px' }}>by {book.author}</p>
          {book.summary && (
            <p style={{ margin: '0 0 12px', color: '#555', fontSize: '14px' }}>{book.summary}</p>
          )}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onEdit(index)}
              style={{ padding: '6px 14px', fontSize: '13px', backgroundColor: '#4a6741', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              style={{ padding: '6px 14px', fontSize: '13px', backgroundColor: '#c0392b', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;