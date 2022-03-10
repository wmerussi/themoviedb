import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SearchService } from '../../services/search.service';
import { SwitchMenuItem } from '../switch-menu/switch-menu-item.interface';
import { Movie } from '../../interfaces/movie.interface';
import { QueryResult } from '../../interfaces/query-result.interface';
import { SearchParams } from '../../interfaces/search-params.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  switchMenuItems: SwitchMenuItem[] = [
    {id: 'most-popular', name: 'Most Popular'},
    {id: 'now-playing', name: 'Now Playing'},
    {id: 'top-rated', name: 'Top Rated'},
  ];

  activeSwitchItem: string = 'most-popular';
  movieList: Movie[] = [];
  isSearchPage: boolean = false;
  lastParams: SearchParams = {type: '', query: ''};
  subscriptions: Subscription = new Subscription();

  showDetails: boolean = false;
  movieDetails: Movie = <Movie>{};

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) { }

  get subtitle(): string {
    return this.isSearchPage ? 'Search results' : 'Explore Movies';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const {type, query} = params;

      if (type !== 'search') {
        this.resetValues();
      }

      this.lastParams = {type, query};

      if (
        !!type
        && type !== 'search'
        && !this.switchMenuItems.find((item: SwitchMenuItem) => item.id === type)
      ) {
        this.router.navigate(['page-not-found']);
        return;
      }

      if (type === 'search') {
        this.isSearchPage = true;
      } else {
        this.activeSwitchItem = type;
      }

      this.fillMovies();
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onMenuChange(menuItem: SwitchMenuItem): void {
    this.resetValues();

    this.lastParams = {type: menuItem.id, query: ''};
    this.fillMovies();
  }

  fillMovies(): void {
    const {type, query} = this.lastParams;

    this.subscriptions.add(
      this.searchService.getNextPage(type, query).subscribe((result: QueryResult) => {
        this.movieList = this.movieList.concat(result.results);
      }),
    );
  }

  onSearchClick(searchValue: string): void {
    this.resetValues();
    this.router.navigate(['movie/search', {query: searchValue || ''}]);
  }

  atEndOfThePage(_this: any): void {
    _this.fillMovies();
  }

  getMovieDetails(id: number): void {
    this.searchService.getMovie(id).subscribe((movie: Movie) => {
      this.movieDetails = movie;
      console.log(this.movieDetails);
      this.showDetails = true;
    });
  }

  closeModal() {
    this.showDetails = false;
  }

  private resetValues(): void {
    this.searchService.resetCurrentPage();
    this.lastParams = {type: '', query: ''};
    this.isSearchPage = false;
    this.movieList = [];
  }
}
