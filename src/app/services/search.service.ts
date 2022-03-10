import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QueryResult } from '../interfaces/query-result.interface';
import { Movie } from '../interfaces/movie.interface';
import { getIsoDate, kebabToCamelCase } from './utils';

@Injectable({providedIn: 'root'})
export class SearchService {
  private currentPage = 1;
  private url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movie/${id}`);
  }

  search(value: string): Observable<QueryResult> {
    const params = new HttpParams()
      .set('query', value)
      .set('page', this.currentPage);

    this.currentPage++;
    return this.http.get<QueryResult>(`${this.url}/search/movie`, {params});
  }

  searchAll(): Observable<QueryResult> {
    const params = new HttpParams().set('page', this.currentPage);

    this.currentPage++;
    return this.http.get<QueryResult>(`${this.url}/discover/movie`, {params});
  }

  mostPopular(): Observable<QueryResult> {
    const params = new HttpParams()
      .set('sort_by', 'popularity.desc')
      .set('page', this.currentPage);

    this.currentPage++;
    return this.http.get<QueryResult>(`${this.url}/discover/movie`, {params});
  }

  nowPlaying(): Observable<QueryResult> {
    const now = new Date();
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(now.getMonth() - 1);

    const today = getIsoDate(now);
    const lastMonth = getIsoDate(lastMonthDate);

    const params = new HttpParams()
      .set('primary_release_date.gte', lastMonth)
      .set('primary_release_date.lte', today)
      .set('page', this.currentPage);

    this.currentPage++;
    return this.http.get<QueryResult>(`${this.url}/discover/movie`, {params});
  }

  topRated(): Observable<QueryResult> {
    const params = new HttpParams()
      .set('certification_country', 'US')
      .set('certification', 'R')
      .set('sort_by', 'vote_average.desc')
      .set('page', this.currentPage);

    this.currentPage++;
    return this.http.get<QueryResult>(`${this.url}/discover/movie/`, {params});
  }

  getNextPage(type: string, value: string = ''): Observable<QueryResult> {
    switch (type) {
      case 'most-popular':
      case 'now-playing':
      case 'top-rated':
        // @ts-ignore
        return this[kebabToCamelCase(type)]();
      default:
        return value ? this.search(value) : this.searchAll();
    }
  }

  resetCurrentPage(): void {
    this.currentPage = 1;
  }
}
