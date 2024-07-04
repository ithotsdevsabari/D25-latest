'use client'
import Button from "../ui/Button";
import Cta from "../ui/Cta";
import Div from "../ui/Div";
import PageHeading from "../ui/PageHeading";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "../ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../public/images/portfolio_details_1.jpeg'
import { useEffect,useRef } from "react";

export default function PortfolioDetailsPage() {
  const portfolioDetailSection = useRef(null);
  useEffect(() => {
    if (portfolioDetailSection.current) {
      portfolioDetailSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO-DETAILS'
        customLink="/portfolio"
        customLinkName="Portfolio"
      />
      
      <div ref={portfolioDetailSection}>
      <Spacing lg='150' md='80'/>
      <Div className="container" >
        <Image src={imgUrl} alt="Details" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Praise voice' 

              subtitle='Creative' 
            >
               <Spacing lg='20' md='20'/>
              <h2 className="cs-section_subtitle">{"Contest"}</h2>
              {/* <Spacing lg='40' md='20'/> */}
              <p>With a vision of assisting people, we started probing further and rallied all dioceses and denominations to endorse our idea. After five years of effort, they decided to undertake my vision, reaching throughout Tamil Nadu. As a result, the reality show "PRAISE VOICE" became a manifestation of this vision. 
              </p>
              <Spacing lg='10' md='10'/>
              <p>During this journey, I presented my vision to Sathiyam TV's Managing Director, Isaac Livingstone. He supported our vision by backing us and becoming our media partner, through which the show will be broadcast. This reality show contains 50 episodes and a grand finale. It starts in July and ends in December. </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='20' md='20'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='45' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Reality Show</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Tamil Nadu</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Genre:</h3>
                <p className='cs-m0'>Music</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Media Partner:</h3>
                <p className='cs-m0'>Sathyam TV</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Commences from:</h3>
                <p className='cs-m0'>July 2024</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* <Spacing lg='65' md='10'/> */}
          {/* <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/portfolioDetailsId' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/portfolioDetailsId' btnText='Next Project'/>
            </Div>
          </Div> */}
      </Div>
      <Spacing lg='100' md='80'/>
            {/* Start CTA Section */}
            <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      </div>
      {/* End CTA Section */}
    </>
  )
}
