"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Cta from "../ui/Cta";
import Div from "../ui/Div";
import PageHeading from "../ui/PageHeading";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "../ui/Spacing";

const portfolioDetails = [
  {
    id: "1",
    title: "Praise Voice",
    subtitle: "Creative",
    description1:
      'With a vision of assisting people, we started probing further and rallied all dioceses and denominations to endorse our idea. After five years of effort, they decided to undertake my vision, reaching throughout Tamil Nadu. As a result, the reality show "PRAISE VOICE" became a manifestation of this vision.',
    description2:
      "During this journey, I presented my vision to Sathiyam TV's Managing Director, Isaac Livingstone. He supported our vision by backing us and becoming our media partner, through which the show will be broadcast. This reality show contains 50 episodes and a grand finale. It starts in July and ends in December.",
    category: "Reality Show",
    location: "Tamil Nadu",
    genre: "Music",
    mediaPartner: "Sathyam TV",
    commencementDate: "July 2024",
    imgUrl: "/images/prise-voice.jpg",
  },
  {
    id: "2",
    title: " Ah..! Ahh..! Homemakers",
    subtitle: "Contest",
    description1:
      'This show explores the rich tapestry of cultural dishes and the heartfelt stories of the homemakers who create them. Set in the cozy, intimate spaces of apartment kitchens, it uncovers the origins of cherished recipes and delves into the emotions and experiences of those who find comfort and creativity in cooking.',
    description2:
      "By including family participation, each episode celebrates the healing and unifying power of home-cooked food, highlighting the love and connection that food fosters. The show amplifies the voices of individuals often overlooked, showcasing the therapeutic power of culinary traditions and the sense of togetherness they bring.",
    category: "Reality Show",
    location: "Tamil Nadu",
    genre: "Cooking",
    mediaPartner: "" || "N/A",
    commencementDate: "2024",
    imgUrl: "/images/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg",
  },
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("data");
  const portfolioDetail = portfolioDetails.find((detail) => detail.id === id);

  const portfolioDetailSection = useRef(null);
  useEffect(() => {
    if (portfolioDetailSection.current) {
      portfolioDetailSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!portfolioDetail) {
    return <p>Portfolio detail not found.</p>;
  }

  return (
    <>
      <PageHeading
        title="Portfolio Details"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="PORTFOLIO-DETAILS"
        customLink="/portfolio"
        customLinkName="Portfolio"
      />

      <div ref={portfolioDetailSection}>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Image
            src={portfolioDetail.imgUrl}
            alt="Details"
            className="cs-radius_15"
            width={1280}
            height={720}
          />
          <Spacing lg="90" md="40" />
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                title={portfolioDetail.title}
                subtitle={portfolioDetail.subtitle}
              >
                <Spacing lg="20" md="20" />
                <h2 className="cs-section_subtitle">{"Contest"}</h2>
                <Spacing lg="20" md="20" />
                <p>{portfolioDetail.description1}</p>
                <Spacing lg="10" md="10" />
                <p>{portfolioDetail.description2}</p>
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="20" md="20" />
              <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
              <Spacing lg="45" md="30" />
              <Div className="row">
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Category:
                  </h3>
                  <p className="cs-m0">{portfolioDetail.category}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Location:
                  </h3>
                  <p className="cs-m0">{portfolioDetail.location}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Genre:
                  </h3>
                  <p className="cs-m0">{portfolioDetail.genre}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Media Partner:
                  </h3>
                  <p className="cs-m0">{portfolioDetail.mediaPartner}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Commences from:
                  </h3>
                  <p className="cs-m0">{portfolioDetail.commencementDate}</p>
                  <Spacing lg="30" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </div>
    </>
  );
}

export default function PortfolioDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
