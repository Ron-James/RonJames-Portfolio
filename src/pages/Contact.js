import React, { Component } from 'react'
import Header from '../components/Header'
import Media from '../components/Media'
import '../styles/Contact.css'
export default class Contact extends Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <div>
                <Header headline="Contact" />
                <p className='contact'>For direct queries, please email me at jajotheron@gmail.com</p>
                <Media/>
            </div>
        )
    }
}
