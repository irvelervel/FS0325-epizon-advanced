import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { useSelector } from 'react-redux'

const BookStore = () => {
  // const [books, setBooks] = useState([])
  // questa era la variabile di stato locale dove PRIMA
  // mi salvavo i libri recuperati dalla fetch
  const [bookSelected, setBookSelected] = useState(null)

  // ora ri-dichiaro books ma sarà un array recuperato dallo store di Redux
  const books = useSelector((state) => {
    return state.book.available
  })

  // const getBooks = async () => {
  //   try {
  //     let resp = await fetch(
  //       'https://striveschool-api.herokuapp.com/food-books'
  //     )
  //     if (resp.ok) {
  //       let fetchedBooks = await resp.json()
  //       // fetchedBooks è un array di 6 libri
  //       setBooks(fetchedBooks)
  //     } else {
  //       console.log('error')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const changeBook = (book) => setBookSelected(book)
  // changeBook viene passato prima a BookList e poi anche a ogni singolo Book

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={books}
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
