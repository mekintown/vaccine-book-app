export type RatingsAction =
    | { type: "SET"; payload: { name: string; rating: number } }
    | { type: "DELETE"; payload: { hospitalToDelete: string } };

export interface Hospital {
    id: string;
    name: string;
    address: string;
    district: string;
    province: string;
    postalcode: string;
    tel: string;
    picture: string;
}