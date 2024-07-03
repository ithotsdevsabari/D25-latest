'use client';
import Header from '../app/ui/Header';
import CustomCursor from '../app/ui/CustomCursor';
import Footer from '../app/ui/Footer';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';
import './style.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});
const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/img/fav.png" sizes="any" />
        <title>D25</title>
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
