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
				form.current.reset();
				setFormAlert({ status: "Email Sent!", isVisible: true });
			})
			.catch((err) => {
				console.error(err);
				setFormAlert({
					status: "Oops... there was an error.",
					isVisible: true,
				});
			})
			.finally(() => {
				setTimeout(() => {
					setFormAlert({ status: null, isVisible: false });
				}, 2000);
			});
	};

	return { form, formAlert, sendEmail };
}

export { useEmailing };
