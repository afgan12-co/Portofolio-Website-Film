import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button  } from "react-bootstrap"


const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const allMovies = [
    { id: 1, title: "Dune", imageUrl: "../assets/images/Trending/dune.jpg", detailUrl: "/film/dune" },
    { id: 2, title: "Everything Everywhere All At Once", imageUrl: "../assets/images/Trending/everything.jpg", detailUrl: "/film/everything" },
    { id: 3, title: "Infinite", imageUrl: "../assets/images/Trending/infinite.jpg", detailUrl: "/film/infinite" },
    { id: 4, title: "Joker", imageUrl: "../assets/images/Trending/joker.jpg", detailUrl: "/film/joker" },
    { id: 5, title: "Lightyear", imageUrl: "../assets/images/Trending/lightyear.jpg", detailUrl: "/film/lightyear" },
    { id: 6, title: "Morbius", imageUrl: "../assets/images/Trending/morbius.jpg", detailUrl: "/film/morbius" },
    { id: 7, title: "Ant-Man", imageUrl: "../assets/images/Superhero/antman.jpg", detailUrl: "/film/antman" },
    { id: 8, title: "Avengers", imageUrl: "../assets/images/Superhero/avengers.jpg", detailUrl: "/film/avengers" },
    { id: 9, title: "Batman", imageUrl: "../assets/images/Superhero/batman.jpg", detailUrl: "/film/batman" },
    { id: 10, title: "Robin Hood", imageUrl: "../assets/images/Superhero/robinhood.jpg", detailUrl: "/film/robinhood" }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="#series">SERIES</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Cari Film"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-light" type="submit">Cari</Button>
          </Form>
        </Container>
      </Navbar>
      <div>
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <a href={movie.detailUrl}>Lihat Detail</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavigationBar;

