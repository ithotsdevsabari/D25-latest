import React from 'react';
import Link from "next/link";;
import Div from '../Div';
import './portfolio.scss';

export default function Portfolio({id, href, src, title, subtitle, variant }) {
  console.log("href",title)
  return (
      <>
      {
       title === "Uru thiruvizha" || title === "Award Function" || title === "Question Mark" ?
        
        <Div className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{title}</h2>
          <Div className="cs-portfolio_subtitle" >{subtitle}</Div>
        </Div>
        </Div>
      
      :
      <Link
        href={href+`?data=${id}`}
        className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
      >
        <>
          <Div className="cs-portfolio_hover" />
          <Div
            className="cs-portfolio_bg cs-bg"
            style={{ backgroundImage: `url("${src}")` }}
          />
          <Div className="cs-portfolio_info">
            <Div className="cs-portfolio_info_bg cs-accent_bg" />
            <h2 className="cs-portfolio_title">{title}</h2>
            <Div className="cs-portfolio_subtitle" >{subtitle}<span style={{fontSize:"35px"}}>&rarr;</span></Div>
          </Div>
        </>
      </Link>
      }
    
      
      </>
  );
}
