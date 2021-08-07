import { gql } from '@apollo/client';
import React from 'react';
import { useGetPastLaunchesQuery } from '../../../graphql/src';

// eslint-disable-next-line no-unused-vars
const pastLaunch = gql`
    query getPastLaunches($offset: Int, $limit: Int) {
        launchesPast(limit: $limit, offset: $offset) {
            id
            mission_name
            links {
                video_link
            }
        }
    }
`;

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
