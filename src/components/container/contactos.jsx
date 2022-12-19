import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contacto";

const Contactos = () => {
  const defaultContact = new Contact(
    "Diego",
    "Graffigna",
    "diegograffigna1@gmail.com",
    true
  );

  return (
    <div>
      <h1>Tus contactos</h1>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default Contactos;
