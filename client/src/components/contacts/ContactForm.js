import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const INITIAL_STATE = {
  name: '',
  nickname: '',
  company: '',
  birthdate: '',
  address: '',
  email: '',
  phone: '',
  type: 'personal'
};

const ContactForm = ({ setShowFormModal }) => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact(INITIAL_STATE);
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState(INITIAL_STATE);

  const { name, nickname, company, birthdate, address, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
    setShowFormModal(false);
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />  
      <input
        type='text'
        placeholder='Nickname'
        name='nickname'
        value={nickname}
        onChange={onChange}
      />  
      <input
        type='text'
        placeholder='Company'
        name='company'
        value={company}
        onChange={onChange}
      />  
      <input
        type='date'
        placeholder='Birthdate'
        name='birthdate'
        value={birthdate}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Address'
        name='address'
        value={address}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h3 style={{ textAlign: 'left' }}>Contact Type</h3>
      <input
        type='radio'
        name='type'
        id='personal'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      <label htmlFor='personal'>Personal</label>{' '}
      <input
        type='radio'
        name='type'
        id='professional'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      <label htmlFor='professional'>Professional</label>
      <div>
        <input
          disabled={!name}
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      <div>
        <button className='btn btn-danger btn-block' type='button' onClick={() => setShowFormModal(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
