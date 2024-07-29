'use client';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Div from "../ui/Div";
import PageHeading from "../ui/PageHeading";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "../ui/Spacing";
import ContactInfoWidget from "../ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    mobile: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseMessage('Email sending');
    emailjs.sendForm('service_psf30kl', 'template_75gm8as', formRef.current, 'ybNgoPJNv9POIoBgF')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResponseMessage('Email sent successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        setResponseMessage('Failed to send email.');
      });

    setFormData({
      name: '',
      email: '',
      project: '',
      mobile: '',
      message: '',
    });
  };

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage('');
      }, 5000); // Clear the message after 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [responseMessage]);

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form ref={formRef} onSubmit={handleSubmit} className="row">
              <Div className="col-sm-6">
                <label htmlFor="fname" className="cs-primary_color">Full Name <span className="text-danger">*</span></label>
                <input id="fname" type="text" name="name" className="cs-form_field" value={formData.name} onChange={handleChange} required />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="email" className="cs-primary_color">Email <span className="text-danger">*</span></label>
                <input id="email" type="email" name="email" className="cs-form_field" value={formData.email} onChange={handleChange} required />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="project" className="cs-primary_color">Project Type <span className="text-danger">*</span></label>
                <input id="project" type="text" name="project" className="cs-form_field" value={formData.project} onChange={handleChange} required />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="mobile" className="cs-primary_color">Mobile <span className="text-danger">*</span></label>
                <input id="mobile" type="text" name="mobile" className="cs-form_field" value={formData.mobile} onChange={handleChange} required />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label htmlFor="message" className="cs-primary_color">Message <span className="text-danger">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
            {responseMessage && <p className="mt-5" >{responseMessage}</p>}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62177.9004022892!2d80.19006650851568!3d13.091658191723242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ba6a5b52cb%3A0x1446c99f56af2c68!2sClean%20Taste!5e0!3m2!1sen!2sin!4v1718795873513!5m2!1sen!2sin"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
