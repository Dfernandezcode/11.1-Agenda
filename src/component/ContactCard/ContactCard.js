import React from "react";
import ContactList from "../ContactList/ContactList";
import "./ContactCard.css";

const ContactCard = () => {
  //example form structure
  const [contactDetail, setContactDetail] = React.useState([
    {
      image: <img src="pic-url" alt="ProfilePic"/>,
      name: "Daniel",
      surname: "Fernandez",
      number: 722280416,
      id: 1,
    },
  ]);

  console.log(contactDetail);

  //Hooking to object.
  const [newContact, setNewContact] = React.useState({
    image: "",
    name: "",
    surname: "",
    number: 0,
    id: "",
  });

  //Function to add
  const addNewContact = (event) => {
    event.preventDefault();
    console.log("prevent default refresh on button click");

    const newContactAdd = {
      ...newContact,
      id: [contactDetail.length - 1].id + 1,
    };

    setContactDetail([...contactDetail, newContactAdd]);

    setNewContact({
      image: "",
      name: "",
      surname: "",
      number: 0,
      id: "",
    });
  };

  return (
    <div className="agenda-main">
    <h1 className="agenda-main__title">My agenda</h1>
      
      <div className="card">
        {contactDetail.map((contact) => (
          <ContactList key={contact.id} contact={contact}></ContactList>
        ))}
        <button className="card-delete">Delete</button>
      </div>

      <div className="add-contact">
        <form className="add-contact__form"
        onSubmit={(event) => {
          addNewContact(event);
        }}>
          <p>
            <label className="add-contact__field-label">Name: </label>
            <input
              className="add-contact__field-input"
              type="text"
              value={newContact.name}
            />
          </p>
          <p>
            <label className="add-contact__field-input">Surname: </label>
            <input
              className="add-contact__field-input"
              type="text"
              value={newContact.surname}
            />
          </p>
          <p>
            <label className="add-contact__field-input">Number: </label>
            <input
              className="add-contact__field-input"
              type="number"
              value={newContact.number}
            />
          </p>
          {/* <p>
            <label className="add-contact__field-input">Image URL: </label>
            <input
              className="add-contact__field-input"
              type="image"
              value={newContact.image}
            />
          </p> */}
        </form>
        <button className="add-contact__btn" type="submit">
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
