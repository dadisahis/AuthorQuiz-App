import React from "react";
import "./AddAuthorForm.css"

class AuthorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBooks=this.handleAddBooks.bind(this);
    }
    handleAddBooks(event){
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }
    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return (
            <form>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm__input">
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <label htmlFor="bookTemp">Books</label>
                    <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
                    <input type="button" value="+" onClick={this.handleAddBooks} />
                </div>
                <input type="submit" value="Add" onClick={this.handleSubmit}/>
            </form>

        )
    }
}

function AddAuthorForm({match,onAddAuthor}){
    return (
     <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm onAddAuthor={onAddAuthor}/>
        
    </div>
    )
  }

export default AddAuthorForm;