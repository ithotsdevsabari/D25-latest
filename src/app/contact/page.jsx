'use client'
import Div from "../ui/Div";
import PageHeading from "../ui/PageHeading";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "../ui/Spacing";
import ContactInfoWidget from "../ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";

export default function ContactPage() {
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
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label for="fname" className="cs-primary_color">Full Name <span className="text-danger">*</span></label>
                <input id="fname" type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="email" className="cs-primary_color">Email <span className="text-danger">*</span></label>
                <input type="text" id="email" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="project" className="cs-primary_color">Project Type <span className="text-danger">*</span></label>
                <input type="text" id="project" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="mobile" className="cs-primary_color">Mobile <span className="text-danger">*</span></label>
                <input type="text" id="mobile" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label for="message" className="cs-primary_color">Message <span className="text-danger">*</span></label>
                <textarea
                id="message"
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62177.9004022892!2d80.19006650851568!3d13.091658191723242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ba6a5b52cb%3A0x1446c99f56af2c68!2sClean%20Taste!5e0!3m2!1sen!2sin!4v1718795873513!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}


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
