import React from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './App.css';

export default function App() {
    return (
        <div className='container'>
            <div className="posts-container">
                <Posts />
            </div>
            <div className="form-container">
                <Form />
            </div>
        </div>
    )
}
