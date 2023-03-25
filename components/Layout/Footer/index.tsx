import SocialItems from './config';
import Subscribe from './Subscribe';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className='bg-card-background px-32 py-10 text-font-secondary flex flex-col gap-6'>
        <div className='flex justify-between gap-3'>
          <div className='flex flex-col gap-5'>
            <div className='font-semibold text-2xl text-white'>
              NFT Marketplace
            </div>
            <div>NFT marketplace UI created with Anima for Figma.</div>
            <div>
              <p className='pb-3'>Join our community</p>
              <div className='flex flex-row items-center gap-2'>
                {SocialItems.map((item) => (
                  <img
                    className='cursor-pointer'
                    key={item.id}
                    src={item.url}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='font-semibold text-2xl text-white'>Explore</div>
            <div>Marketplace</div>
            <div>Rankings</div>
            <div>Connect a wallet</div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='font-semibold text-2xl text-white'>
              Join our weekly digest
            </div>
            <div>Get exclusive promotions & updates straight to your inbox</div>
            <div>Join our community</div>
            <Subscribe />
          </div>
        </div>
        <hr></hr>
        <div className='text-sm'>Ⓒ NFT Market. Use this template freely.</div>
      </div>
    </footer>
  );
};

export default Footer;
