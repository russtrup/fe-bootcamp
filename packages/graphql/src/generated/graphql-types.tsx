import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    ObjectID: any;
};

export type Address = {
    __typename?: 'Address';
    address?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
};

export type Capsule = {
    __typename?: 'Capsule';
    id?: Maybe<Scalars['ID']>;
    landings?: Maybe<Scalars['Int']>;
    missions?: Maybe<Array<Maybe<CapsuleMission>>>;
    original_launch?: Maybe<Scalars['Date']>;
    reuse_count?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    dragon?: Maybe<Dragon>;
};

export type CapsuleMission = {
    __typename?: 'CapsuleMission';
    flight?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
};

export type CapsulesFind = {
    id?: Maybe<Scalars['ID']>;
    landings?: Maybe<Scalars['Int']>;
    mission?: Maybe<Scalars['String']>;
    original_launch?: Maybe<Scalars['Date']>;
    reuse_count?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};

export type Core = {
    __typename?: 'Core';
    asds_attempts?: Maybe<Scalars['Int']>;
    asds_landings?: Maybe<Scalars['Int']>;
    block?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['ID']>;
    missions?: Maybe<Array<Maybe<CapsuleMission>>>;
    original_launch?: Maybe<Scalars['Date']>;
    reuse_count?: Maybe<Scalars['Int']>;
    rtls_attempts?: Maybe<Scalars['Int']>;
    rtls_landings?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    water_landing?: Maybe<Scalars['Boolean']>;
};

export type CoreMission = {
    __typename?: 'CoreMission';
    name?: Maybe<Scalars['String']>;
    flight?: Maybe<Scalars['Int']>;
};

export type CoresFind = {
    asds_attempts?: Maybe<Scalars['Int']>;
    asds_landings?: Maybe<Scalars['Int']>;
    block?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['String']>;
    missions?: Maybe<Scalars['String']>;
    original_launch?: Maybe<Scalars['Date']>;
    reuse_count?: Maybe<Scalars['Int']>;
    rtls_attempts?: Maybe<Scalars['Int']>;
    rtls_landings?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    water_landing?: Maybe<Scalars['Boolean']>;
};

export type Distance = {
    __typename?: 'Distance';
    feet?: Maybe<Scalars['Float']>;
    meters?: Maybe<Scalars['Float']>;
};

export type Dragon = {
    __typename?: 'Dragon';
    active?: Maybe<Scalars['Boolean']>;
    crew_capacity?: Maybe<Scalars['Int']>;
    description?: Maybe<Scalars['String']>;
    diameter?: Maybe<Distance>;
    dry_mass_kg?: Maybe<Scalars['Int']>;
    dry_mass_lb?: Maybe<Scalars['Int']>;
    first_flight?: Maybe<Scalars['String']>;
    heat_shield?: Maybe<DragonHeatShield>;
    height_w_trunk?: Maybe<Distance>;
    id?: Maybe<Scalars['ID']>;
    launch_payload_mass?: Maybe<Mass>;
    launch_payload_vol?: Maybe<Volume>;
    name?: Maybe<Scalars['String']>;
    orbit_duration_yr?: Maybe<Scalars['Int']>;
    pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
    return_payload_mass?: Maybe<Mass>;
    return_payload_vol?: Maybe<Volume>;
    sidewall_angle_deg?: Maybe<Scalars['Float']>;
    thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
    trunk?: Maybe<DragonTrunk>;
    type?: Maybe<Scalars['String']>;
    wikipedia?: Maybe<Scalars['String']>;
};

export type DragonHeatShield = {
    __typename?: 'DragonHeatShield';
    dev_partner?: Maybe<Scalars['String']>;
    material?: Maybe<Scalars['String']>;
    size_meters?: Maybe<Scalars['Float']>;
    temp_degrees?: Maybe<Scalars['Int']>;
};

export type DragonPressurizedCapsule = {
    __typename?: 'DragonPressurizedCapsule';
    payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
    __typename?: 'DragonThrust';
    amount?: Maybe<Scalars['Int']>;
    fuel_1?: Maybe<Scalars['String']>;
    fuel_2?: Maybe<Scalars['String']>;
    pods?: Maybe<Scalars['Int']>;
    thrust?: Maybe<Force>;
    type?: Maybe<Scalars['String']>;
};

