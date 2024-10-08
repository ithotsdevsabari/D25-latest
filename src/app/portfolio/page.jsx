"use client";
import React, { useEffect, useRef, useState } from "react";
import Cta from "../ui/Cta";
import Div from "../ui/Div";
import PageHeading from "../ui/PageHeading";
import Portfolio from "../ui/Portfolio";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "../ui/Spacing";
import { Icon } from "@iconify/react";
import { portfolioData } from "../../../utills/portfolioData";
import WhatsAppButton from "../ui/Whatsapp";


const categoryMenu = [
  {
    title: "Web Design",
    category: "web_design",
  },
  {
    title: "UI/UX Design",
    category: "ui_ux_design",
  },
  {
    title: "Mobile Apps",
    category: "mobile_apps",
  },
  {
    title: "Logo Design",
    category: "logo_design",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);
  const portfolioSectionRef = useRef(null);

  useEffect(() => {
    if (portfolioSectionRef.current) {
      portfolioSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
    <WhatsAppButton/>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      
      <div ref={portfolioSectionRef}>
      <Spacing lg="145" md="80" />
      <Div className="container" >
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
              } ${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
              }`}
              key={index}
            >
              <Portfolio
              id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="100" md="80" />
  
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s discuss make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      </div>
      {/* End CTA Section */}
    </>
  );
}
