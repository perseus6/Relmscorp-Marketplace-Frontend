import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type IMainProps = {
  children: ReactNode;
};

const Layout = ({ children }: IMainProps): JSX.Element => {
  return (
    <div>
      <Header />
      <div className='h-full'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
