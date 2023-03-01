import React from "react";
import ContactList from "../ContactList/ContactList";
import "./ContactCard.css";

const ContactCard = () => {
  //example form structure
  const [contactDetail, setContactDetail] = React.useState([
    {
      image: (
        <img
          className="card-list__imgbox-img"
          src="https://media.licdn.com/dms/image/C5103AQECRnzMVdGTtQ/profile-displayphoto-shrink_800_800/0/1556945828215?e=1683158400&v=beta&t=ShGaaPzOeuLYhcQDxYJWZuYr3TwbvsFlrUgFFBLgods"
          alt="ProfilePic"
        />
      ),
      name: "Daniel",
      surname: "Fernandez",
      number: 722280416,
      id: 1,
    },
  ]);

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

  //delete button



  return (
    <div className="agenda-main">
      <h1 className="agenda-main__title">My agenda</h1>
        {contactDetail.map((contact) => (
          <ContactList key={contact.id} contact={contact}></ContactList>
        ))}


{/*AddContact*/}
      <div className="add-contact">
        <form
          className="add-contact__form"
          onSubmit={(event) => {
            addNewContact(event);
          }}
        >
          <p>
            <label className="add-contact__field-label">Name: </label>
            <input
              className="add-contact__field-input"
              name="name"
              id="name"
              type="text"
              value={newContact.name}
              onChange={(event) =>
                setNewContact({
                  ...newContact,
                  name: event.target.value,
                })
              }
            />
          </p>
          <p>
            <label className="add-contact__field-input">Surname: </label>
            <input
              className="add-contact__field-input"
              name="surname"
              id="surname"
              type="text"
              value={newContact.surname}
              onChange={(event) =>
                setNewContact({
                  ...newContact,
                  surname: event.target.value,
                })
              }
            />
          </p>
          <p>
            <label className="add-contact__field-input">Number: </label>
            <input
              className="add-contact__field-input"
              name="number"
              id="number"
              type="number"
              value={newContact.number}
              onChange={(event) =>
                setNewContact({
                  ...newContact,
                  number: event.target.value,
                })
              }
            />
          </p>
          {/* <p>
            <label className="add-contact__field-input">Image URL: </label>
            <input
              className="add-contact__field-input"
              type="image"
              value={newContact.image}
               onChange={(event) =>
                setNewContact({
                ...newContact,
                number: event.target.value,
                })}/>
          </p> */}
          <button className="add-contact__btn" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
