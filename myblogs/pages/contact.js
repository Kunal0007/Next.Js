import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone, message);
        const data = { name, email, phone, message };
        fetch('http://localhost:3000/api/postContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(data => {
                console.log('Success:', data);
                window.alert('Your message has been sent successfully');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            })
    }

    return (
        <div className={styles.main}>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={name} id="name" name='name' placeholder='Name' required />
                    <label htmlFor="phone" className="form-label">Phone No.</label>
                    <input type="phone" className="form-control" onChange={handleChange} value={phone} id="phone" name='phone' placeholder='PhoneNo' required />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" onChange={handleChange} value={email} id="email" name='email' placeholder='Email' required />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="msg" className="form-label">Description</label>
                    <textarea type="text" className="form-control" onChange={handleChange} value={message} id="msg" name='message' rows="13" cols="50" placeholder='Message' required />
                </div>
                <div className={styles.submitbtn}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact