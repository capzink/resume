import { useState, useEffect } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import emailjs from "emailjs-com";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const initialValues = { name: "", user_email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
     const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
};

  const SendEmail = (e) => {
    e.preventDefault();
     setFormErrors(validate(formValues));
     setIsSubmit(true);
 
  };

  useEffect(() => {
    
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.username = "Username is required!";
    }
    if (!values.user_email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.user_email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required";

    } 
    return errors;
  };

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={SendEmail}>
              <div className="form-field">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.name}</p>
              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formValues.user_email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Your Message*</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="10"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+57 310 776 9911"}
              cont2={"+1 424 603 1394"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"capz2003@gmail.com"}
              cont2={"capz2003@hotmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={""}
              cont2={"Bogota, Colombia"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
