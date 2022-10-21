import React, { useRef } from 'react'
import './Join.css'
import emailjs from "emailjs-com";
import { message } from "antd";
import 'antd/lib/message/style/index.css';


const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          "service_cdgo4p2",
          "template_4v8t30v",
          form.current,
          "W9AS5xSJ57ej-IboN"
        );
    
        e.target.reset();
        message.success("Message has been sent");
    
      };
  return (
    <div className='Join' id='join-us'>
        <div className="Join-left">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="Join-right">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email'/>
                <button className='btn Join-btn'>Join us</button>
            </form>
        </div>
    </div>
  )
}

export default Join