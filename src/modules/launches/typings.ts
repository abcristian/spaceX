export interface Launch {
  _id: string;
  flight_number: number;
  mission_name: string;
  mission_id?: (string | null)[] | null;
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  ships?: (string | null)[] | null;
  telemetry: Telemetry;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_failure_details?: LaunchFailureDetails | null;
  links: Links;
  details?: string | null;
  static_fire_date_utc?: string | null;
  static_fire_date_unix?: number | null;
  timeline: Timeline;
}
export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: FirstStage;
  second_stage: SecondStage;
  fairings?: Fairings | null;
}
export interface FirstStage {
  cores?: CoresEntity[] | null;
}
export interface CoresEntity {
  core_serial: string;
  flight: number;
  block?: number | null;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success?: boolean | null;
  landing_intent: boolean;
  landing_type?: string | null;
  landing_vehicle?: null;
}
export interface SecondStage {
  block: number;
  payloads?: PayloadsEntity[] | null;
}
export interface PayloadsEntity {
  payload_id: string;
  norad_id?: (number | null)[] | null;
  reused: boolean;
  customers?: string[] | null;
  nationality?: string | null;
  manufacturer?: string | null;
  payload_type: string;
  payload_mass_kg?: number | null;
  payload_mass_lbs?: number | null;
  orbit: string;
  orbit_params: OrbitParams;
  cap_serial?: string | null;
  mass_returned_kg?: number | null;
  mass_returned_lbs?: number | null;
  flight_time_sec?: number | null;
  cargo_manifest?: string | null;
}
export interface OrbitParams {
  reference_system: string;
  regime: string;
  longitude?: number | null;
  lifespan_years?: number | null;
  epoch?: string | null;
  mean_motion?: number | null;
  raan?: number | null;
  semi_major_axis_km?: number | null;
  eccentricity?: number | null;
  periapsis_km?: number | null;
  apoapsis_km?: number | null;
  inclination_deg?: number | null;
  period_min?: number | null;
  arg_of_pericenter?: number | null;
  mean_anomaly?: number | null;
}
export interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship?: null;
}
export interface Telemetry {
  flight_club?: null;
}
export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}
export interface LaunchFailureDetails {
  time: number;
  altitude?: number | null;
  reason: string;
}
export interface Links {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign?: null;
  reddit_launch?: string | null;
  reddit_recovery?: null;
  reddit_media?: null;
  presskit?: string | null;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images?: null[] | null;
}
export interface Timeline {
  webcast_liftoff: number;
  go_for_prop_loading?: number | null;
  rp1_loading?: number | null;
  stage1_lox_loading?: number | null;
  stage2_lox_loading?: number | null;
  engine_chill?: number | null;
  prelaunch_checks?: number | null;
  propellant_pressurization?: number | null;
  go_for_launch?: number | null;
  ignition?: number | null;
  liftoff?: number | null;
  maxq?: number | null;
  meco?: number | null;
  stage_sep?: number | null;
  second_stage_ignition?: number | null;
  "seco-1"?: number | null;
  dragon_separation?: number | null;
  dragon_solar_deploy?: number | null;
  dragon_bay_door_deploy?: number | null;
  fairing_deploy?: number | null;
  payload_deploy?: number | null;
  second_stage_restart?: number | null;
  "seco-2"?: number | null;
}
