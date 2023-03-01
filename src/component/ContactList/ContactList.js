const ContactList = (props) => {
  return (
    <div className="card-list" key={props.contact.id}>
      <div className="card-list__img">
      {props.contact.image}
      </div>
      <div className="card-list__details">
        <p>{props.contact.name}</p>
        <p>{props.contact.surname}</p>
        <p>{props.contact.number}</p>
      </div>
    </div>
  );
};

export default ContactList;
