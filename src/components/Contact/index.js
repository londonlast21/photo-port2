import React from 'react'

//ContactForm function
function ContactForm() {
    // JSX
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                // name input
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea nam="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
                
            </form>
        </section>

    );
}

export default ContacctForm;