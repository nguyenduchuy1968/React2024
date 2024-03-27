export interface IPagination<T> {
    page: number,
    total_pages: number,
    results?: T[],
    genres?: T[]
}