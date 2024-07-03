"use client";
import Cta from "../app/ui/Cta";
import Div from "../app/ui/Div";
import PageHeading from "../app/ui/PageHeading";
import SectionHeading from "../app/ui/SectionHeading";
import Spacing from "../app/ui/Spacing";
import Team from "../app/ui/Team";
import { memberData } from "../../../utills/memberData";

export default function TeamPage() {
  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet Our Crew"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45"/>
        <Div className="row">
          {memberData.map((item, index) => {
            return (
              <Div key={index} className="col-lg-3 col-sm-6">
                <Team
                  memberId={item.memberId} // Corrected from item.id to item.memberId
                  memberImage={item.memberImage}
                  memberName={item.memberName}
                  memberDesignation={item.memberDesignation}
                    // memberSocial={item.memberSocial}
                />
                <Spacing lg="80" md="30" />
              </Div>
            );
          })}
        </Div>
        {/* <Spacing lg="70" md="50" /> */}
        {/* <Div className="container">
          <Cta
            title="We are Hiring"
            btnText="Apply now"
            btnLink="/case-study/caseStudyId"
            bgSrc="/images/cta_bg.jpeg" 
          />
        </Div> */}
      </Div>
    </>
  );
}
