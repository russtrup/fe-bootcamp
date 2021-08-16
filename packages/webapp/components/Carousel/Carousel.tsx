import { useGetPastLaunchesQuery } from '@bootcamp/graphql';
import React, { useMemo, useState } from 'react';
import { LaunchCard } from '../LaunchCard';
import { CarouselProps } from './Carousel.types';

const pageSize = 5;

const Carousel: React.FunctionComponent<CarouselProps> = ({ title }: CarouselProps) => {
    const { data, fetchMore } = useGetPastLaunchesQuery({
        variables: {
            offset: 0,
            limit: pageSize * 2,
        },
    });

    const [currentPage, setCurrentPage] = useState(0);

    const loadMoreData = () =>
        fetchMore({
            variables: {
                offset: data?.launchesPast?.length,
                limit: pageSize,
            },
        });

    const changePage = (offset: 1 | -1) => {
        // Don't let the page go < 0
        setCurrentPage(Math.max(0, currentPage + offset));
    };

    const goNext = () => {
        /* We can monitor the currentPage, and if we're requesting
        data that we don't have yet, we can fetch more data with apollo
        
        You could do this in a useEffect but you run the risk of dependency thrashing.
        By performing this action, we guarantee it only executes at most once per user interaction.
        
        This condition is using a bit of a lookahead (pageSize * 3) to fetch a bit of extra data
        to reduce number of loading screens shown*/
        if ((data?.launchesPast?.length ?? 0) <= currentPage * pageSize + pageSize * 3) {
            // For pagination to work as expected, we need to update the typePolicies in initializeApolloClient.ts
            loadMoreData();
        }

        changePage(1);
    };
    const goPrev = () => changePage(-1);

    /* This is a potentially unnecessary optimization, but it illustrates expensive
    operations that live in the render function should be memoized as to keep the render function fast.
    
    Prioritize speed of render over number of renders */
    const currentItems = useMemo(() => {
        const start = Math.floor(currentPage * pageSize);
        const end = start + pageSize;
        return data?.launchesPast?.slice(Math.max(0, start), end) ?? [];
    }, [data?.launchesPast, currentPage]);

    return (
        <div className={'w-full'}>
            <div className={'title text-gray-100 p-4 pl-12 text-left text-xl'}>{title}</div>
            <div className={'group items-wrapper w-full px-12 relative'}>
                <div className={'items'}>
                    {currentItems.map((lp) => (
                        <div className={'card-wrapper w-1/5 inline-block p-1'} key={lp?.id}>
                            <LaunchCard id={lp?.id} />
                        </div>
                    ))}
                </div>
                {currentPage > 0 && (
                    <button
                        className={'absolute text-gray-50 top-0 left-0 h-full w-12 bg-gray-900 bg-opacity-20'}
                        onClick={() => goPrev()}
                    >
                        <span>{'<'}</span>
                    </button>
                )}
                <button
                    className={'absolute text-gray-50 top-0 right-0 h-full w-12 bg-gray-900 bg-opacity-20'}
                    onClick={() => goNext()}
                >
                    <span>{'>'}</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
