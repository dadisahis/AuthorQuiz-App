import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import image from "./authors/markTwain.jpg"

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
function Book({title}) {
  return (<div className="answer">
    <h4>{title}</h4>
  </div>)
}

function Turn({authors,books}){
  return (
    <div className="row Turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={authors.imageUrl} className="authorImage" alt="Author"/>
      </div>
      <div className="col-5">
        {books.map((title) => <Book title={title}  key={title} />)}
      </div>

    </div>
  )
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

function AuthorQuiz({turnData}) {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData}/>
        <Continue />
        <Footer />
      </div>
    );
}

export default AuthorQuiz;
