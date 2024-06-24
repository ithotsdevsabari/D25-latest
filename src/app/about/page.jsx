"use client";
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from "../../../public/images/about_img_1.jpeg";
import aboutImg2 from "../../../public/images/about_img_2.jpeg";
import aboutImg3 from "../../../public/images/about_img_3.jpeg";
import aboutImg4 from "../../../public/images/about_img_4.jpeg";

const funfaceData = [
  {
    title: "District",
    factNumber: "40",
  },
  {
    title: "States",
    factNumber: "6",
  },
  {
    title: "Worldwide",
    factNumber: "20",
  },
  {
    title: 'Countries',
    factNumber: '4',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-7">
            <SectionHeading
              title="Unleashing the potential and Empowering the Wunderkind"
              subtitle="We will mention about our Mission and Vision"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                D25 Entertainment's mission and vision is to proclaim the
                dissemination of good news, in addition to publicly
                demonstrating the skills and talents of hidden gems to the
                entire nation via media. To overcome all of the abstractions
                that have prevented these people from coming out, thereby
                restoring humanity and love within all.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-1">
            <Image src={aboutImg} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image src={aboutImg2} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image src={aboutImg3} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Praise voice"
          subtitle="After five years of unwavering dedication, we are thrilled to announce the launch of 'PRAISE VOICE' – the ultimate gospel singing reality show! Get your voices ready, your spirits high, and prepare to embark on a transformative journey."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="120" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="The story of a Dreamer and the Dream Makers..!!"
              subtitle="Who are we"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our production house, committed to innovation and excellence, provides a dynamic platform for emerging artists to share their visions and hone their craft. Our diverse and highly skilled crew's professionalism and dedication drive the seamless execution of each project, fostering an environment that encourages experimentation and risk-taking.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              By celebrating unique perspectives and artistic expressions, we have cultivated a thriving ecosystem where each crew member's expertise and creativity contribute to our collaborative spirit. As we embark on new projects and collaborations, we remain dedicated to championing emerging talents and pushing the boundaries of creative expression, poised to make an indelible mark in the industry.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Crew"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="100" md="80" />
      {/* <Div className="container">
        <Cta
          title="We are Hiring"
          btnText="Apply now"
          btnLink="/case-study/caseStudyId"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
      {/* End CTA Section */}
    </>
  );
}
