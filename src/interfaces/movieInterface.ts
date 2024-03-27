export interface IMovie {
    id: number,
    original_title: string,
    poster_path: string,
    vote_average: number,
    genres: [{ id: number, name: string }],
    release_date: string,
    runtime: number,
    overview: string
}