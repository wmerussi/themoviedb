import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QueryResult } from '../interfaces/query-result.interface';

@Injectable({ providedIn: 'root'})
export class SearchService {
  constructor(private http: HttpClient) { }

  search(value: string): Observable<QueryResult> {
    return this.http.get<QueryResult>(`https://api.themoviedb.org/3/search/movie?query=${value}`);
  }

  discover(type: string): Observable<QueryResult> {
    return this.http.get<QueryResult>(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc`);
  }
}
