import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QueryResult } from '../interfaces/query-result.interface';
import { getIsoDate } from './utils';

@Injectable({providedIn: 'root'})
export class SearchService {
  private url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  search(value: string): Observable<QueryResult> {
    return this.http.get<QueryResult>(`${this.url}/search/movie?query=${value}`);
  }

  searchAll(): Observable<QueryResult> {
    return this.http.get<QueryResult>(`${this.url}/discover/movie`);
  }

  mostPopular(type: string): Observable<QueryResult> {
    return this.http.get<QueryResult>(`${this.url}/discover/movie?sort_by=popularity.desc`);
  }

  nowPlaying(type: string): Observable<QueryResult> {
    const now = new Date();
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(now.getMonth() - 1);

    const today = getIsoDate(now);
    const lastMonth = getIsoDate(lastMonthDate);

    return this.http.get<QueryResult>(
      `${this.url}/discover/movie?primary_release_date.gte=${lastMonth}&primary_release_date.lte=${today}`);
  }

  topRated(type: string): Observable<QueryResult> {
    return this.http.get<QueryResult>(
      `${this.url}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc`);
  }
}
