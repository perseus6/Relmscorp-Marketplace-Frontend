import 'styles/styles.css';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

// eslint-disable-next-line
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
