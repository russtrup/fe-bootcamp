import { getDataFromTree } from '@apollo/client/react/ssr';
import { withApollo } from '@bootcamp/graphql';
import Head from 'next/head';
import { Carousel } from '../components/Carousel';
import { LaunchModal } from '../components/LaunchModal';

const Home = () => {
    return (
        <div className={'bg-black min-h-screen flex flex-col items-center justify-center'}>
            <Head>
                <title>{'Frontend Bootcamp'}</title>
                <meta name={'description'} content={'Modern web workshop for React developers'} />
                <link rel={'icon'} href={'/favicon.ico'} />
            </Head>

            <div className={'hero bg-gray-700 w-full'}>
                <nav>
                    <div>
                        <h1 className={'text-gray-100 font-light px-12 py-4 text-2xl'}>{'LaunchFlix'}</h1>
                    </div>
                </nav>
            </div>
            <main className={'content flex-1 w-full'}>
                <Carousel title={'Past Launches'} />
            </main>
            <LaunchModal />
        </div>
    );
};

export default withApollo(Home, { getDataFromTree });
