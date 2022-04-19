import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import {shuffle, sample} from 'underscore';
import reportWebVitals from './reportWebVitals';

const authors = [
  {
    name:"Mark Twain",
    imageUrl: "images/authors/markTwain.jpg",
    imageSource: "Wikipedia Commons",
    books: [
      'The Adventures of huckleberry fin',
      'Life on the Mississipi',
      'Roughing It'
    ]
  },
  {
    name:"Rabindranath Tagore",
    imageUrl: "images/authors/rabindranathTagore.jpg",
    imageSource: "Wikipedia Commons",
    books: [
      'Geetanjali',
      'Kabulivala'
    ]
  },
  {
    name:"J.K Rowling",
    imageUrl: "images/authors/jkRowling.jpg",
    imageSource: "Wikipedia Commons",
    books: [
      "Harry Potter and the Philosopher's Stone ",
      "Fantastic Beasts and Where to Find Them "
    ]
  },
  {
    name:"Stephen King",
    imageUrl: "images/authors/stevenKing.jpg",
    imageSource: "Wikipedia Commons",
    books: [
      'Doctor Sleep',
      'It',
    ]
  }
]

function getTurnData(authors){
  const allBooks = authors.reduce(function (p,c,i){
    return p.concat(c.books)
  } , []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    authors: authors.find((author) =>
      author.books.some((title) =>
        title===answer
      )
    )
  }
}

const state = {
  turnData : getTurnData(authors),
  highlight: ''
}
function onAnswerSelected(answer){
  console.log(answer);
  const isCorrect = state.turnData.authors.books.some((book) => book===answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
