import React from 'react';
import {Jumbotron} from "react-bootstrap";


class Welcome extends React.Component {
    render() {
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Welcome to Book Shop Demo</h1>
                <blockquote className="blockquote mb-0">
                    <p>
                        Never confuse movement with action.
                    </p>
                    <footer className="blockquote-footer">
                        Ernest Hemingway
                    </footer>
                </blockquote>
            </Jumbotron>
        );
    }


}

export default Welcome;

