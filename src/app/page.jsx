'use client';
import Cta from '../app/ui/Cta';
import Div from '../app/ui/Div';
import FunFact from '../app/ui/FunFact';
import Hero from '../app/ui/Hero';
import SectionHeading from '../app/ui/SectionHeading';
import PortfolioSlider from '../app/ui/Slider/PortfolioSlider';
import TeamSlider from '../app/ui/Slider/TeamSlider';
import Spacing from '../app/ui/Spacing';


// Hero Social Links
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
// FunFact Data
const funfaceData = [
  {
    title: 'Districts',
    factNumber: '40',
  },
  {
    title: 'States',
    factNumber: '6',
  },
  {
    title: 'Regions',
    factNumber: '20',
  },
  {
    title: 'Countries',
    factNumber: '4',
  },
 
];
// Portfolio Data
const portfolioData = [
  {
    title: 'Praise Voice',
    subtitle: 'See Details',
    href: '/portfolio',
    src: '/images/prise-voice.jpg',
  },
  {
    title: 'Cookery Show',
    subtitle: 'See Details',
    href: '/portfolio',
    src: '/images/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg',
  },
  {
    title: 'Award Function',
    subtitle: 'coming soon',
    href: '',
    src: '/images/pikaso_texttoimage_award-trophy-gold-glow-bright-orange-color-palette 1.jpg',
  },
  {
    title: 'Uru thiruvizha',
    subtitle: 'Onboard. Waiting to take off ',
    href: '',
    src: '/images/pikaso_texttoimage_photo-posted-to-myspace-in-2007-celebration-in-tam 1.jpg',
  },
  {
    title: 'Question Mark ',
    subtitle: 'New Arena For Film Makers ',
    href: '/portfolio',
    src: '/images/pikaso_texttoimage_35mm-film-photography-movie-camera-with-question-m 1 1.jpg',
  },
];

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Unearth the <br/>Unseen to Uplift"
        subtitle="D25 Entertainment's mission and vision is to proclaim the dissemination of good news,
        in addition to publicly demonstrating the skills and talents of hidden gems to the entire
        nation via media."
        btnText="Know us more"
        btnLink="/about"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/mail-image.jpg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Praise voice"
          subtitle="After five years of dedication, we're excited to launch 'PRAISE VOICE' – a new gospel singing reality show. Get ready to join us on this inspiring journey!"
          data={funfaceData}
        />
      </div>
     
      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}


      {/* Start Team Section */}
      <Spacing lg="50" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Crew"
          subtitle="Our Team"
          variant="cs-style1"/>
        <Spacing lg="30" md="45"/>
        <TeamSlider />
      </Div>
     
      <Spacing lg="105" md="70" />
      
      <Div className="container">
        <Cta
          title="We are Hiring"
          btnText="Apply now"
          btnLink="/case-study"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
