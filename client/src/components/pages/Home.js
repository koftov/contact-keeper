import React, { useState } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  const [showFormModal, setShowFormModal] = useState(false)

  return (
    <div>
      <div className='contact-form-wrapper' style={{ display: showFormModal ? 'block' : 'none' }}>
        <ContactForm setShowFormModal={setShowFormModal} />
      </div>
      <div>
        <ContactFilter />
        <Contacts setShowFormModal={setShowFormModal} />
        <button className='btn btn-primary btn-block' onClick={() => setShowFormModal(true)}>Add Contatct</button>
      </div>
    </div>
  );
};

export default Home;
