import React from "react";
import ContactItem from "../components/ContactItem";
import phone from "../images/phone.svg";
import email from "../images/emailme.svg";
import location from "../images/location.svg";
import Title from "../components/Title";

function ContactPage() {
  return (
    <div>
      <div className="c-title">
        <Title title="Contact Me" span="Contact Me" />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="ECR Location on Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.4188850916635!2d7.493655914480835!3d5.5046581960084096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042c3309977a607%3A0xbdf0153179e42eea!2sECR%20Technology%20services!5e0!3m2!1sen!2sng!4v1617118414240!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+234 8109652658"}
            text2={"+234 8055560030"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"meabout9@gmail.com"}
            text2={"ogwo.chinaza@yahoo.com"}
            title={"Email Address"}
          />
          <ContactItem
            icon={location}
            text1={"Umuahia, Nigeria"}
            text2={"Ugwueke, Nigeria"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
