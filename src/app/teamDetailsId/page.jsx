

"use client"
import { Suspense } from 'react';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import PageHeading from '../ui/PageHeading';
import Spacing from '../ui/Spacing';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function TeamDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamDetailsContent />
    </Suspense>
  );
}

function TeamDetailsContent() {
  const searchParams = useSearchParams();
  const paramsId = searchParams?.get('data');

  useEffect(() => {
    if (paramsId) {
      const element = document.getElementById(paramsId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [paramsId]);
  

  return (
    <>

    {/* added static page */}

      <PageHeading
        title="Team"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">

      <SectionHeading
          title="Meet Our Crew"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
          <Spacing lg="90" md="45" />

        {/* member 1 */}
        <Div className="row align-items-center" id="1">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/new sakthi stephen.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">P.G. Sakthi Stephen</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Proprietor</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              At the age of 14, I entered the film industry, working with renowned editor Mr. Sreekar Prasad, a nine-time national award winner. Over nine years, I collaborated on various Tamil films and later worked with legendary filmmakers like Mani Ratnam, Vishnuvardhan, Mohan Raja, and Santhosh Sivan. I then served as an Assistant Director for Director Ramana and freelanced for leading TV channels and projects.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              As a determined young individual, I faced the challenge of showcasing my talents without support, which fuelled my passion to help others in similar situations. Leading a dedicated team at D25, we launched a platform for those eager to prove their worth.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>
        </Div>

        {/* member 2 */}
       <Spacing lg="100" md="80" />
        <Div className="row align-items-center" id="2">
          <Div className="col-lg-6">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">Kalpana Stephen</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Chief Executive</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              I began my journey in the industry as an ordinary girl. The transition from fear and anxiety to triumph is a testament to the strength of the feminine spirit, and the paths I chose enabled me to overcome all obstacles. I am dedicated to using my platform to inspire and empower others like me.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              The D25 initiative stands as a beacon of hope for women who may feel confined in the role of a housewife, demonstrating that there are opportunities to break free from self-imposed limitations and showcase their talents. Let's unite as a powerful force to uplift and support one another on our path to success.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>

          <Div className="col-xl-5 col-lg-6 offset-xl-1">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/new kalpana.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
        </Div>


        {/* member 3 */}
        <Spacing lg="100" md="80" />
        <Div className="row align-items-center" id="3">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/JOSHUA GIFTSON.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">Joshua Giftson</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Associate Producer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              I am a passionate and inventive media head with over a decade of experience, since 2009. My collaborative nature has allowed me to work with numerous renowned gospel and non-governmental organizations as a graphic designer and photographer. This has led me to work onsite in 20+ countries and offsite for clients from the UK, USA, and Germany.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              My Voyage has now brought me to D25, where I am excited to join forces with P.G. Shakthi Stephen and a pack of like-minded individuals. Together, we are embarking on a new adventure filled with creativity and vision.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>
        </Div>


         {/* member 4 */}
         <Spacing lg="100" md="80" />
        <Div className="row align-items-center" id="4">
          <Div className="col-lg-6">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">Jenefer Josabath</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Associate Executive</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              With a philanthropic motive and driven by an intuition to embark on this journey of uplifting, I have become a part of D25. Working with individuals of diverse backgrounds and engaging in intrapersonal learning has enhanced my dextrous capabilities. In this house, hierarchy is non-existent, and valuable insights can be gained regardless of age or proficiency.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              If you are aspiring to join us on this exciting journey, you may encounter me at various points. Please do not hesitate to wave a “Hi !”. Your kind gesture will brighten our day a little more.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>

          <Div className="col-xl-5 col-lg-6 offset-xl-1">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/JENEFER JOSABATH.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
        </Div>


         {/* member 5 */}
         <Spacing lg="100" md="80" />
        <Div className="row align-items-center" id="5">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/MAXELL RODRIGUES.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">Maxell Rodrigues</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Associate Director</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              My journey in the creative world started as a Graphic Designer, digital artist and show producer, but I didn't settle there. I ventured into UI/UX Design and development, and took up leadership roles in various innovative projects. Fuelled by my passion, I constantly seek new ideas and strive to enhance my skills, leading to successful collaborations on diverse projects and adept problem-solving. Being a good listener is essential in my approach.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              The advent of project D25 represents a long-awaited fulfillment of my aspirations. This endeavorallows me to showcase the culmination of my years of skill development in a manner that isuniquely mine and at a pace I dictate. It presents an opportunity for me to unleash the latent talents that have long been yearning to be expressed.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>
        </Div>


         {/* member 6 */}
         <Spacing lg="100" md="80" />
        <Div className="row align-items-center" id="6">
          <Div className="col-lg-6">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">Nandhini</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Assistant Director</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              As a passionate visual designer and digital artist. I believe that design is more than just about aesthetics. It has the power to evoke emotions and establish deep, meaningful connections. With over 7 years of experience and a keen ability for active listening, I have collaborated with clients across diverse industries, bringing a unique blend of creativity and strategic thinking to every endeavor.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              The inception of D25 marks the realization of my long-held dreams and ambitions, where we can unleash our vision and flourish without boundaries. And I am thrilled to embark on this new journey with both passion and compassion, aspiring for growth together.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>

          <Div className="col-xl-5 col-lg-6 offset-xl-1">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/NANDHINI G.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
        </Div>

         {/* member 7 */}
         <Spacing lg="100" md="80" />
        <Div className="row align-items-center" id="7">
         

          <Div className="col-xl-5 col-lg-6 ">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/Jenniffer Steffy.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">Jenniffer Steffy</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Content Writer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              My journey into the world of content writing began as a gradual discovery, fueled by curiosity and a deep love for storytelling. What started as a casual interest soon transformed into a passion as I witnessed firsthand the power of words to inspire, inform, and entertain.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              Joining D25 Entertainment marked a pivotal moment in my career. Here, I immersed myself in the art of content creation, diving deep into learning and refining my skills. Collaborating with a diverse and talented team at D25 has been incredibly enriching, allowing me to gain valuable insights and grow both professionally and personally. At D25, I've learned that great ideas can come from anyone, regardless of their background or experience.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>
        </Div>


          {/* member 8 */}
          <Spacing lg="100" md="80" />
        <Div className="row align-items-center" id="8">
          
          <Div className="col-lg-6 ">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title head_new_col">John Mervin</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Associate content Writer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
              There is no greater agony than bearing an untold story inside you.” — says Maya Angelou. This drives me to unearth the untold stories through writing. As an aspiring writer, I am dedicated to giving my all in every piece I create, aiming to convey kindness and compassion for humanity in a direct and impactful manner, No greys in between.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">
              Joining this organization aligns perfectly with my core values, marking a new chapter in my career. I am ready to dive into the depths of the sea and reach for the heights of the horizon, embracing the challenges and opportunities that lie ahead.
              </p>

                {/* Social media added in future */}

              {/* <Div className="cs-height_45 cs-height_lg_30" /> */}
              {/* <SocialWidget /> */}
            </Div>
          </Div>
          <Div className="col-xl-5 col-lg-6 offset-xl-1">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/images/JOHN MERVIN.png"
                alt="Member"
                className="w-100"
                // placeholder="blur"
                width= "400"
                height="700"
              />
            </Div>
          </Div>
        </Div>


        

      </Div>
      {/* <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="We are Hiring"
          btnText="Apply now"
          btnLink="/case-study/caseStudyId"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
    </>
  );
}