export type DragonTrunk = {
    __typename?: 'DragonTrunk';
    cargo?: Maybe<DragonTrunkCargo>;
    trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
    __typename?: 'DragonTrunkCargo';
    solar_array?: Maybe<Scalars['Int']>;
    unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type Force = {
    __typename?: 'Force';
    kN?: Maybe<Scalars['Float']>;
    lbf?: Maybe<Scalars['Float']>;
};

export type HistoriesResult = {
    __typename?: 'HistoriesResult';
    result?: Maybe<Result>;
    data?: Maybe<Array<Maybe<History>>>;
};

export type History = {
    __typename?: 'History';
    details?: Maybe<Scalars['String']>;
    event_date_unix?: Maybe<Scalars['Date']>;
    event_date_utc?: Maybe<Scalars['Date']>;
    id?: Maybe<Scalars['ID']>;
    links?: Maybe<Link>;
    title?: Maybe<Scalars['String']>;
    flight?: Maybe<Launch>;
};

export type HistoryFind = {
    end?: Maybe<Scalars['Date']>;
    flight_number?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['ID']>;
    start?: Maybe<Scalars['Date']>;
};

export type Info = {
    __typename?: 'Info';
    ceo?: Maybe<Scalars['String']>;
    coo?: Maybe<Scalars['String']>;
    cto_propulsion?: Maybe<Scalars['String']>;
    cto?: Maybe<Scalars['String']>;
    employees?: Maybe<Scalars['Int']>;
    founded?: Maybe<Scalars['Int']>;
    founder?: Maybe<Scalars['String']>;
    headquarters?: Maybe<Address>;
    launch_sites?: Maybe<Scalars['Int']>;
    links?: Maybe<InfoLinks>;
    name?: Maybe<Scalars['String']>;
    summary?: Maybe<Scalars['String']>;
    test_sites?: Maybe<Scalars['Int']>;
    valuation?: Maybe<Scalars['Float']>;
    vehicles?: Maybe<Scalars['Int']>;
};

export type InfoLinks = {
    __typename?: 'InfoLinks';
    elon_twitter?: Maybe<Scalars['String']>;
    flickr?: Maybe<Scalars['String']>;
    twitter?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
};

export type Landpad = {
    __typename?: 'Landpad';
    attempted_landings?: Maybe<Scalars['String']>;
    details?: Maybe<Scalars['String']>;
    full_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    landing_type?: Maybe<Scalars['String']>;
    location?: Maybe<Location>;
    status?: Maybe<Scalars['String']>;
    successful_landings?: Maybe<Scalars['String']>;
    wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
    __typename?: 'Launch';
    details?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    is_tentative?: Maybe<Scalars['Boolean']>;
    launch_date_local?: Maybe<Scalars['Date']>;
    launch_date_unix?: Maybe<Scalars['Date']>;
    launch_date_utc?: Maybe<Scalars['Date']>;
    launch_site?: Maybe<LaunchSite>;
    launch_success?: Maybe<Scalars['Boolean']>;
    launch_year?: Maybe<Scalars['String']>;
    links?: Maybe<LaunchLinks>;
    mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
    mission_name?: Maybe<Scalars['String']>;
    rocket?: Maybe<LaunchRocket>;
    static_fire_date_unix?: Maybe<Scalars['Date']>;
    static_fire_date_utc?: Maybe<Scalars['Date']>;
    telemetry?: Maybe<LaunchTelemetry>;
    tentative_max_precision?: Maybe<Scalars['String']>;
    upcoming?: Maybe<Scalars['Boolean']>;
    ships?: Maybe<Array<Maybe<Ship>>>;
};

export type LaunchFind = {
    apoapsis_km?: Maybe<Scalars['Float']>;
    block?: Maybe<Scalars['Int']>;
    cap_serial?: Maybe<Scalars['String']>;
    capsule_reuse?: Maybe<Scalars['String']>;
    core_flight?: Maybe<Scalars['Int']>;
    core_reuse?: Maybe<Scalars['String']>;
    core_serial?: Maybe<Scalars['String']>;
    customer?: Maybe<Scalars['String']>;
    eccentricity?: Maybe<Scalars['Float']>;
    end?: Maybe<Scalars['Date']>;
    epoch?: Maybe<Scalars['Date']>;
    fairings_recovered?: Maybe<Scalars['String']>;
    fairings_recovery_attempt?: Maybe<Scalars['String']>;
    fairings_reuse?: Maybe<Scalars['String']>;
    fairings_reused?: Maybe<Scalars['String']>;
    fairings_ship?: Maybe<Scalars['String']>;
    gridfins?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    inclination_deg?: Maybe<Scalars['Float']>;
    land_success?: Maybe<Scalars['String']>;
    landing_intent?: Maybe<Scalars['String']>;
    landing_type?: Maybe<Scalars['String']>;
    landing_vehicle?: Maybe<Scalars['String']>;
    launch_date_local?: Maybe<Scalars['Date']>;
    launch_date_utc?: Maybe<Scalars['Date']>;
    launch_success?: Maybe<Scalars['String']>;
    launch_year?: Maybe<Scalars['String']>;
    legs?: Maybe<Scalars['String']>;
    lifespan_years?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    manufacturer?: Maybe<Scalars['String']>;
    mean_motion?: Maybe<Scalars['Float']>;
    mission_id?: Maybe<Scalars['String']>;
    mission_name?: Maybe<Scalars['String']>;
    nationality?: Maybe<Scalars['String']>;
    norad_id?: Maybe<Scalars['Int']>;
    orbit?: Maybe<Scalars['String']>;
    payload_id?: Maybe<Scalars['String']>;
    payload_type?: Maybe<Scalars['String']>;
    periapsis_km?: Maybe<Scalars['Float']>;
    period_min?: Maybe<Scalars['Float']>;
    raan?: Maybe<Scalars['Float']>;
    reference_system?: Maybe<Scalars['String']>;
    regime?: Maybe<Scalars['String']>;
    reused?: Maybe<Scalars['String']>;
    rocket_id?: Maybe<Scalars['String']>;
    rocket_name?: Maybe<Scalars['String']>;
    rocket_type?: Maybe<Scalars['String']>;
    second_stage_block?: Maybe<Scalars['String']>;
    semi_major_axis_km?: Maybe<Scalars['Float']>;
    ship?: Maybe<Scalars['String']>;
    side_core1_reuse?: Maybe<Scalars['String']>;
    side_core2_reuse?: Maybe<Scalars['String']>;
    site_id?: Maybe<Scalars['String']>;
    site_name_long?: Maybe<Scalars['String']>;
    site_name?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['Date']>;
    tbd?: Maybe<Scalars['String']>;
    tentative_max_precision?: Maybe<Scalars['String']>;
    tentative?: Maybe<Scalars['String']>;
};

export type LaunchLinks = {
    __typename?: 'LaunchLinks';
    article_link?: Maybe<Scalars['String']>;
    flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
    mission_patch_small?: Maybe<Scalars['String']>;
    mission_patch?: Maybe<Scalars['String']>;
    presskit?: Maybe<Scalars['String']>;
    reddit_campaign?: Maybe<Scalars['String']>;
    reddit_launch?: Maybe<Scalars['String']>;
    reddit_media?: Maybe<Scalars['String']>;
    reddit_recovery?: Maybe<Scalars['String']>;
    video_link?: Maybe<Scalars['String']>;
    wikipedia?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
    __typename?: 'LaunchRocket';
    fairings?: Maybe<LaunchRocketFairings>;
    first_stage?: Maybe<LaunchRocketFirstStage>;
    rocket_name?: Maybe<Scalars['String']>;
    rocket_type?: Maybe<Scalars['String']>;
    rocket?: Maybe<Rocket>;
    second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
    __typename?: 'LaunchRocketFairings';
    recovered?: Maybe<Scalars['Boolean']>;
    recovery_attempt?: Maybe<Scalars['Boolean']>;
    reused?: Maybe<Scalars['Boolean']>;
    ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
    __typename?: 'LaunchRocketFirstStage';
    cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
    __typename?: 'LaunchRocketFirstStageCore';
    block?: Maybe<Scalars['Int']>;
    core?: Maybe<Core>;
    flight?: Maybe<Scalars['Int']>;
    gridfins?: Maybe<Scalars['Boolean']>;
    land_success?: Maybe<Scalars['Boolean']>;
    landing_intent?: Maybe<Scalars['Boolean']>;
    landing_type?: Maybe<Scalars['String']>;
    landing_vehicle?: Maybe<Scalars['String']>;
    legs?: Maybe<Scalars['Boolean']>;
    reused?: Maybe<Scalars['Boolean']>;
};

export type LaunchRocketSecondStage = {
    __typename?: 'LaunchRocketSecondStage';
    block?: Maybe<Scalars['Int']>;
    payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
    __typename?: 'LaunchSite';
    site_id?: Maybe<Scalars['String']>;
    site_name_long?: Maybe<Scalars['String']>;
    site_name?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
    __typename?: 'LaunchTelemetry';
    flight_club?: Maybe<Scalars['String']>;
};

export type LaunchesPastResult = {
    __typename?: 'LaunchesPastResult';
    result?: Maybe<Result>;
    data?: Maybe<Array<Maybe<Launch>>>;
};

export type Launchpad = {
    __typename?: 'Launchpad';
    attempted_launches?: Maybe<Scalars['Int']>;
    details?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    location?: Maybe<Location>;
    name?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    successful_launches?: Maybe<Scalars['Int']>;
    vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
    wikipedia?: Maybe<Scalars['String']>;
};

export type Link = {
    __typename?: 'Link';
    article?: Maybe<Scalars['String']>;
    reddit?: Maybe<Scalars['String']>;
    wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
    __typename?: 'Location';
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
};

export type Mass = {
    __typename?: 'Mass';
    kg?: Maybe<Scalars['Int']>;
    lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
    __typename?: 'Mission';
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
    name?: Maybe<Scalars['String']>;
    twitter?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
    wikipedia?: Maybe<Scalars['String']>;
    payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type MissionResult = {
    __typename?: 'MissionResult';
    result?: Maybe<Result>;
    data?: Maybe<Array<Maybe<Mission>>>;
};

export type MissionsFind = {
    id?: Maybe<Scalars['ID']>;
    manufacturer?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    payload_id?: Maybe<Scalars['String']>;
};

export type Payload = {
    __typename?: 'Payload';
    customers?: Maybe<Array<Maybe<Scalars['String']>>>;
    id?: Maybe<Scalars['ID']>;
    manufacturer?: Maybe<Scalars['String']>;
    nationality?: Maybe<Scalars['String']>;
    norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    orbit_params?: Maybe<PayloadOrbitParams>;
    orbit?: Maybe<Scalars['String']>;
    payload_mass_kg?: Maybe<Scalars['Float']>;
    payload_mass_lbs?: Maybe<Scalars['Float']>;
    payload_type?: Maybe<Scalars['String']>;
    reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
    __typename?: 'PayloadOrbitParams';
    apoapsis_km?: Maybe<Scalars['Float']>;
    arg_of_pericenter?: Maybe<Scalars['Float']>;
    eccentricity?: Maybe<Scalars['Float']>;
    epoch?: Maybe<Scalars['Date']>;
    inclination_deg?: Maybe<Scalars['Float']>;
    lifespan_years?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    mean_anomaly?: Maybe<Scalars['Float']>;
    mean_motion?: Maybe<Scalars['Float']>;
    periapsis_km?: Maybe<Scalars['Float']>;
    period_min?: Maybe<Scalars['Float']>;
    raan?: Maybe<Scalars['Float']>;
    reference_system?: Maybe<Scalars['String']>;
    regime?: Maybe<Scalars['String']>;
    semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type PayloadsFind = {
    apoapsis_km?: Maybe<Scalars['Float']>;
    customer?: Maybe<Scalars['String']>;
    eccentricity?: Maybe<Scalars['Float']>;
    epoch?: Maybe<Scalars['Date']>;
    inclination_deg?: Maybe<Scalars['Float']>;
    lifespan_years?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    manufacturer?: Maybe<Scalars['String']>;
    mean_motion?: Maybe<Scalars['Float']>;
    nationality?: Maybe<Scalars['String']>;
    norad_id?: Maybe<Scalars['Int']>;
    orbit?: Maybe<Scalars['String']>;
    payload_id?: Maybe<Scalars['ID']>;
    payload_type?: Maybe<Scalars['String']>;
    periapsis_km?: Maybe<Scalars['Float']>;
    period_min?: Maybe<Scalars['Float']>;
    raan?: Maybe<Scalars['Float']>;
    reference_system?: Maybe<Scalars['String']>;
    regime?: Maybe<Scalars['String']>;
    reused?: Maybe<Scalars['Boolean']>;
    semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type Query = {
    __typename?: 'Query';
    capsules?: Maybe<Array<Maybe<Capsule>>>;
    capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
    capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
    capsule?: Maybe<Capsule>;
    company?: Maybe<Info>;
    cores?: Maybe<Array<Maybe<Core>>>;
    coresPast?: Maybe<Array<Maybe<Core>>>;
    coresUpcoming?: Maybe<Array<Maybe<Core>>>;
    core?: Maybe<Core>;
    dragons?: Maybe<Array<Maybe<Dragon>>>;
    dragon?: Maybe<Dragon>;
    histories?: Maybe<Array<Maybe<History>>>;
    historiesResult?: Maybe<HistoriesResult>;
    history?: Maybe<History>;
    landpads?: Maybe<Array<Maybe<Landpad>>>;
    landpad?: Maybe<Landpad>;
    launches?: Maybe<Array<Maybe<Launch>>>;
    launchesPast?: Maybe<Array<Maybe<Launch>>>;
    launchesPastResult?: Maybe<LaunchesPastResult>;
    launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
    launch?: Maybe<Launch>;
    launchLatest?: Maybe<Launch>;
    launchNext?: Maybe<Launch>;
    launchpads?: Maybe<Array<Maybe<Launchpad>>>;
    launchpad?: Maybe<Launchpad>;
    missions?: Maybe<Array<Maybe<Mission>>>;
    missionsResult?: Maybe<MissionResult>;
    mission?: Maybe<Mission>;
    payloads?: Maybe<Array<Maybe<Payload>>>;
    payload?: Maybe<Payload>;
    roadster?: Maybe<Roadster>;
    rockets?: Maybe<Array<Maybe<Rocket>>>;
    rocketsResult?: Maybe<RocketsResult>;
    rocket?: Maybe<Rocket>;
    ships?: Maybe<Array<Maybe<Ship>>>;
    shipsResult?: Maybe<ShipsResult>;
    ship?: Maybe<Ship>;
};

export type QueryCapsulesArgs = {
    find?: Maybe<CapsulesFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryCapsulesPastArgs = {
    find?: Maybe<CapsulesFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryCapsulesUpcomingArgs = {
    find?: Maybe<CapsulesFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryCapsuleArgs = {
    id: Scalars['ID'];
};

export type QueryCoresArgs = {
    find?: Maybe<CoresFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryCoresPastArgs = {
    find?: Maybe<CoresFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryCoresUpcomingArgs = {
    find?: Maybe<CoresFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryCoreArgs = {
    id: Scalars['ID'];
};

export type QueryDragonsArgs = {
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
};

export type QueryDragonArgs = {
    id: Scalars['ID'];
};

export type QueryHistoriesArgs = {
    find?: Maybe<HistoryFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryHistoriesResultArgs = {
    find?: Maybe<HistoryFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryHistoryArgs = {
    id: Scalars['ID'];
};

export type QueryLandpadsArgs = {
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
};

export type QueryLandpadArgs = {
    id: Scalars['ID'];
};

export type QueryLaunchesArgs = {
    find?: Maybe<LaunchFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryLaunchesPastArgs = {
    find?: Maybe<LaunchFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryLaunchesPastResultArgs = {
    find?: Maybe<LaunchFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryLaunchesUpcomingArgs = {
    find?: Maybe<LaunchFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryLaunchArgs = {
    id: Scalars['ID'];
};

export type QueryLaunchLatestArgs = {
    offset?: Maybe<Scalars['Int']>;
};

export type QueryLaunchNextArgs = {
    offset?: Maybe<Scalars['Int']>;
};

export type QueryLaunchpadsArgs = {
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
};

export type QueryLaunchpadArgs = {
    id: Scalars['ID'];
};

export type QueryMissionsArgs = {
    find?: Maybe<MissionsFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
};

export type QueryMissionsResultArgs = {
    find?: Maybe<MissionsFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
};

export type QueryMissionArgs = {
    id: Scalars['ID'];
};

export type QueryPayloadsArgs = {
    find?: Maybe<PayloadsFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryPayloadArgs = {
    id: Scalars['ID'];
};

export type QueryRocketsArgs = {
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
};

export type QueryRocketsResultArgs = {
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
};

export type QueryRocketArgs = {
    id: Scalars['ID'];
};

export type QueryShipsArgs = {
    find?: Maybe<ShipsFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryShipsResultArgs = {
    find?: Maybe<ShipsFind>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryShipArgs = {
    id: Scalars['ID'];
};

export type Result = {
    __typename?: 'Result';
    totalCount?: Maybe<Scalars['Int']>;
};

export type Roadster = {
    __typename?: 'Roadster';
    apoapsis_au?: Maybe<Scalars['Float']>;
    details?: Maybe<Scalars['String']>;
    earth_distance_km?: Maybe<Scalars['Float']>;
    earth_distance_mi?: Maybe<Scalars['Float']>;
    eccentricity?: Maybe<Scalars['Float']>;
    epoch_jd?: Maybe<Scalars['Float']>;
    inclination?: Maybe<Scalars['Float']>;
    launch_date_unix?: Maybe<Scalars['Date']>;
    launch_date_utc?: Maybe<Scalars['Date']>;
    launch_mass_kg?: Maybe<Scalars['Int']>;
    launch_mass_lbs?: Maybe<Scalars['Int']>;
    longitude?: Maybe<Scalars['Float']>;
    mars_distance_km?: Maybe<Scalars['Float']>;
    mars_distance_mi?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
    norad_id?: Maybe<Scalars['Int']>;
    orbit_type?: Maybe<Scalars['Float']>;
    periapsis_arg?: Maybe<Scalars['Float']>;
    periapsis_au?: Maybe<Scalars['Float']>;
    period_days?: Maybe<Scalars['Float']>;
    semi_major_axis_au?: Maybe<Scalars['Float']>;
    speed_kph?: Maybe<Scalars['Float']>;
    speed_mph?: Maybe<Scalars['Float']>;
    wikipedia?: Maybe<Scalars['String']>;
};

export type Rocket = {
    __typename?: 'Rocket';
    active?: Maybe<Scalars['Boolean']>;
    boosters?: Maybe<Scalars['Int']>;
    company?: Maybe<Scalars['String']>;
    cost_per_launch?: Maybe<Scalars['Int']>;
    country?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    diameter?: Maybe<Distance>;
    engines?: Maybe<RocketEngines>;
    first_flight?: Maybe<Scalars['Date']>;
    first_stage?: Maybe<RocketFirstStage>;
    height?: Maybe<Distance>;
    id?: Maybe<Scalars['ID']>;
    landing_legs?: Maybe<RocketLandingLegs>;
    mass?: Maybe<Mass>;
    name?: Maybe<Scalars['String']>;
    payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
    second_stage?: Maybe<RocketSecondStage>;
    stages?: Maybe<Scalars['Int']>;
    success_rate_pct?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
    wikipedia?: Maybe<Scalars['String']>;
};

export type RocketEngines = {
    __typename?: 'RocketEngines';
    number?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    layout?: Maybe<Scalars['String']>;
    engine_loss_max?: Maybe<Scalars['String']>;
    propellant_1?: Maybe<Scalars['String']>;
    propellant_2?: Maybe<Scalars['String']>;
    thrust_sea_level?: Maybe<Force>;
    thrust_vacuum?: Maybe<Force>;
    thrust_to_weight?: Maybe<Scalars['Float']>;
};

export type RocketFirstStage = {
    __typename?: 'RocketFirstStage';
    burn_time_sec?: Maybe<Scalars['Int']>;
    engines?: Maybe<Scalars['Int']>;
    fuel_amount_tons?: Maybe<Scalars['Float']>;
    reusable?: Maybe<Scalars['Boolean']>;
    thrust_sea_level?: Maybe<Force>;
    thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
    __typename?: 'RocketLandingLegs';
    number?: Maybe<Scalars['Int']>;
    material?: Maybe<Scalars['String']>;
};

export type RocketPayloadWeight = {
    __typename?: 'RocketPayloadWeight';
    id?: Maybe<Scalars['String']>;
    kg?: Maybe<Scalars['Int']>;
    lb?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
    __typename?: 'RocketSecondStage';
    burn_time_sec?: Maybe<Scalars['Int']>;
    engines?: Maybe<Scalars['Int']>;
    fuel_amount_tons?: Maybe<Scalars['Float']>;
    payloads?: Maybe<RocketSecondStagePayloads>;
    thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
    __typename?: 'RocketSecondStagePayloadCompositeFairing';
    height?: Maybe<Distance>;
    diameter?: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
    __typename?: 'RocketSecondStagePayloads';
    option_1?: Maybe<Scalars['String']>;
    composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
};

export type RocketsResult = {
    __typename?: 'RocketsResult';
    result?: Maybe<Result>;
    data?: Maybe<Array<Maybe<Rocket>>>;
};

export type Ship = {
    __typename?: 'Ship';
    abs?: Maybe<Scalars['Int']>;
    active?: Maybe<Scalars['Boolean']>;
    attempted_landings?: Maybe<Scalars['Int']>;
    class?: Maybe<Scalars['Int']>;
    course_deg?: Maybe<Scalars['Int']>;
    home_port?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    image?: Maybe<Scalars['String']>;
    imo?: Maybe<Scalars['Int']>;
    missions?: Maybe<Array<Maybe<ShipMission>>>;
    mmsi?: Maybe<Scalars['Int']>;
    model?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    position?: Maybe<ShipLocation>;
    roles?: Maybe<Array<Maybe<Scalars['String']>>>;
    speed_kn?: Maybe<Scalars['Float']>;
    status?: Maybe<Scalars['String']>;
    successful_landings?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
    weight_kg?: Maybe<Scalars['Int']>;
    weight_lbs?: Maybe<Scalars['Int']>;
    year_built?: Maybe<Scalars['Int']>;
};

export type ShipLocation = {
    __typename?: 'ShipLocation';
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
};

export type ShipMission = {
    __typename?: 'ShipMission';
    flight?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type ShipsFind = {
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    model?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['String']>;
    active?: Maybe<Scalars['Boolean']>;
    imo?: Maybe<Scalars['Int']>;
    mmsi?: Maybe<Scalars['Int']>;
    abs?: Maybe<Scalars['Int']>;
    class?: Maybe<Scalars['Int']>;
    weight_lbs?: Maybe<Scalars['Int']>;
    weight_kg?: Maybe<Scalars['Int']>;
    year_built?: Maybe<Scalars['Int']>;
    home_port?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    speed_kn?: Maybe<Scalars['Int']>;
    course_deg?: Maybe<Scalars['Int']>;
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    successful_landings?: Maybe<Scalars['Int']>;
    attempted_landings?: Maybe<Scalars['Int']>;
    mission?: Maybe<Scalars['String']>;
};

export type ShipsResult = {
    __typename?: 'ShipsResult';
    result?: Maybe<Result>;
    data?: Maybe<Array<Maybe<Ship>>>;
};

export type Volume = {
    __typename?: 'Volume';
    cubic_feet?: Maybe<Scalars['Int']>;
    cubic_meters?: Maybe<Scalars['Int']>;
};

export type GetPastLaunchesQueryVariables = Exact<{
    offset?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
}>;

export type GetPastLaunchesQuery = {
    __typename?: 'Query';
    launchesPast?: Maybe<
        Array<
            Maybe<{
                __typename?: 'Launch';
                id?: Maybe<string>;
                mission_name?: Maybe<string>;
                links?: Maybe<{ __typename?: 'LaunchLinks'; video_link?: Maybe<string> }>;
            }>
        >
    >;
};

export const GetPastLaunchesDocument = gql`
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

/**
 * __useGetPastLaunchesQuery__
 *
 * To run a query within a React component, call `useGetPastLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPastLaunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPastLaunchesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPastLaunchesQuery(
    baseOptions?: Apollo.QueryHookOptions<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>(GetPastLaunchesDocument, options);
}
export function useGetPastLaunchesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>(GetPastLaunchesDocument, options);
}
export type GetPastLaunchesQueryHookResult = ReturnType<typeof useGetPastLaunchesQuery>;
export type GetPastLaunchesLazyQueryHookResult = ReturnType<typeof useGetPastLaunchesLazyQuery>;
export type GetPastLaunchesQueryResult = Apollo.QueryResult<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>;
export type AddressKeySpecifier = ('address' | 'city' | 'state' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
    address?: FieldPolicy<any> | FieldReadFunction<any>;
    city?: FieldPolicy<any> | FieldReadFunction<any>;
    state?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CapsuleKeySpecifier = (
    | 'id'
    | 'landings'
    | 'missions'
    | 'original_launch'
    | 'reuse_count'
    | 'status'
    | 'type'
    | 'dragon'
    | CapsuleKeySpecifier
)[];
export type CapsuleFieldPolicy = {
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    landings?: FieldPolicy<any> | FieldReadFunction<any>;
    missions?: FieldPolicy<any> | FieldReadFunction<any>;
    original_launch?: FieldPolicy<any> | FieldReadFunction<any>;
    reuse_count?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    type?: FieldPolicy<any> | FieldReadFunction<any>;
    dragon?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CapsuleMissionKeySpecifier = ('flight' | 'name' | CapsuleMissionKeySpecifier)[];
export type CapsuleMissionFieldPolicy = {
    flight?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CoreKeySpecifier = (
    | 'asds_attempts'
    | 'asds_landings'
    | 'block'
    | 'id'
    | 'missions'
    | 'original_launch'
    | 'reuse_count'
    | 'rtls_attempts'
    | 'rtls_landings'
    | 'status'
    | 'water_landing'
    | CoreKeySpecifier
)[];
export type CoreFieldPolicy = {
    asds_attempts?: FieldPolicy<any> | FieldReadFunction<any>;
    asds_landings?: FieldPolicy<any> | FieldReadFunction<any>;
    block?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    missions?: FieldPolicy<any> | FieldReadFunction<any>;
    original_launch?: FieldPolicy<any> | FieldReadFunction<any>;
    reuse_count?: FieldPolicy<any> | FieldReadFunction<any>;
    rtls_attempts?: FieldPolicy<any> | FieldReadFunction<any>;
    rtls_landings?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    water_landing?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CoreMissionKeySpecifier = ('name' | 'flight' | CoreMissionKeySpecifier)[];
export type CoreMissionFieldPolicy = {
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    flight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DistanceKeySpecifier = ('feet' | 'meters' | DistanceKeySpecifier)[];
export type DistanceFieldPolicy = {
    feet?: FieldPolicy<any> | FieldReadFunction<any>;
    meters?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DragonKeySpecifier = (
    | 'active'
    | 'crew_capacity'
    | 'description'
    | 'diameter'
    | 'dry_mass_kg'
    | 'dry_mass_lb'
    | 'first_flight'
    | 'heat_shield'
    | 'height_w_trunk'
    | 'id'
    | 'launch_payload_mass'
    | 'launch_payload_vol'
    | 'name'
    | 'orbit_duration_yr'
    | 'pressurized_capsule'
    | 'return_payload_mass'
    | 'return_payload_vol'
    | 'sidewall_angle_deg'
    | 'thrusters'
    | 'trunk'
    | 'type'
    | 'wikipedia'
    | DragonKeySpecifier
)[];
export type DragonFieldPolicy = {
    active?: FieldPolicy<any> | FieldReadFunction<any>;
    crew_capacity?: FieldPolicy<any> | FieldReadFunction<any>;
    description?: FieldPolicy<any> | FieldReadFunction<any>;
    diameter?: FieldPolicy<any> | FieldReadFunction<any>;
    dry_mass_kg?: FieldPolicy<any> | FieldReadFunction<any>;
    dry_mass_lb?: FieldPolicy<any> | FieldReadFunction<any>;
    first_flight?: FieldPolicy<any> | FieldReadFunction<any>;
    heat_shield?: FieldPolicy<any> | FieldReadFunction<any>;
    height_w_trunk?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_payload_mass?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_payload_vol?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    orbit_duration_yr?: FieldPolicy<any> | FieldReadFunction<any>;
    pressurized_capsule?: FieldPolicy<any> | FieldReadFunction<any>;
    return_payload_mass?: FieldPolicy<any> | FieldReadFunction<any>;
    return_payload_vol?: FieldPolicy<any> | FieldReadFunction<any>;
    sidewall_angle_deg?: FieldPolicy<any> | FieldReadFunction<any>;
    thrusters?: FieldPolicy<any> | FieldReadFunction<any>;
    trunk?: FieldPolicy<any> | FieldReadFunction<any>;
    type?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DragonHeatShieldKeySpecifier = (
    | 'dev_partner'
    | 'material'
    | 'size_meters'
    | 'temp_degrees'
    | DragonHeatShieldKeySpecifier
)[];
export type DragonHeatShieldFieldPolicy = {
    dev_partner?: FieldPolicy<any> | FieldReadFunction<any>;
    material?: FieldPolicy<any> | FieldReadFunction<any>;
    size_meters?: FieldPolicy<any> | FieldReadFunction<any>;
    temp_degrees?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DragonPressurizedCapsuleKeySpecifier = ('payload_volume' | DragonPressurizedCapsuleKeySpecifier)[];
export type DragonPressurizedCapsuleFieldPolicy = {
    payload_volume?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DragonThrustKeySpecifier = (
    | 'amount'
    | 'fuel_1'
    | 'fuel_2'
    | 'pods'
    | 'thrust'
    | 'type'
    | DragonThrustKeySpecifier
)[];
export type DragonThrustFieldPolicy = {
    amount?: FieldPolicy<any> | FieldReadFunction<any>;
    fuel_1?: FieldPolicy<any> | FieldReadFunction<any>;
    fuel_2?: FieldPolicy<any> | FieldReadFunction<any>;
    pods?: FieldPolicy<any> | FieldReadFunction<any>;
    thrust?: FieldPolicy<any> | FieldReadFunction<any>;
    type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DragonTrunkKeySpecifier = ('cargo' | 'trunk_volume' | DragonTrunkKeySpecifier)[];
export type DragonTrunkFieldPolicy = {
    cargo?: FieldPolicy<any> | FieldReadFunction<any>;
    trunk_volume?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DragonTrunkCargoKeySpecifier = ('solar_array' | 'unpressurized_cargo' | DragonTrunkCargoKeySpecifier)[];
export type DragonTrunkCargoFieldPolicy = {
    solar_array?: FieldPolicy<any> | FieldReadFunction<any>;
    unpressurized_cargo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ForceKeySpecifier = ('kN' | 'lbf' | ForceKeySpecifier)[];
export type ForceFieldPolicy = {
    kN?: FieldPolicy<any> | FieldReadFunction<any>;
    lbf?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HistoriesResultKeySpecifier = ('result' | 'data' | HistoriesResultKeySpecifier)[];
export type HistoriesResultFieldPolicy = {
    result?: FieldPolicy<any> | FieldReadFunction<any>;
    data?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HistoryKeySpecifier = (
    | 'details'
    | 'event_date_unix'
    | 'event_date_utc'
    | 'id'
    | 'links'
    | 'title'
    | 'flight'
    | HistoryKeySpecifier
)[];
export type HistoryFieldPolicy = {
    details?: FieldPolicy<any> | FieldReadFunction<any>;
    event_date_unix?: FieldPolicy<any> | FieldReadFunction<any>;
    event_date_utc?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    links?: FieldPolicy<any> | FieldReadFunction<any>;
    title?: FieldPolicy<any> | FieldReadFunction<any>;
    flight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type InfoKeySpecifier = (
    | 'ceo'
    | 'coo'
    | 'cto_propulsion'
    | 'cto'
    | 'employees'
    | 'founded'
    | 'founder'
    | 'headquarters'
    | 'launch_sites'
    | 'links'
    | 'name'
    | 'summary'
    | 'test_sites'
    | 'valuation'
    | 'vehicles'
    | InfoKeySpecifier
)[];
export type InfoFieldPolicy = {
    ceo?: FieldPolicy<any> | FieldReadFunction<any>;
    coo?: FieldPolicy<any> | FieldReadFunction<any>;
    cto_propulsion?: FieldPolicy<any> | FieldReadFunction<any>;
    cto?: FieldPolicy<any> | FieldReadFunction<any>;
    employees?: FieldPolicy<any> | FieldReadFunction<any>;
    founded?: FieldPolicy<any> | FieldReadFunction<any>;
    founder?: FieldPolicy<any> | FieldReadFunction<any>;
    headquarters?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_sites?: FieldPolicy<any> | FieldReadFunction<any>;
    links?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    summary?: FieldPolicy<any> | FieldReadFunction<any>;
    test_sites?: FieldPolicy<any> | FieldReadFunction<any>;
    valuation?: FieldPolicy<any> | FieldReadFunction<any>;
    vehicles?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type InfoLinksKeySpecifier = ('elon_twitter' | 'flickr' | 'twitter' | 'website' | InfoLinksKeySpecifier)[];
export type InfoLinksFieldPolicy = {
    elon_twitter?: FieldPolicy<any> | FieldReadFunction<any>;
    flickr?: FieldPolicy<any> | FieldReadFunction<any>;
    twitter?: FieldPolicy<any> | FieldReadFunction<any>;
    website?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LandpadKeySpecifier = (
    | 'attempted_landings'
    | 'details'
    | 'full_name'
    | 'id'
    | 'landing_type'
    | 'location'
    | 'status'
    | 'successful_landings'
    | 'wikipedia'
    | LandpadKeySpecifier
)[];
export type LandpadFieldPolicy = {
    attempted_landings?: FieldPolicy<any> | FieldReadFunction<any>;
    details?: FieldPolicy<any> | FieldReadFunction<any>;
    full_name?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    landing_type?: FieldPolicy<any> | FieldReadFunction<any>;
    location?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    successful_landings?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchKeySpecifier = (
    | 'details'
    | 'id'
    | 'is_tentative'
    | 'launch_date_local'
    | 'launch_date_unix'
    | 'launch_date_utc'
    | 'launch_site'
    | 'launch_success'
    | 'launch_year'
    | 'links'
    | 'mission_id'
    | 'mission_name'
    | 'rocket'
    | 'static_fire_date_unix'
    | 'static_fire_date_utc'
    | 'telemetry'
    | 'tentative_max_precision'
    | 'upcoming'
    | 'ships'
    | LaunchKeySpecifier
)[];
export type LaunchFieldPolicy = {
    details?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    is_tentative?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_date_local?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_date_unix?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_date_utc?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_site?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_success?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_year?: FieldPolicy<any> | FieldReadFunction<any>;
    links?: FieldPolicy<any> | FieldReadFunction<any>;
    mission_id?: FieldPolicy<any> | FieldReadFunction<any>;
    mission_name?: FieldPolicy<any> | FieldReadFunction<any>;
    rocket?: FieldPolicy<any> | FieldReadFunction<any>;
    static_fire_date_unix?: FieldPolicy<any> | FieldReadFunction<any>;
    static_fire_date_utc?: FieldPolicy<any> | FieldReadFunction<any>;
    telemetry?: FieldPolicy<any> | FieldReadFunction<any>;
    tentative_max_precision?: FieldPolicy<any> | FieldReadFunction<any>;
    upcoming?: FieldPolicy<any> | FieldReadFunction<any>;
    ships?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchLinksKeySpecifier = (
    | 'article_link'
    | 'flickr_images'
    | 'mission_patch_small'
    | 'mission_patch'
    | 'presskit'
    | 'reddit_campaign'
    | 'reddit_launch'
    | 'reddit_media'
    | 'reddit_recovery'
    | 'video_link'
    | 'wikipedia'
    | LaunchLinksKeySpecifier
)[];
export type LaunchLinksFieldPolicy = {
    article_link?: FieldPolicy<any> | FieldReadFunction<any>;
    flickr_images?: FieldPolicy<any> | FieldReadFunction<any>;
    mission_patch_small?: FieldPolicy<any> | FieldReadFunction<any>;
    mission_patch?: FieldPolicy<any> | FieldReadFunction<any>;
    presskit?: FieldPolicy<any> | FieldReadFunction<any>;
    reddit_campaign?: FieldPolicy<any> | FieldReadFunction<any>;
    reddit_launch?: FieldPolicy<any> | FieldReadFunction<any>;
    reddit_media?: FieldPolicy<any> | FieldReadFunction<any>;
    reddit_recovery?: FieldPolicy<any> | FieldReadFunction<any>;
    video_link?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchRocketKeySpecifier = (
    | 'fairings'
    | 'first_stage'
    | 'rocket_name'
    | 'rocket_type'
    | 'rocket'
    | 'second_stage'
    | LaunchRocketKeySpecifier
)[];
export type LaunchRocketFieldPolicy = {
    fairings?: FieldPolicy<any> | FieldReadFunction<any>;
    first_stage?: FieldPolicy<any> | FieldReadFunction<any>;
    rocket_name?: FieldPolicy<any> | FieldReadFunction<any>;
    rocket_type?: FieldPolicy<any> | FieldReadFunction<any>;
    rocket?: FieldPolicy<any> | FieldReadFunction<any>;
    second_stage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchRocketFairingsKeySpecifier = (
    | 'recovered'
    | 'recovery_attempt'
    | 'reused'
    | 'ship'
    | LaunchRocketFairingsKeySpecifier
)[];
export type LaunchRocketFairingsFieldPolicy = {
    recovered?: FieldPolicy<any> | FieldReadFunction<any>;
    recovery_attempt?: FieldPolicy<any> | FieldReadFunction<any>;
    reused?: FieldPolicy<any> | FieldReadFunction<any>;
    ship?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchRocketFirstStageKeySpecifier = ('cores' | LaunchRocketFirstStageKeySpecifier)[];
export type LaunchRocketFirstStageFieldPolicy = {
    cores?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchRocketFirstStageCoreKeySpecifier = (
    | 'block'
    | 'core'
    | 'flight'
    | 'gridfins'
    | 'land_success'
    | 'landing_intent'
    | 'landing_type'
    | 'landing_vehicle'
    | 'legs'
    | 'reused'
    | LaunchRocketFirstStageCoreKeySpecifier
)[];
export type LaunchRocketFirstStageCoreFieldPolicy = {
    block?: FieldPolicy<any> | FieldReadFunction<any>;
    core?: FieldPolicy<any> | FieldReadFunction<any>;
    flight?: FieldPolicy<any> | FieldReadFunction<any>;
    gridfins?: FieldPolicy<any> | FieldReadFunction<any>;
    land_success?: FieldPolicy<any> | FieldReadFunction<any>;
    landing_intent?: FieldPolicy<any> | FieldReadFunction<any>;
    landing_type?: FieldPolicy<any> | FieldReadFunction<any>;
    landing_vehicle?: FieldPolicy<any> | FieldReadFunction<any>;
    legs?: FieldPolicy<any> | FieldReadFunction<any>;
    reused?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchRocketSecondStageKeySpecifier = ('block' | 'payloads' | LaunchRocketSecondStageKeySpecifier)[];
export type LaunchRocketSecondStageFieldPolicy = {
    block?: FieldPolicy<any> | FieldReadFunction<any>;
    payloads?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchSiteKeySpecifier = ('site_id' | 'site_name_long' | 'site_name' | LaunchSiteKeySpecifier)[];
export type LaunchSiteFieldPolicy = {
    site_id?: FieldPolicy<any> | FieldReadFunction<any>;
    site_name_long?: FieldPolicy<any> | FieldReadFunction<any>;
    site_name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchTelemetryKeySpecifier = ('flight_club' | LaunchTelemetryKeySpecifier)[];
export type LaunchTelemetryFieldPolicy = {
    flight_club?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchesPastResultKeySpecifier = ('result' | 'data' | LaunchesPastResultKeySpecifier)[];
export type LaunchesPastResultFieldPolicy = {
    result?: FieldPolicy<any> | FieldReadFunction<any>;
    data?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LaunchpadKeySpecifier = (
    | 'attempted_launches'
    | 'details'
    | 'id'
    | 'location'
    | 'name'
    | 'status'
    | 'successful_launches'
    | 'vehicles_launched'
    | 'wikipedia'
    | LaunchpadKeySpecifier
)[];
export type LaunchpadFieldPolicy = {
    attempted_launches?: FieldPolicy<any> | FieldReadFunction<any>;
    details?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    location?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    successful_launches?: FieldPolicy<any> | FieldReadFunction<any>;
    vehicles_launched?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LinkKeySpecifier = ('article' | 'reddit' | 'wikipedia' | LinkKeySpecifier)[];
export type LinkFieldPolicy = {
    article?: FieldPolicy<any> | FieldReadFunction<any>;
    reddit?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationKeySpecifier = ('latitude' | 'longitude' | 'name' | 'region' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
    latitude?: FieldPolicy<any> | FieldReadFunction<any>;
    longitude?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    region?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MassKeySpecifier = ('kg' | 'lb' | MassKeySpecifier)[];
export type MassFieldPolicy = {
    kg?: FieldPolicy<any> | FieldReadFunction<any>;
    lb?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MissionKeySpecifier = (
    | 'description'
    | 'id'
    | 'manufacturers'
    | 'name'
    | 'twitter'
    | 'website'
    | 'wikipedia'
    | 'payloads'
    | MissionKeySpecifier
)[];
export type MissionFieldPolicy = {
    description?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    manufacturers?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    twitter?: FieldPolicy<any> | FieldReadFunction<any>;
    website?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
    payloads?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MissionResultKeySpecifier = ('result' | 'data' | MissionResultKeySpecifier)[];
export type MissionResultFieldPolicy = {
    result?: FieldPolicy<any> | FieldReadFunction<any>;
    data?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PayloadKeySpecifier = (
    | 'customers'
    | 'id'
    | 'manufacturer'
    | 'nationality'
    | 'norad_id'
    | 'orbit_params'
    | 'orbit'
    | 'payload_mass_kg'
    | 'payload_mass_lbs'
    | 'payload_type'
    | 'reused'
    | PayloadKeySpecifier
)[];
export type PayloadFieldPolicy = {
    customers?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    manufacturer?: FieldPolicy<any> | FieldReadFunction<any>;
    nationality?: FieldPolicy<any> | FieldReadFunction<any>;
    norad_id?: FieldPolicy<any> | FieldReadFunction<any>;
    orbit_params?: FieldPolicy<any> | FieldReadFunction<any>;
    orbit?: FieldPolicy<any> | FieldReadFunction<any>;
    payload_mass_kg?: FieldPolicy<any> | FieldReadFunction<any>;
    payload_mass_lbs?: FieldPolicy<any> | FieldReadFunction<any>;
    payload_type?: FieldPolicy<any> | FieldReadFunction<any>;
    reused?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PayloadOrbitParamsKeySpecifier = (
    | 'apoapsis_km'
    | 'arg_of_pericenter'
    | 'eccentricity'
    | 'epoch'
    | 'inclination_deg'
    | 'lifespan_years'
    | 'longitude'
    | 'mean_anomaly'
    | 'mean_motion'
    | 'periapsis_km'
    | 'period_min'
    | 'raan'
    | 'reference_system'
    | 'regime'
    | 'semi_major_axis_km'
    | PayloadOrbitParamsKeySpecifier
)[];
export type PayloadOrbitParamsFieldPolicy = {
    apoapsis_km?: FieldPolicy<any> | FieldReadFunction<any>;
    arg_of_pericenter?: FieldPolicy<any> | FieldReadFunction<any>;
    eccentricity?: FieldPolicy<any> | FieldReadFunction<any>;
    epoch?: FieldPolicy<any> | FieldReadFunction<any>;
    inclination_deg?: FieldPolicy<any> | FieldReadFunction<any>;
    lifespan_years?: FieldPolicy<any> | FieldReadFunction<any>;
    longitude?: FieldPolicy<any> | FieldReadFunction<any>;
    mean_anomaly?: FieldPolicy<any> | FieldReadFunction<any>;
    mean_motion?: FieldPolicy<any> | FieldReadFunction<any>;
    periapsis_km?: FieldPolicy<any> | FieldReadFunction<any>;
    period_min?: FieldPolicy<any> | FieldReadFunction<any>;
    raan?: FieldPolicy<any> | FieldReadFunction<any>;
    reference_system?: FieldPolicy<any> | FieldReadFunction<any>;
    regime?: FieldPolicy<any> | FieldReadFunction<any>;
    semi_major_axis_km?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
    | 'capsules'
    | 'capsulesPast'
    | 'capsulesUpcoming'
    | 'capsule'
    | 'company'
    | 'cores'
    | 'coresPast'
    | 'coresUpcoming'
    | 'core'
    | 'dragons'
    | 'dragon'
    | 'histories'
    | 'historiesResult'
    | 'history'
    | 'landpads'
    | 'landpad'
    | 'launches'
    | 'launchesPast'
    | 'launchesPastResult'
    | 'launchesUpcoming'
    | 'launch'
    | 'launchLatest'
    | 'launchNext'
    | 'launchpads'
    | 'launchpad'
    | 'missions'
    | 'missionsResult'
    | 'mission'
    | 'payloads'
    | 'payload'
    | 'roadster'
    | 'rockets'
    | 'rocketsResult'
    | 'rocket'
    | 'ships'
    | 'shipsResult'
    | 'ship'
    | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
    capsules?: FieldPolicy<any> | FieldReadFunction<any>;
    capsulesPast?: FieldPolicy<any> | FieldReadFunction<any>;
    capsulesUpcoming?: FieldPolicy<any> | FieldReadFunction<any>;
    capsule?: FieldPolicy<any> | FieldReadFunction<any>;
    company?: FieldPolicy<any> | FieldReadFunction<any>;
    cores?: FieldPolicy<any> | FieldReadFunction<any>;
    coresPast?: FieldPolicy<any> | FieldReadFunction<any>;
    coresUpcoming?: FieldPolicy<any> | FieldReadFunction<any>;
    core?: FieldPolicy<any> | FieldReadFunction<any>;
    dragons?: FieldPolicy<any> | FieldReadFunction<any>;
    dragon?: FieldPolicy<any> | FieldReadFunction<any>;
    histories?: FieldPolicy<any> | FieldReadFunction<any>;
    historiesResult?: FieldPolicy<any> | FieldReadFunction<any>;
    history?: FieldPolicy<any> | FieldReadFunction<any>;
    landpads?: FieldPolicy<any> | FieldReadFunction<any>;
    landpad?: FieldPolicy<any> | FieldReadFunction<any>;
    launches?: FieldPolicy<any> | FieldReadFunction<any>;
    launchesPast?: FieldPolicy<any> | FieldReadFunction<any>;
    launchesPastResult?: FieldPolicy<any> | FieldReadFunction<any>;
    launchesUpcoming?: FieldPolicy<any> | FieldReadFunction<any>;
    launch?: FieldPolicy<any> | FieldReadFunction<any>;
    launchLatest?: FieldPolicy<any> | FieldReadFunction<any>;
    launchNext?: FieldPolicy<any> | FieldReadFunction<any>;
    launchpads?: FieldPolicy<any> | FieldReadFunction<any>;
    launchpad?: FieldPolicy<any> | FieldReadFunction<any>;
    missions?: FieldPolicy<any> | FieldReadFunction<any>;
    missionsResult?: FieldPolicy<any> | FieldReadFunction<any>;
    mission?: FieldPolicy<any> | FieldReadFunction<any>;
    payloads?: FieldPolicy<any> | FieldReadFunction<any>;
    payload?: FieldPolicy<any> | FieldReadFunction<any>;
    roadster?: FieldPolicy<any> | FieldReadFunction<any>;
    rockets?: FieldPolicy<any> | FieldReadFunction<any>;
    rocketsResult?: FieldPolicy<any> | FieldReadFunction<any>;
    rocket?: FieldPolicy<any> | FieldReadFunction<any>;
    ships?: FieldPolicy<any> | FieldReadFunction<any>;
    shipsResult?: FieldPolicy<any> | FieldReadFunction<any>;
    ship?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ResultKeySpecifier = ('totalCount' | ResultKeySpecifier)[];
export type ResultFieldPolicy = {
    totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RoadsterKeySpecifier = (
    | 'apoapsis_au'
    | 'details'
    | 'earth_distance_km'
    | 'earth_distance_mi'
    | 'eccentricity'
    | 'epoch_jd'
    | 'inclination'
    | 'launch_date_unix'
    | 'launch_date_utc'
    | 'launch_mass_kg'
    | 'launch_mass_lbs'
    | 'longitude'
    | 'mars_distance_km'
    | 'mars_distance_mi'
    | 'name'
    | 'norad_id'
    | 'orbit_type'
    | 'periapsis_arg'
    | 'periapsis_au'
    | 'period_days'
    | 'semi_major_axis_au'
    | 'speed_kph'
    | 'speed_mph'
    | 'wikipedia'
    | RoadsterKeySpecifier
)[];
export type RoadsterFieldPolicy = {
    apoapsis_au?: FieldPolicy<any> | FieldReadFunction<any>;
    details?: FieldPolicy<any> | FieldReadFunction<any>;
    earth_distance_km?: FieldPolicy<any> | FieldReadFunction<any>;
    earth_distance_mi?: FieldPolicy<any> | FieldReadFunction<any>;
    eccentricity?: FieldPolicy<any> | FieldReadFunction<any>;
    epoch_jd?: FieldPolicy<any> | FieldReadFunction<any>;
    inclination?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_date_unix?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_date_utc?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_mass_kg?: FieldPolicy<any> | FieldReadFunction<any>;
    launch_mass_lbs?: FieldPolicy<any> | FieldReadFunction<any>;
    longitude?: FieldPolicy<any> | FieldReadFunction<any>;
    mars_distance_km?: FieldPolicy<any> | FieldReadFunction<any>;
    mars_distance_mi?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    norad_id?: FieldPolicy<any> | FieldReadFunction<any>;
    orbit_type?: FieldPolicy<any> | FieldReadFunction<any>;
    periapsis_arg?: FieldPolicy<any> | FieldReadFunction<any>;
    periapsis_au?: FieldPolicy<any> | FieldReadFunction<any>;
    period_days?: FieldPolicy<any> | FieldReadFunction<any>;
    semi_major_axis_au?: FieldPolicy<any> | FieldReadFunction<any>;
    speed_kph?: FieldPolicy<any> | FieldReadFunction<any>;
    speed_mph?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketKeySpecifier = (
    | 'active'
    | 'boosters'
    | 'company'
    | 'cost_per_launch'
    | 'country'
    | 'description'
    | 'diameter'
    | 'engines'
    | 'first_flight'
    | 'first_stage'
    | 'height'
    | 'id'
    | 'landing_legs'
    | 'mass'
    | 'name'
    | 'payload_weights'
    | 'second_stage'
    | 'stages'
    | 'success_rate_pct'
    | 'type'
    | 'wikipedia'
    | RocketKeySpecifier
)[];
export type RocketFieldPolicy = {
    active?: FieldPolicy<any> | FieldReadFunction<any>;
    boosters?: FieldPolicy<any> | FieldReadFunction<any>;
    company?: FieldPolicy<any> | FieldReadFunction<any>;
    cost_per_launch?: FieldPolicy<any> | FieldReadFunction<any>;
    country?: FieldPolicy<any> | FieldReadFunction<any>;
    description?: FieldPolicy<any> | FieldReadFunction<any>;
    diameter?: FieldPolicy<any> | FieldReadFunction<any>;
    engines?: FieldPolicy<any> | FieldReadFunction<any>;
    first_flight?: FieldPolicy<any> | FieldReadFunction<any>;
    first_stage?: FieldPolicy<any> | FieldReadFunction<any>;
    height?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    landing_legs?: FieldPolicy<any> | FieldReadFunction<any>;
    mass?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    payload_weights?: FieldPolicy<any> | FieldReadFunction<any>;
    second_stage?: FieldPolicy<any> | FieldReadFunction<any>;
    stages?: FieldPolicy<any> | FieldReadFunction<any>;
    success_rate_pct?: FieldPolicy<any> | FieldReadFunction<any>;
    type?: FieldPolicy<any> | FieldReadFunction<any>;
    wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketEnginesKeySpecifier = (
    | 'number'
    | 'type'
    | 'version'
    | 'layout'
    | 'engine_loss_max'
    | 'propellant_1'
    | 'propellant_2'
    | 'thrust_sea_level'
    | 'thrust_vacuum'
    | 'thrust_to_weight'
    | RocketEnginesKeySpecifier
)[];
export type RocketEnginesFieldPolicy = {
    number?: FieldPolicy<any> | FieldReadFunction<any>;
    type?: FieldPolicy<any> | FieldReadFunction<any>;
    version?: FieldPolicy<any> | FieldReadFunction<any>;
    layout?: FieldPolicy<any> | FieldReadFunction<any>;
    engine_loss_max?: FieldPolicy<any> | FieldReadFunction<any>;
    propellant_1?: FieldPolicy<any> | FieldReadFunction<any>;
    propellant_2?: FieldPolicy<any> | FieldReadFunction<any>;
    thrust_sea_level?: FieldPolicy<any> | FieldReadFunction<any>;
    thrust_vacuum?: FieldPolicy<any> | FieldReadFunction<any>;
    thrust_to_weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketFirstStageKeySpecifier = (
    | 'burn_time_sec'
    | 'engines'
    | 'fuel_amount_tons'
    | 'reusable'
    | 'thrust_sea_level'
    | 'thrust_vacuum'
    | RocketFirstStageKeySpecifier
)[];
export type RocketFirstStageFieldPolicy = {
    burn_time_sec?: FieldPolicy<any> | FieldReadFunction<any>;
    engines?: FieldPolicy<any> | FieldReadFunction<any>;
    fuel_amount_tons?: FieldPolicy<any> | FieldReadFunction<any>;
    reusable?: FieldPolicy<any> | FieldReadFunction<any>;
    thrust_sea_level?: FieldPolicy<any> | FieldReadFunction<any>;
    thrust_vacuum?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketLandingLegsKeySpecifier = ('number' | 'material' | RocketLandingLegsKeySpecifier)[];
export type RocketLandingLegsFieldPolicy = {
    number?: FieldPolicy<any> | FieldReadFunction<any>;
    material?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketPayloadWeightKeySpecifier = ('id' | 'kg' | 'lb' | 'name' | RocketPayloadWeightKeySpecifier)[];
export type RocketPayloadWeightFieldPolicy = {
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    kg?: FieldPolicy<any> | FieldReadFunction<any>;
    lb?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketSecondStageKeySpecifier = (
    | 'burn_time_sec'
    | 'engines'
    | 'fuel_amount_tons'
    | 'payloads'
    | 'thrust'
    | RocketSecondStageKeySpecifier
)[];
export type RocketSecondStageFieldPolicy = {
    burn_time_sec?: FieldPolicy<any> | FieldReadFunction<any>;
    engines?: FieldPolicy<any> | FieldReadFunction<any>;
    fuel_amount_tons?: FieldPolicy<any> | FieldReadFunction<any>;
    payloads?: FieldPolicy<any> | FieldReadFunction<any>;
    thrust?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketSecondStagePayloadCompositeFairingKeySpecifier = (
    | 'height'
    | 'diameter'
    | RocketSecondStagePayloadCompositeFairingKeySpecifier
)[];
export type RocketSecondStagePayloadCompositeFairingFieldPolicy = {
    height?: FieldPolicy<any> | FieldReadFunction<any>;
    diameter?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketSecondStagePayloadsKeySpecifier = (
    | 'option_1'
    | 'composite_fairing'
    | RocketSecondStagePayloadsKeySpecifier
)[];
export type RocketSecondStagePayloadsFieldPolicy = {
    option_1?: FieldPolicy<any> | FieldReadFunction<any>;
    composite_fairing?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RocketsResultKeySpecifier = ('result' | 'data' | RocketsResultKeySpecifier)[];
export type RocketsResultFieldPolicy = {
    result?: FieldPolicy<any> | FieldReadFunction<any>;
    data?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ShipKeySpecifier = (
    | 'abs'
    | 'active'
    | 'attempted_landings'
    | 'class'
    | 'course_deg'
    | 'home_port'
    | 'id'
    | 'image'
    | 'imo'
    | 'missions'
    | 'mmsi'
    | 'model'
    | 'name'
    | 'position'
    | 'roles'
    | 'speed_kn'
    | 'status'
    | 'successful_landings'
    | 'type'
    | 'url'
    | 'weight_kg'
    | 'weight_lbs'
    | 'year_built'
    | ShipKeySpecifier
)[];
export type ShipFieldPolicy = {
    abs?: FieldPolicy<any> | FieldReadFunction<any>;
    active?: FieldPolicy<any> | FieldReadFunction<any>;
    attempted_landings?: FieldPolicy<any> | FieldReadFunction<any>;
    class?: FieldPolicy<any> | FieldReadFunction<any>;
    course_deg?: FieldPolicy<any> | FieldReadFunction<any>;
    home_port?: FieldPolicy<any> | FieldReadFunction<any>;
    id?: FieldPolicy<any> | FieldReadFunction<any>;
    image?: FieldPolicy<any> | FieldReadFunction<any>;
    imo?: FieldPolicy<any> | FieldReadFunction<any>;
    missions?: FieldPolicy<any> | FieldReadFunction<any>;
    mmsi?: FieldPolicy<any> | FieldReadFunction<any>;
    model?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
    position?: FieldPolicy<any> | FieldReadFunction<any>;
    roles?: FieldPolicy<any> | FieldReadFunction<any>;
    speed_kn?: FieldPolicy<any> | FieldReadFunction<any>;
    status?: FieldPolicy<any> | FieldReadFunction<any>;
    successful_landings?: FieldPolicy<any> | FieldReadFunction<any>;
    type?: FieldPolicy<any> | FieldReadFunction<any>;
    url?: FieldPolicy<any> | FieldReadFunction<any>;
    weight_kg?: FieldPolicy<any> | FieldReadFunction<any>;
    weight_lbs?: FieldPolicy<any> | FieldReadFunction<any>;
    year_built?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ShipLocationKeySpecifier = ('latitude' | 'longitude' | ShipLocationKeySpecifier)[];
export type ShipLocationFieldPolicy = {
    latitude?: FieldPolicy<any> | FieldReadFunction<any>;
    longitude?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ShipMissionKeySpecifier = ('flight' | 'name' | ShipMissionKeySpecifier)[];
export type ShipMissionFieldPolicy = {
    flight?: FieldPolicy<any> | FieldReadFunction<any>;
    name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ShipsResultKeySpecifier = ('result' | 'data' | ShipsResultKeySpecifier)[];
export type ShipsResultFieldPolicy = {
    result?: FieldPolicy<any> | FieldReadFunction<any>;
    data?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VolumeKeySpecifier = ('cubic_feet' | 'cubic_meters' | VolumeKeySpecifier)[];
export type VolumeFieldPolicy = {
    cubic_feet?: FieldPolicy<any> | FieldReadFunction<any>;
    cubic_meters?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypedTypePolicies = TypePolicies & {
    Address?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier);
        fields?: AddressFieldPolicy;
    };
    Capsule?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CapsuleKeySpecifier | (() => undefined | CapsuleKeySpecifier);
        fields?: CapsuleFieldPolicy;
    };
    CapsuleMission?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CapsuleMissionKeySpecifier | (() => undefined | CapsuleMissionKeySpecifier);
        fields?: CapsuleMissionFieldPolicy;
    };
    Core?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CoreKeySpecifier | (() => undefined | CoreKeySpecifier);
        fields?: CoreFieldPolicy;
    };
    CoreMission?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | CoreMissionKeySpecifier | (() => undefined | CoreMissionKeySpecifier);
        fields?: CoreMissionFieldPolicy;
    };
    Distance?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DistanceKeySpecifier | (() => undefined | DistanceKeySpecifier);
        fields?: DistanceFieldPolicy;
    };
    Dragon?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DragonKeySpecifier | (() => undefined | DragonKeySpecifier);
        fields?: DragonFieldPolicy;
    };
    DragonHeatShield?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DragonHeatShieldKeySpecifier | (() => undefined | DragonHeatShieldKeySpecifier);
        fields?: DragonHeatShieldFieldPolicy;
    };
    DragonPressurizedCapsule?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | DragonPressurizedCapsuleKeySpecifier
            | (() => undefined | DragonPressurizedCapsuleKeySpecifier);
        fields?: DragonPressurizedCapsuleFieldPolicy;
    };
    DragonThrust?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DragonThrustKeySpecifier | (() => undefined | DragonThrustKeySpecifier);
        fields?: DragonThrustFieldPolicy;
    };
    DragonTrunk?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DragonTrunkKeySpecifier | (() => undefined | DragonTrunkKeySpecifier);
        fields?: DragonTrunkFieldPolicy;
    };
    DragonTrunkCargo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | DragonTrunkCargoKeySpecifier | (() => undefined | DragonTrunkCargoKeySpecifier);
        fields?: DragonTrunkCargoFieldPolicy;
    };
    Force?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ForceKeySpecifier | (() => undefined | ForceKeySpecifier);
        fields?: ForceFieldPolicy;
    };
    HistoriesResult?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | HistoriesResultKeySpecifier | (() => undefined | HistoriesResultKeySpecifier);
        fields?: HistoriesResultFieldPolicy;
    };
    History?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | HistoryKeySpecifier | (() => undefined | HistoryKeySpecifier);
        fields?: HistoryFieldPolicy;
    };
    Info?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | InfoKeySpecifier | (() => undefined | InfoKeySpecifier);
        fields?: InfoFieldPolicy;
    };
    InfoLinks?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | InfoLinksKeySpecifier | (() => undefined | InfoLinksKeySpecifier);
        fields?: InfoLinksFieldPolicy;
    };
    Landpad?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LandpadKeySpecifier | (() => undefined | LandpadKeySpecifier);
        fields?: LandpadFieldPolicy;
    };
    Launch?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchKeySpecifier | (() => undefined | LaunchKeySpecifier);
        fields?: LaunchFieldPolicy;
    };
    LaunchLinks?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchLinksKeySpecifier | (() => undefined | LaunchLinksKeySpecifier);
        fields?: LaunchLinksFieldPolicy;
    };
    LaunchRocket?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchRocketKeySpecifier | (() => undefined | LaunchRocketKeySpecifier);
        fields?: LaunchRocketFieldPolicy;
    };
    LaunchRocketFairings?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchRocketFairingsKeySpecifier | (() => undefined | LaunchRocketFairingsKeySpecifier);
        fields?: LaunchRocketFairingsFieldPolicy;
    };
    LaunchRocketFirstStage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchRocketFirstStageKeySpecifier | (() => undefined | LaunchRocketFirstStageKeySpecifier);
        fields?: LaunchRocketFirstStageFieldPolicy;
    };
    LaunchRocketFirstStageCore?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | LaunchRocketFirstStageCoreKeySpecifier
            | (() => undefined | LaunchRocketFirstStageCoreKeySpecifier);
        fields?: LaunchRocketFirstStageCoreFieldPolicy;
    };
    LaunchRocketSecondStage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | LaunchRocketSecondStageKeySpecifier
            | (() => undefined | LaunchRocketSecondStageKeySpecifier);
        fields?: LaunchRocketSecondStageFieldPolicy;
    };
    LaunchSite?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchSiteKeySpecifier | (() => undefined | LaunchSiteKeySpecifier);
        fields?: LaunchSiteFieldPolicy;
    };
    LaunchTelemetry?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchTelemetryKeySpecifier | (() => undefined | LaunchTelemetryKeySpecifier);
        fields?: LaunchTelemetryFieldPolicy;
    };
    LaunchesPastResult?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchesPastResultKeySpecifier | (() => undefined | LaunchesPastResultKeySpecifier);
        fields?: LaunchesPastResultFieldPolicy;
    };
    Launchpad?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LaunchpadKeySpecifier | (() => undefined | LaunchpadKeySpecifier);
        fields?: LaunchpadFieldPolicy;
    };
    Link?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LinkKeySpecifier | (() => undefined | LinkKeySpecifier);
        fields?: LinkFieldPolicy;
    };
    Location?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier);
        fields?: LocationFieldPolicy;
    };
    Mass?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MassKeySpecifier | (() => undefined | MassKeySpecifier);
        fields?: MassFieldPolicy;
    };
    Mission?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MissionKeySpecifier | (() => undefined | MissionKeySpecifier);
        fields?: MissionFieldPolicy;
    };
    MissionResult?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | MissionResultKeySpecifier | (() => undefined | MissionResultKeySpecifier);
        fields?: MissionResultFieldPolicy;
    };
    Payload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | PayloadKeySpecifier | (() => undefined | PayloadKeySpecifier);
        fields?: PayloadFieldPolicy;
    };
    PayloadOrbitParams?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | PayloadOrbitParamsKeySpecifier | (() => undefined | PayloadOrbitParamsKeySpecifier);
        fields?: PayloadOrbitParamsFieldPolicy;
    };
    Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
        fields?: QueryFieldPolicy;
    };
    Result?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ResultKeySpecifier | (() => undefined | ResultKeySpecifier);
        fields?: ResultFieldPolicy;
    };
    Roadster?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RoadsterKeySpecifier | (() => undefined | RoadsterKeySpecifier);
        fields?: RoadsterFieldPolicy;
    };
    Rocket?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RocketKeySpecifier | (() => undefined | RocketKeySpecifier);
        fields?: RocketFieldPolicy;
    };
    RocketEngines?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RocketEnginesKeySpecifier | (() => undefined | RocketEnginesKeySpecifier);
        fields?: RocketEnginesFieldPolicy;
    };
    RocketFirstStage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RocketFirstStageKeySpecifier | (() => undefined | RocketFirstStageKeySpecifier);
        fields?: RocketFirstStageFieldPolicy;
    };
    RocketLandingLegs?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RocketLandingLegsKeySpecifier | (() => undefined | RocketLandingLegsKeySpecifier);
        fields?: RocketLandingLegsFieldPolicy;
    };
    RocketPayloadWeight?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RocketPayloadWeightKeySpecifier | (() => undefined | RocketPayloadWeightKeySpecifier);
        fields?: RocketPayloadWeightFieldPolicy;
    };
    RocketSecondStage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RocketSecondStageKeySpecifier | (() => undefined | RocketSecondStageKeySpecifier);
        fields?: RocketSecondStageFieldPolicy;
    };
    RocketSecondStagePayloadCompositeFairing?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RocketSecondStagePayloadCompositeFairingKeySpecifier
            | (() => undefined | RocketSecondStagePayloadCompositeFairingKeySpecifier);
        fields?: RocketSecondStagePayloadCompositeFairingFieldPolicy;
    };
    RocketSecondStagePayloads?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?:
            | false
            | RocketSecondStagePayloadsKeySpecifier
            | (() => undefined | RocketSecondStagePayloadsKeySpecifier);
        fields?: RocketSecondStagePayloadsFieldPolicy;
    };
    RocketsResult?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | RocketsResultKeySpecifier | (() => undefined | RocketsResultKeySpecifier);
        fields?: RocketsResultFieldPolicy;
    };
    Ship?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ShipKeySpecifier | (() => undefined | ShipKeySpecifier);
        fields?: ShipFieldPolicy;
    };
    ShipLocation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ShipLocationKeySpecifier | (() => undefined | ShipLocationKeySpecifier);
        fields?: ShipLocationFieldPolicy;
    };
    ShipMission?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ShipMissionKeySpecifier | (() => undefined | ShipMissionKeySpecifier);
        fields?: ShipMissionFieldPolicy;
    };
    ShipsResult?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | ShipsResultKeySpecifier | (() => undefined | ShipsResultKeySpecifier);
        fields?: ShipsResultFieldPolicy;
    };
    Volume?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
        keyFields?: false | VolumeKeySpecifier | (() => undefined | VolumeKeySpecifier);
        fields?: VolumeFieldPolicy;
    };
};
