import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
         <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          No.2, J block, New Colony, Virugambakkam, Chennai-600092.
        </li>
        <li>

          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
           <a href="tel:+919384845858">+91 9384845858,</a>
           <a href="tel:04446884155">{" "}04446884155</a>
           
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          <a href="mailto:d25entertainment@gmail.com">d25entertainment@gmail.com</a>
        </li>
       
      </ul>
    </>
  )
}
