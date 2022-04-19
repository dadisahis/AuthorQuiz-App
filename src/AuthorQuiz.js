import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

function Hero(){
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p> Select the book written by author shown </p>
      </div>
    </div>
  )
}
function Book({title,onClick}) {
  return (<div className="answer" onClick={() => onClick(title)}>
    <h4>{title}</h4>
  </div>)
}

function Turn({authors,books,highlight,onAnswerSelected}){
  console.log(highlight)
  function getBGfromHighlight(highlight){
    const mapping = {
      'none':'',
      'correct':'green',
      'wrong': 'red'
    }
    return mapping[highlight];
  }

  return (
    <div className="row turn" style={{backgroundColor: getBGfromHighlight(highlight)}}>
      <div className="col-4 offset-1">
        <img src={authors.imageUrl} className="authorImage" alt="Author"/>
      </div>
      <div className="col-5">
        {books.map((title) => <Book title={title}  key={title} onClick={onAnswerSelected} />)}
      </div>

    </div>
  )
}

Turn.propTypes= {
  authors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}

function Continue(){
  return (<div/>)
}

function Footer(){
  return (
    <div id="footer" className="row" >
      <div className="col-12 offset-1">
        <p className="text-muted credit">All images are from Wikipedia</p>
      </div>
    </div>
  )
}

function AuthorQuiz({turnData,highlight,onAnswerSelected}) {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight}  onAnswerSelected={onAnswerSelected}/>
        <Continue />
        <Footer />
      </div>
    );
}

export default AuthorQuiz;
