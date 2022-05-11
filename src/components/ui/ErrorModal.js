import React from 'react';
import Card from "./Card.js";
import Button from "./Button.js";
import "./ErrorModal.css";

const ErrorModal = props => {
    return (
        <div>
            <div className="backdrop" />
            <div className="modal">
                <Card>
                    <header className="header">
                        <h2>{props.title}</h2>
                    </header>
                    <div className="content">
                        <p>{props.message}</p>
                    </div>
                    <footer className="actions">
                        <Button>Click</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
};

export default ErrorModal;