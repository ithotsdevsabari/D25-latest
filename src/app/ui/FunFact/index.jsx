

import React from 'react';
import CountUp from 'react-countup';
import Div from '../Div';
import './funfact.scss';

export default function FunFact({ variant, title, subtitle, data }) {

  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : 'cs-funfact_wrap'}>
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
      />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right pt-4">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color odometer">
                <CountUp end={item.factNumber} duration={2} />
              </Div>
              <Div className="cs-funfact_text">
                 <span className="cs-accent_color">+</span>
                <p>{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
