'use client'
import Accordion from "../../ui/Accordion";
import Button from "../../ui/Button";
import Cta from "../../ui/Cta";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import TestimonialSlider from "../../ui/Slider/TestimonialSlider";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import serviceImage from '../../../../public/images/service_img_1.jpeg'

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading 
        title='Projects Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PROJECTS-DETAILS'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='' 
          subtitle='Praise Voice' 
          variant='cs-style1 text-center'
        />
        {/* <Spacing lg='90' md='45'/> */}
        {/* added new */}
        <h2 className="cs-font_38 text-center">Drive Force and How it’s Initiated</h2>
        <Spacing lg="40" md="25" />
        <p className="cs-m0 ">
        Some people learn music from an early age and aspire to be an eminent gospel singer who will
inspire many people. But they lack a platform along with opportunities in showcasing and projecting their
talents.</p>
<Spacing lg="25" md="10" />
<p className="cs-m0 ">
With a vision of assisting people like them, we started probing further and rallied all dioceses and
denominations to endorse our idea. They have all decided to undertake my vision after a 5 years effort
and reached throughout Tamil Nadu. At the end, The reality show 'PRAISE VOICE' became a
manifestation of the vision.</p>
<Spacing lg="25" md="10" />
<p className="cs-m0 ">
In this attempt, I presented my vision to Sathiyam TV's managing director, Isaac Livingstone. He
worked to help our vision by backing us and becoming our media partner, through which the show will be
broadcast. This reality show contains 70 EPISODES and GRAND FINALE. It starts from APRIL and ends
in DECEMBER.</p>
<Spacing lg="90" md="45" />
<h2 className="cs-font_38 text-center">The Frontier and Publicity</h2>
        <Spacing lg="40" md="25" />
        <p className="cs-m0 ">
        Despite the fact that the concept began with one individual, several Christian dioceses and
denominations, including CSI, ROMAN CATHOLIC, ECI, AG, and many other well-established independent
churches across Tamil Nadu, have come together one hand.</p>
<Spacing lg="25" md="10" />
<p className="cs-m0 ">
We promote the concert by distributing pamphlets, posters, and banners to churches, schools, and
colleges under the provinces. In addition, several TV networks and social media influencers have agreed
to promote this program through advertisements and posters. Leading musicians and Gospel influencers
who assisted us in running the show forwarded themselves to promote the show on their social media.
Pamphlets will be given in the Christian meetings also. Promos and Advertisement will be telecast in local
channels for Audition.</p>

        <Spacing lg="90" md="45" />
        
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Sketching'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Wireframing'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Prototyping'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={serviceImage} alt="Service" className='cs-radius_15 w-100' placeholder="blur" />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='eCommerce design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Landing page' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Email template' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Application design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Illustration' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Infographic design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Mobile apps design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Banner, brochure, card' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Other design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='We are Hiring' 
          btnText='Apply For Meeting' 
          btnLink="/hire/caseStudyId"
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
