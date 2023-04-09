import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function useEmailing() {
	const form = useRef(null);
	const [formAlert, setFormAlert] = useState({
		status: null,
		isVisible: false,
	});

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_fbn1m8j",
				"template_o7fwdnu",
				form.current,
				"St5iv4lgJlmyZvCCN"
			)
			.then(() => {
				setFormAlert({ status: "Email Sent!", isVisible: true });
			})
			.catch((err) => {
				console.error(err);
				setFormAlert({ status: "Error", isVisible: true });
			})
			.finally(() => {
				form.current.reset();
				setTimeout(() => {
					setFormAlert({ ...formAlert, isVisible: false });
				}, 2000);
			});
	};

	return { form, formAlert, sendEmail };
}

export { useEmailing };
