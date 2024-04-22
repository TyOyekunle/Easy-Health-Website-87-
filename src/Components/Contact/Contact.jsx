import React from 'react'
import './Contact.css'
import envelope_icon from '../../assets/envelope.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.svg'
import location from '../../assets/location-icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

   const onSubmit = async (event) => { //when the form is submitted, it will trigger this onsubmit function
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target); // the form data is sent

    formData.append("access_key", "44b10d58-6eb4-4144-8511-0b50b66a28f9");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) =>res.json());

    
    if (res.success) {
        console.log("Success", res);
      setResult(res.message);
      event.target.reset(); // after submission, the form is reset
     
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


    return (
        <div id='Contact' className='contact container'>
            <div className='contact-col'>
              <div className='contact-col-left'>    
                <h3> Contact Information <img src={envelope_icon} alt="" /></h3>
                <p>
                    Please complete the form  to connect with a member
                    team and we would get back to you immediately.
                </p>
                <ul>
                    <li> <img src={email} alt="" /> oyekunlefpog@gmail.com</li>
                    <li> <img src={phone}alt="" /> +234-8086133006</li>
                    <li> <img src={location} alt="" /> 2, Tech4Dev Avenue, VI, Lagos</li>
                </ul>
                </div>
            </div>
            <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label> NAME*</label>
                <input type="text" name="name" placeholder='Enter your name' 
                required />
                <label> PHONE NUMBER* </label>
                <input type="text" name='phone' placeholder='Enter your mobile number'
                required/>
                <label> SUBJECT* </label>
                <input type="text" name='subject' placeholder='Enter your message subject'
                required/>
                <label> MESSAGE*</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit</button>
            </form>
           <span>{result}</span>   {/*// we delete the sending from here to add it in the code */}
            </div>
            
        </div>
    )
}

export default Contact
