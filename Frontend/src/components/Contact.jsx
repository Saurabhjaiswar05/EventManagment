import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while sending the message.");
      }
    }
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Mumbai,Maharashtra</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>Call Us:9967672613</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>sjsaurabh02@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160992302!2d72.74109714139554!3d19.082197839964742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63bf06fb1a1%3A0xaed1ffb273b5a35d!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1624891159125!5m2!1sen!2sus"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button style={{cursor:"pointer"}} type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
