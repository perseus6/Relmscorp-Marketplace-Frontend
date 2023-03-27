import MenuItems from './config';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header>
      <div className='h-28 flex justify-between items-center pl-32 pr-20'>
        <Link href='/'>
          <img
            src='/logo.png'
            className='w-20 flex-shrink-0 cursor-pointer'
            alt='logo iamge'
          />
        </Link>
        <div className='flex justify-between items-center gap-10'>
          <div className='flex justify-end items-center gap-10'>
            {MenuItems.map((item) => (
              <div key={item.id} className='cursor-pointer'>
                <Link href={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
          <div className='bg-primary px-5 py-3 rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer'>
            Connect Wallet
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
