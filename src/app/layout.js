import PropTypes from 'prop-types';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata = {
  title: '',
  description: '',
  icons: {
    icon: '/favicon.ico'
  }
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={montserrat.className}>
      {children}
    </body>
  </html>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default RootLayout;
