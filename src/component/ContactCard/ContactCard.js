import React from "react";
import "./ContactCard.css";

const ContactCard = () => {
  const [contactDetail, setContactDetail] = React.useState([
    {
      image: <img src="pic-url" alt="ProfilePic" />,
      name: "Daniel", 
      number: 123456789,
      id: 1,
    },
  ]);

  return (
    <div className="card">
        <h2>My Agenda</h2>
            {contactDetail.map((contact) => {
                <
            })}
      <img alt="Avatar" src="" />
      <p className="card-detail"></p>
      <p className="card-detail">number</p>
      <button>Eliminar</button>
    </div>
  );
};

export default ContactCard;
