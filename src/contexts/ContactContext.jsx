import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

const contactContext = createContext();

export const useContactContext = () => useContext(contactContext);

const ContactContext = ({ children }) => {
	const [contacts, setContacts] = useState([]);

	async function getContacts() {
		const { data } = await axios.get(API);
		setContacts(data);
	}

	async function deleteContact(id) {
		await axios.delete(`${API}/${id}`);
		getContacts();
	}

	const value = {
		contacts,
		getContacts,
		deleteContact,
	};
	return (
		<contactContext.Provider value={value}>{children}</contactContext.Provider>
	);
};

export default ContactContext;
