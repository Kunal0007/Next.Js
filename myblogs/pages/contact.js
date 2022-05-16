import React from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.main}>
            <h1>Contact</h1>
            <form>
                <div class={styles.inputs}>
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                    <label for="exampleInputEmail1" class="form-label">Phone No.</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='PhoneNo' />
                </div>
                <div class={styles.inputs}>
                    <label for="exampleInputEmail1" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                </div>
                <div class={styles.inputs}>
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows="15" cols="50" placeholder='Message' />
                </div>
                <div className={styles.submitbtn}>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact