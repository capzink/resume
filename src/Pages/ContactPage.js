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

const [values, setValues] = useState({ firstname: "", email: "", message: "" });
const [errors, setErrors]= useState({})
const [isSubmit, setSubmit] = useState(false)


const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setValues({ ...values, [name]: value });
  console.log(values);
};

const HandleSubmit = (e) => {
  e.preventDefault();
  setErrors(validate(values));
  setSubmit(true)
  
};

useEffect(()=>{
  console.log(errors);
  if(Object.keys(errors).length === 0 && isSubmit)
  console.log(values);

},[errors])

const validate =(input)=>{
  const errors ={}
  if(!input.firstname){
    errors.firstname = 'Your Name Is Required'
  }
  if (!input.email) {
    errors.email = "Your Email Is Required";
  }
  if (!input.message) {
    errors.message = "Your Message Is Required";
  }
  return errors

}

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={HandleSubmit}>
              <p className="error">{errors.firstname}</p>
              <div className="form-field">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                />
              </div>
              <p className="error">{errors.email}</p>
              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <p className="error">{errors.message}</p>
              <div className="form-field">
                <label htmlFor="text-area">Your Message*</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="10"
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Email Carlos"} type="submit" />
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

.error {
  color:red;
  margin-top:0.5rem;
}
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
