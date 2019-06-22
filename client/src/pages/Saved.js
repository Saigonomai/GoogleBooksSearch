import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    .then(res =>
      this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
      return (
      <Container fluid>
        <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h4>Search for and Save Books of Interest</h4>
        </Jumbotron>
              <List>
                {this.state.books.map(book => (
                  <ListItem
                  key={book._id}
                  id={book._id}
                  link={book.link}
                  title={book.title}
                  authors={book.author.join(", ")}
                  description={book.description}
                  image={book.image}
                  button={false}
                  onClick={this.deleteBook}/>
                ))}
              </List>
      </Container>
    );
  }
}

export default Saved;
