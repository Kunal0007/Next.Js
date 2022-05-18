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
        const data = {name, email, phone, message};
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
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        })
    }

    return (
        <div className={styles.main}>
            <h1>Contact</h1>
            <form>
                <div className={styles.inputs}>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={name} id="name" name='name' aria-describedby="emailHelp" placeholder='Name' />
                    <label htmlFor="phone" className="form-label">Phone No.</label>
                    <input type="phone" className="form-control" onChange={handleChange} value={phone} id="phone" name='phone' aria-describedby="emailHelp" placeholder='PhoneNo' />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" onChange={handleChange} value={email} id="email" name='email' aria-describedby="emailHelp" placeholder='Email' />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="msg" className="form-label">Description</label>
                    <textarea type="text" className="form-control" onChange={handleChange} value={message} id="msg" name='message' aria-describedby="emailHelp" rows="13" cols="50" placeholder='Message' />
                </div>
                <div className={styles.submitbtn}>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact