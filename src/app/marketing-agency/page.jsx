'use client'
import Cta from "../ui/Cta";
import Div from "../ui/Div";
import FunFact2 from "../ui/FunFact/FunFact2";
import Hero5 from "../ui/Hero/Hero5";
import LogoList from "../ui/LogoList";
import MovingText from "../ui/MovingText";
import PricingTableList from "../ui/PricingTable/PricingTableList";
import SectionHeading from "../ui/SectionHeading";
import ServiceList from "../ui/ServiceList";
import PortfolioSlider2 from "../ui/Slider/PortfolioSlider2";
import PostSlider from "../ui/Slider/PostSlider";
import TestimonialSlider from "../ui/Slider/TestimonialSlider";
import Spacing from "../ui/Spacing";
import VideoModal from "../ui/VideoModal";

const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];
const funfaceData = [
  {
    title: 'Digital products',
    factNumber: '550',
  },
  {
    title: 'Global happy clients',
    factNumber: '40K',
  },
  {
    title: 'Project completed',
    factNumber: '50k',
  },
  {
    title: 'Team members',
    factNumber: '250',
  },
];

export default function MarketingAgencyHome() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero5
        title="Grow Your Business<br /> With Digital Strategy"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnLink="contact"
        btnText="Let’s talk"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
      />
      {/* End Hero Section */}

      {/* Start Video Block Section */}
      <Div className="cs-video_block_1_wrap">
        <Div className="container">
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
            bgUrl="/images/video_bg_2.jpeg"
          />
        </Div>
      </Div>
      {/* End Video Block Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Services Section */}

      {/* Start PortfolioSlider Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4">
        Get ready to unleash your talent and reach new heights with us in this incredible Journey.
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
      {/* End PortfolioSlider Section */}

      {/* Start FunFact Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-no_shadow"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End FunFact Section */}

      {/* Start Pricing Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="125" md="55" />
      {/* End Pricing Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="100" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="130" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="We are Hiring"
          btnText="Apply now"
          btnLink="/case-study/caseStudyId"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
