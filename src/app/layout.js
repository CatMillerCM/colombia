/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata = {
  title: 'Pool Request',
  description: 'Distribute ball numbers to players in secrecy.',
  icons: {
    icon: '/favicon.ico'
  }
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={robotoCondensed.className}>
      {children}
    </body>
  </html>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default RootLayout;
