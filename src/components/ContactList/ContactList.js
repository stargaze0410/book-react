import React from "react";
import {Button, Card} from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {props.contacts.map((item, index) => (
                <Card style={{width: "15rem", margin: "10px"}}>
                    <Card.Img src={item.photo} alt={item.name} className="imgContact"/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.lastName}</Card.Text>
                        <Button
                            variant="danger"
                            onClick={() => props.handleDeleteContact(item.id)}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="warning"
                            margin="5px"
                            onClick={() => props.handleEditIndex(index)}
                        >
                            Edit
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ContactList;