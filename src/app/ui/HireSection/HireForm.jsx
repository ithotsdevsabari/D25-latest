"use client";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";
import axios from 'axios';
import { useState } from 'react';
import WhatsAppButton from "../Whatsapp";

export default function HireForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    position: '',
    employmentType: '',
    upload: null,
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, upload: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('Sending mail, please wait...');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('mobile', formData.mobile);
    data.append('position', formData.position);
    data.append('employmentType', formData.employmentType);
    data.append('message', formData.message);
    if (formData.upload) {
      data.append('upload', formData.upload);
    }

    axios.post("https://d25-smtp-server-3.onrender.com/", data)
      .then((response) => {
        setStatusMessage('Email sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          position: '',
          employmentType: '',
          upload: null,
          message: '',
        });
      })
      .catch((error) => {
        setStatusMessage('Failed to send email. Please try again.');
      })
      .finally(() => {
        setTimeout(() => {
          setStatusMessage('');
        }, 5000); // Clear status message after 5 seconds
      });
  };

  return (
    <>
      <WhatsAppButton />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Unleash your skills, freelance at will, to <br/> uplift with us"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit} className="row">
              <Div className="col-sm-6">
                <label htmlFor="fullName" className="cs-primary_color">Full Name <span className="text-danger">*</span></label>
                <input type="text" id="fullName" className="cs-form_field" value={formData.fullName} onChange={handleInputChange} required/>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="email" className="cs-primary_color">Email <span className="text-danger">*</span></label>
                <input type="email" id="email" className="cs-form_field" value={formData.email} onChange={handleInputChange} required/>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="mobile" className="cs-primary_color">Mobile <span className="text-danger">*</span></label>
                <input type="text" id="mobile" className="cs-form_field" value={formData.mobile} onChange={handleInputChange} required/>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="position" className="cs-primary_color">Open Positions <span className="text-danger">*</span></label>
                <select id="position" className="cs-form_fields" aria-label="Open Positions" value={formData.position} onChange={handleInputChange} required>
                  <optgroup label="Media Production & entertainments">
                    <option value="graphic-designers">Graphic Designers</option>
                    <option value="show-producer">Show Producer - Events & Promotions</option>
                    <option value="visual-editors">Visual Editors</option>
                    <option value="cinematographer">Cinematographer</option>
                    <option value="post-production-executive">Post production Executive</option>
                  </optgroup>
                  <optgroup label="Content / editorial and journalism">
                    <option value="content-writer">Content writer</option>
                    <option value="visual-content">Visual content</option>
                  </optgroup>
                  <optgroup label="Social Media Management">
                    <option value="admin">Admin</option>
                    <option value="meme-creators">Meme creators</option>
                  </optgroup>
                  <optgroup label="Account & Finance">
                    <option value="front-office">Front office</option>
                    <option value="admin-operation-manager">Admin / Operation manager</option>
                    <option value="system-admin">System Admin</option>
                  </optgroup>
                  <option value="internship-programs">Internship Programs</option>
                  <optgroup label="Facility Management service / Hospitality">
                    <option value="business-logistics-process-manager">Business logistics Process manager</option>
                    <option value="guest-service-handling">Guest Service & handling</option>
                  </optgroup>
                </select>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="employmentType" className="cs-primary_color">Employment Status <span className="text-danger">*</span></label>
                <Div className="d-flex gap-5 mt-lg-3">
                  <Div>
                    <input className="form-check-input" type="radio" name="employmentType" id="full-time" value="Full-Time" onChange={handleInputChange} />
                    <label className="cs-primary_color ms-2" htmlFor="full-time">Full-Time</label>
                  </Div>
                  <Div>
                    <input className="form-check-input" type="radio" name="employmentType" id="freelance" value="Freelance" onChange={handleInputChange} />
                    <label className="cs-primary_color ms-2" htmlFor="freelance">Freelance</label>
                  </Div>
                </Div>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label htmlFor="upload" className="cs-primary_color">File Upload <span className="text-danger">*</span></label>
                <input type="file" id="upload" className="cs-form_field" onChange={handleInputChange} required/>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label htmlFor="message" className="cs-primary_color">Message <span className="text-danger">*</span></label>
                <textarea id="message" cols="30" rows="7" className="cs-form_field" value={formData.message} onChange={handleInputChange} required></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Submit</span>
                  <Icon icon="bi:arrow-right" />
                </button>
                {statusMessage && <p className="mt-2">{statusMessage}</p>}
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="80" md="50" />
    </>
  );
}
