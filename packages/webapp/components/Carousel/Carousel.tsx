import { useGetPastLaunchesQuery } from '@bootcamp/graphql';
import React from 'react';

const Carousel: React.FunctionComponent = React.memo(() => {
    const { data } = useGetPastLaunchesQuery({
        variables: {
            offset: 0,
            limit: 10,
        },
    });

    return (
        <div className={'text-gray-100'}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
});

export default Carousel;
