import React from "react";

const ContactList = (props) => {

  const handleDelete = () => {
    props.deleteContact(props.contact);
  };

  return (
    <div className="card">
      <div className="card-list" key={props.contact.id}>
        <div className="card-list__imgbox">{props.contact.image}</div>
        <div className="card-list__details">
          <p className="card-list__details-text">
            <strong>Name: </strong>
            {props.contact.name}
          </p>
          <p className="card-list__details-text">
            <strong>Surname: </strong>
            {props.contact.surname}
          </p>
          <p className="card-list__details-text">
            <strong>Number: </strong>
            {props.contact.number}
            <button onClick={handleDelete} className="card-delete">Delete</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;