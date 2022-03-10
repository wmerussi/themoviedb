import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SearchService } from '../../services/search.service';
import { SwitchMenuItem } from '../switch-menu/switch-menu-item.interface';
import { Movie } from '../../interfaces/movie.interface';
import { kebabToCamelCase } from '../../services/utils';
import { Observable } from 'rxjs';
import { QueryResult } from '../../interfaces/query-result.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  switchMenuItems: SwitchMenuItem[] = [
    {id: 'most-popular', name: 'Most Popular'},
    {id: 'now-playing', name: 'Now Playing'},
    {id: 'top-rated', name: 'Top Rated'},
  ];

  activeSwitchItem: string = 'most-popular';
  movieList: Movie[] = [];
  isSearchPage: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) { }

  get subtitle(): string {
    return this.isSearchPage ? 'Search results' : 'Explore Movies';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const {type, query} = params;

      if (!!type && !this.switchMenuItems.find((item: SwitchMenuItem) => item.id === type)) {
        this.router.navigate(['not-found']);
        return;
      }

      switch (type) {
        case 'most-popular':
        case 'now-playing':
        case 'top-rated':
          this.activeSwitchItem = type;
          this.initMoviesByType(type);
          return;
        case 'search':
          this.onSearchPage(query);
          break;
      }
    });
  }

  onMenuChange(menuItem: SwitchMenuItem): void {
    this.initMoviesByType(menuItem.id);
  }

  initMoviesByType(type: string): void {
    this.resetValues();
    this.router.navigate([`movie/${type}`]);

    // @ts-ignore
    this.subscribeAndFillMovies(this.searchService[kebabToCamelCase(type)]());
  }

  onSearchPage(searchValue: string): void {
    this.resetValues();
    this.isSearchPage = true;

    if (!searchValue) {
      this.subscribeAndFillMovies(this.searchService.searchAll());
      return;
    }

    this.subscribeAndFillMovies(this.searchService.search(searchValue));
  }

  onSearchClick(searchValue: string): void {
    this.router.navigate(['movie/search', {query: searchValue}]);
  }

  subscribeAndFillMovies(observable: Observable<QueryResult>): void {
    observable.subscribe((result: QueryResult) => {
      this.movieList = result.results;
    });
  }

  private resetValues(): void {
    this.isSearchPage = false;
    this.movieList = [];
  }
}
