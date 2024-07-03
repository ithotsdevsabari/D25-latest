"use client";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

export default function HireForm() {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("bootstrap/dist/js/bootstrap.bundle.min")
  //       .then(() => {
  //         // Initialize Bootstrap's dropdown
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, []);

  return (
    <>
      {/* <Spacing lg="150" md="80" /> */}
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
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label for="fname" className="cs-primary_color">Full Name <span className="text-danger">*</span></label>
                <input type="text" id="fname" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="email" className="cs-primary_color">Email <span className="text-danger">*</span></label>
                <input type="text" id="email" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="mobile" className="cs-primary_color">Mobile <span className="text-danger">*</span></label>
                <input type="text" id="mobile" className="cs-form_field" />

                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                {/* drop down button */}

                <label for="position" className="cs-primary_color">Open Positions <span className="text-danger">*</span></label>
                {/* <select id="position" className=" form-select" aria-label="Open Positions"> */}
                <select id="position" className="cs-form_fields" aria-label="Open Positions">
                  <optgroup label="Media Production & entertainments">
                    <option value="graphic-designers">Graphic Designers</option>
                    <option value="show-producer">
                      Show Producer - Events & Promotions
                    </option>
                    <option value="visual-editors">Visual Editors</option>
                    <option value="cinematographer">Cinematographer</option>
                    <option value="post-production-executive">
                      Post production Executive
                    </option>
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
                    <option value="admin-operation-manager">
                      Admin / Operation manager
                    </option>
                    <option value="system-admin">System Admin</option>
                  </optgroup>
                  <option value="internship-programs">
                    Internship Programs
                  </option>
                  <optgroup label="Facility Management service / Hospitality">
                    <option value="business-logistics-process-manager">
                      Business logistics Process manager
                    </option>
                    <option value="guest-service-handling">
                      Guest Service & handling
                    </option>
                  </optgroup>
                </select>

                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="status" className="cs-primary_color">Employment Status <span className="text-danger">*</span></label>
                <Div className="d-flex gap-5 mt-lg-3">
                  <Div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="employment-type"
                      id="full-time"
                    />
                    <label className="cs-primary_color ms-2" for="full-time">
                      Full-Time
                    </label>
                  </Div>
                  <Div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="employment-type"
                      id="freelance"
                    />
                    <label className="cs-primary_color ms-2" for="freelance">
                      Freelance
                    </label>
                  </Div>
                </Div>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label for="upload" className="cs-primary_color">File Upload <span className="text-danger">*</span></label>
                <input type="file" id="upload" className="cs-form_field" />
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
                  <span>Submit</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="80" md="50" />
      {/* <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div> */}
      {/* <Spacing lg="50" md="40" /> */} 
    </>
  );
}
