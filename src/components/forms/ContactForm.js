import React from 'react'
import { useForm, ValidationError } from "@formspree/react";

//Style
import { form, textarea, success } from '../forms/contactform.module.css'

//Components
import Button from '../button/Button';

export default function ContactForm() {

    // useState for form handler
    const [state, handleSubmit] = useForm("xlevewqq");

    return (
       
        <div> 
            <form className={ form } onSubmit={ handleSubmit } method="post" action="https://formspree.io/f/xrgjakpp">
                <input type="text" name="_gotcha" style={{ display:'none' }} />
                <div>
                    <input id="name" type="text" placeholder='Name' name='Name'/>
                </div>

                <div>
                    <input id="email" type="email" name="Email" placeholder='Your Email' required/>
                    <ValidationError prefix="Email" field="email" errors={ state.errors }/>
                </div>

                <div>
                    <input id="phone" type="text" placeholder='Phone' name='Phone Number' required/>
                </div>

                <div>
                    <select name="Regarding" required>
                        <option value="none" defaultValue disabled>Enquiring about...</option>
                        <option value="General">General</option>
                        <option value="Cuts &amp; Shaves">Cuts &amp; Shaves</option>
                        <option value="Poker Nights">Poker Nights</option>
                        <option value="Joining the Team">Joining the Team</option>
                    </select>
                </div>

                <div className={ textarea }>
                    <textarea id="message" name="Message" placeholder="Message" rows="8" required/>
                    <ValidationError prefix="Message" field="message"errors={ state.errors }/>
                </div>
                
                <Button text="Send" type="submit" disabled={ state.submitting ? 'disabled' : ''} />
                
                {state.succeeded && (
                    <div className={ success }><p>Your email has sent successfully. We'll get back to you as soon as we can!</p></div>
                )}
                </form>
        </div>
    )
}
