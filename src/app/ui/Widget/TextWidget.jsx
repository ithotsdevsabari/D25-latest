import React from 'react'
import Div from '../Div'
import { getWidth } from 'react-slick/lib/utils/innerSliderUtils'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget " >
      <img src={logoSrc} alt={logoAlt} className="logo-w"/> 
      <p dangerouslySetInnerHTML={{__html: text}}></p>
    </Div>
  )
}
