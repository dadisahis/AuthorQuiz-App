import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

function Continue({show,onContinue}){
  return (
  <div className='row continue'>
    {
      show ? <div className='col-11 offset-10'>
          <button className='btn btn-primary btn-lg float-roght' onClick={onContinue}>Continue</button>
      </div>
    : null }
  </div>)
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

function AuthorQuiz({turnData,highlight,onAnswerSelected,onContinue}) {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight}  onAnswerSelected={onAnswerSelected}/>
        <p className='col-11 offset-1'><Link to="/addAuthor">Add an author</Link></p>
        <Continue show={highlight==='correct'} onContinue={onContinue} />
        <Footer />
      </div>
    );
}

export default AuthorQuiz;
