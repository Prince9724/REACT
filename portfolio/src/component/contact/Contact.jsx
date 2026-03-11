
import React from 'react'
import "../contact/Contact.css"
const Contact = () => {
    return (
        <div className='contact-box container-fluid'>
            <div className="conatainer mt-5">
                <h3 className='text-center'>Contact</h3>
                <div className=' d-flex justify-content-end'>
                    <div
                        action="https://formspree.io/f/{FORM_ID}"
                        className="fs-form w-50 me-5"
                        target="_top"
                        method="POST"
                    >
                        <div className="fs-field">
                            <label className="fs-label" htmlFor="name">Your Name</label>
                            <input className="fs-input" id="name" name="name" required />
                        </div>

                        <div className="fs-field">
                            <label className="fs-label" htmlFor="email">Email</label>
                            <input className="fs-input" id="email" name="email" required />
                            <p className="fs-description">
                                This will help me respond to your query via an email.
                            </p>
                        </div>

                        <div className="fs-field">
                            <label className="fs-label" htmlFor="message">Message</label>
                            <textarea
                                className="fs-textarea"
                                id="message"
                                name="message"
                                required
                            ></textarea>
                            <p className="fs-description">
                                What would you like to discuss?
                            </p>
                        </div>

                        <div className="fs-button-group">
                            <button className="fs-button" type="submit">Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact