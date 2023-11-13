import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';

export const updateCompleteStatus = (todo, checked) =>{
    todo.completed = checked;
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
