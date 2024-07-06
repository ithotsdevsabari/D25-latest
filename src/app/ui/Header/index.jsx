"use client"
import { useEffect, useState } from 'react';
import Div from '../Div';
import Link from 'next/link';
import DropDown from './DropDown';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import './header.scss';


export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/img/logo.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                   {/*   <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                     
                      <DropDown>
                        <ul>
                          <li>
                            <Link href="/" onClick={() => setMobileToggle(false)}>
                              Main Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Photography Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/freelancer-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Freelancer Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/architecture-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Architecture Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/creative-solution"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Solution
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/personal-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Personal Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Showcase
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/video-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Video Showcase
                            </Link>
                          </li>
                        </ul>
                      </DropDown> 
                    </li>*/}
                    <li>
                      <Link
                        href="/"
                        onClick={() => setMobileToggle(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </Link>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link
                        href="/service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Projects
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Projects
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Projects Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li> */}
                    {/* 
                    <li>
                      <Link
                        href="/"
                        onClick={() => setMobileToggle(false)}
                      >
                        Hire
                      </Link>
                    </li> 
                    */}
                    <li className="menu-item-has-children">
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              href="/portfolioDetailsId"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Details
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link href="/blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li> */}
                    <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Pages
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/teamDetailsId"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              href="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </Link>
                          </li> */}
                          <li>
                            <Link
                              href="/case-study"
                              onClick={() => setMobileToggle(false)}
                            >
                              Hire
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              href="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/img/logo.png" alt="Logo" />
          </Link>
          {/* <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Connect with us
            </h2>
          </Div> */}
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact with us" withIcon />
          </Div>
          <Div className="">
            <Newsletter
              title="Subscribe"
              // subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="d25entertainment@gmail.com"
            />
          </Div>
          <Div className="">
            <SocialWidget/>
          </Div>
        </Div>
      </Div>
    </>
  );
}
