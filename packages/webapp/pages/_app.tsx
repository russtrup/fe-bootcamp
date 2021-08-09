import { withRedux } from '@bootcamp/stores';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default withRedux(MyApp);
