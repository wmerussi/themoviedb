import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SearchService } from '../../services/search.service';
import { SwitchMenuItem } from '../switch-menu/switch-menu-item.interface';
import { Movie } from '../../interfaces/movie.interface';
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

  movieList: Movie[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const {type, query} = params;

      switch (type) {
        case 'most-popular':
          this.initMoviesByType('popular');
          break;
      }
    });
  }

  initMoviesByType(type: string): void {
    this.searchService.discover(type).subscribe((result: QueryResult) => {
      this.movieList = result.results;
    });
  }

  search(searchValue: string): void {
    this.router.navigate(['movie/search', {query: searchValue}]);
  }
}
