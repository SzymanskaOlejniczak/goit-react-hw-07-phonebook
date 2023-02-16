import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import {getIsLoadingStatus, getErrorStatus } from "redux/selectors"
import { ContactList } from '../ContactList/ContactList';
import style from './App.module.css';

export const App=()=> {
  const isLoading = useSelector(getIsLoadingStatus);
  const error = useSelector(getErrorStatus);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div className={style.form}>
        <h1>Phonebook</h1>
        <ContactForm  />
        <h2>Contacts</h2>
        <Filter  />
        {isLoading && !error ? <p>Loading...</p> : <ContactList />}
      
      </div>
    );
  }



