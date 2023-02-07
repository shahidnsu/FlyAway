import { Flight } from "./flight";

export interface FlightOption {
    from: string,
    to: string, 
    date: Date,
    availableFlights: Flight[],
    index: number,
    isSuccess: boolean,
    isFailed: boolean
}