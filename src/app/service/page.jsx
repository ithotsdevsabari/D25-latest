'use client'
import Card from "../ui/Card";
import Cta from "../ui/Cta";
import Div from "../ui/Div";
import PageHeading from "../ui/PageHeading";
import PricingTableList from "../ui/PricingTable/PricingTableList";
import SectionHeading from "../ui/SectionHeading";
import TestimonialSlider from "../ui/Slider/TestimonialSlider";
import Spacing from "../ui/Spacing";

export default function ServicesPage() {
  return (
    <>
      <PageHeading 
        title='Projects'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Projects'/>
      <Spacing lg='150' md='80'/>
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='What We are Doing'
                subtitle='Current Projects'/>
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Praise Voice'
                    link='/service/ui-ux-design'
                    src='/images/whatwedoing.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='React.js Development'
                    link='/service/reactjs-development'
                    src='/images/service_2.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Digital Marketing'
                    link='/service/digital-marketing'
                    src='/images/service_3.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Technology'
                    link='/service/technology'
                    src='/images/service_4.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Consultancy'
                    link='/service/consultancy'
                    src='/images/service_5.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Creative Design'
                    link='/service/creative-design'
                    src='/images/service_6.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* added new */}

    <Spacing lg='100' md='80'/>
 <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='What We are Doing'
                subtitle='Upcoming Projects'/>
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Award Function'
                    link='/'
                    src='/images/award-function.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Israel Kondattam'
                    link='/'
                    src='/images/isreal.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title=' Cookery show'
                    link='/'
                    src='/images/cooking.jpg'
                    alt='Service'/>
                  <Spacing lg='0' md='30'/>
                </Div>
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Technology'
                    link='/service/technology'
                    src='/images/service_4.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Consultancy'
                    link='/service/consultancy'
                    src='/images/service_5.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div> */}
                {/* <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Creative Design'
                    link='/service/creative-design'
                    src='/images/service_6.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>


      {/* <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading
          title='Providing best <br/>pricing for client' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div> */}

      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='We are Hiring' 
          btnText='Apply now' 
          btnLink="/case-study/caseStudyId"
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
