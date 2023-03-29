import { useWeb3Modal } from '@web3modal/react';
import { useState } from 'react';
import { useAccount } from 'wagmi';

const WallectConnectButton = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const label = isConnected
    ? address.slice(0, 6) + '...' + address.slice(-4)
    : 'Connect Wallet';

  const onOpen = async () => {
    setLoading(true);
    await open();
    setLoading(false);
  };

  const onClick = () => {
    if (isConnected) {
      onOpen();
    } else {
      onOpen();
    }
  };

  return (
    <button
      className='bg-primary px-5 py-3 rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer'
      onClick={onClick}
      disabled={loading}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default WallectConnectButton;
