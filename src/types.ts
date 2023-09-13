export type RatingsAction =
    | { type: "SET"; payload: { name: string; rating: number } }
    | { type: "DELETE"; payload: { hospitalToDelete: string } };