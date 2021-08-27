export interface Movie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    release_date: Date;
    adult: boolean;
    poster_path: string;
    original_language: string;
    vote_count: number;
    original_title: string;
}