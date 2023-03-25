import Button from 'components/Button';

const Subscribe = (): JSX.Element => (
  <div className='relative'>
    <input
      className='h-14 w-full rounded-2xl outline-none pl-6 pr-48 text-black'
      placeholder='Enter your email here'
    />
    <Button classNames='absolute -right-1 px-12 py-4 font-semibold'>
      Subscribe
    </Button>
  </div>
);
export default Subscribe;
