import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Container, Row, Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Book from "./components/Book"
import BookList from "./components/BookList";



export default function App() {

    const marginTop = {marginTop: "20px"};



    return (
        <div className="App">
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Welcome/>
                        <Book/>
                        <BookList/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
            </div>
                );


        }



