
import React, { Component } from 'react';
import './Form.css';



class Form extends Component {


  render() {
   
      return(

        <form
           action="https://formspree.io/thespacebetween20@gmail.com"
           method="POST"
           id="contact-form">
           <input type="hidden" name="_next" value="/thanks" />
  <div className="inputGroup">
    <input autocomplete="off" readonly onfocus="this.removeAttribute('readonly');" id="name" name="user_name" type="text" required ></input>
    <span className="inputBar"></span>
    <label>Name</label>
  </div>

  <div className="inputGroup">
    <input autocomplete="off" readonly onfocus="this.removeAttribute('readonly');" id="email" name="_replyto" type="email" required ></input>
    <span className="inputBar"></span>
    <label>Email</label>
  </div>

  <div className="inputGroup">
    <textarea autocomplete="off" readonly onfocus="this.removeAttribute('readonly');" id="textarea" name="message" type="textarea" required></textarea>
    <span className="inputBar"></span>
    <label>Message</label>
  </div>

  <input  className="submit" type="submit" id="submit"   value="SUBMIT"/>
    </form>

    );
    }
}
export default Form;