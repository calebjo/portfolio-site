import React from "react"

export default class ContactSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="contact__container">
                <div className="contact__form-header">
                    Get in touch
                </div>
                <div className="contact__form">
                    <div className="contact__form-wrapper">
                        <ContactForm />
                    </div>
                    <div className="contact__form-socials">
                        <a href="https://www.linkedin.com/in/caleb-jones-928521126/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/calebjo" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://angel.co/u/caleb-jones-15" target="_blank" rel="noreferrer">AngelList</a>
                    </div>
                </div>
            </div>
        )
    }
}

import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkylkve");
  if (state.succeeded) {
      return <p>Thanks for the message!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Your email:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Your message:
      </label>
      <textarea
        id="message"
        name="message"
        style={{resize: "none"}}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}