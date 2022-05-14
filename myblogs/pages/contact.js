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
                    <label for="exampleInputEmail1" class="form-label">Phone no.</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class={styles.inputs}>
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class={styles.inputs}>
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact