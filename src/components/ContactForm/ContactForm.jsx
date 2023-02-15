
import { getContacts } from 'redux/selectors';
import { addContacts } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { FcContacts } from 'react-icons/fc';
import style from './ContactForm.module.css';

export const ContactForm = () => {
	const contacts = useSelector(getContacts);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		let nameOntheList = false;
		const form = e.target;
		const name = form.name.value;
		const number = form.number.value;
		const toLowerCase = name.toLowerCase();

		const newContact = {
			name: name,
			number: number,
		};

		contacts.forEach(({ name }) => {
			if (name.toLowerCase() === toLowerCase) {
				alert(`${name} is already in contacts`);
				nameOntheList = true;
			}
		});

		if (nameOntheList) return;

		dispatch(addContacts(newContact));
		form.reset();
	};

  
    return (
      <form className={style.submit} onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="name"
            required
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number"
            required
          />
        </label>
        <button
          className={style.btn}
          type="submit"
          
        >
          <span>Add contact</span> <FcContacts />
        </button>
      </form>
    );
}



