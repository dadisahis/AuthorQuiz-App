import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reportWebVitals from './reportWebVitals';

const author = [
  {
    name:"Mark Twain",
    imageUrl: "images/authors/markTwain.jpg",
    imageSource: "Wikipedia Commons",
    books: ['The Adventures of huckleberry fin']
  }
]

const state = {
  turnData : {
    authors: author[0],
    books: author[0].books
  }
}

ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz {...state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
