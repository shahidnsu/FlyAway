import { Flight } from "./flight";

export interface Trip {
    _id: string;
    user: string;
    trip: Flight[];
}