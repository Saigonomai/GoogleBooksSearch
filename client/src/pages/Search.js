import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    query: ""
  };

  bookSave = (title, author, description, image, link) => {
    API.saveBook({
      title: title,
      author: author,
      description: description,
      image: image,
      link: link
    })
  }

  search = () => {
    API.search(this.state.query)
      .then(res =>
        this.setState({ books: res.data.items.slice(0,5)})
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
    this.search();
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h4>Search for and Save Books of Interest</h4>
        </Jumbotron>
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Search Google books"
              />
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                search
              </FormBtn>
            </form>
              <List>
                {this.state.books.map(book => (
                  <ListItem
                  key={book.id}
                  link={book.volumeInfo.previewLink}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  authors={book.volumeInfo.authors.join(", ")}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  button={true}
                  onClick={this.bookSave}/>
                ))}
              </List>
      </Container>
    );
  }
}

export default Search;
