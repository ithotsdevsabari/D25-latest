import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
     <Link href='https://www.instagram.com/' className="cs-center">
  <Icon icon="fa6-brands:instagram" />
</Link>
<Link href='https://www.facebook.com/' className="cs-center">
  <Icon icon="fa6-brands:facebook" />
</Link>
<Link href='https://twitter.com/' className="cs-center">
  <Icon icon="fa6-brands:twitter" />               
</Link>
<Link href='https://www.youtube.com/' className="cs-center">
  <Icon icon="fa6-brands:youtube" />              
</Link>

    </Div>
  )
}
