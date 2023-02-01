import { FlightSegments } from "./flightSegments";

export interface Flight {
    segments: FlightSegments[],
    price: number
}