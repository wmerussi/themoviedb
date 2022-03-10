import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SearchService } from '../../services/search.service';
import { SwitchMenuItem } from '../switch-menu/switch-menu-item.interface';
import { Movie } from '../../interfaces/movie.interface';
import { kebabToCamelCase } from '../../services/utils';

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
        case 'now-playing':
        case 'top-rated':
          this.initMoviesByType(type);
          return;
      }
    });
  }

  onMenuChange(menuItem: SwitchMenuItem): void {
    this.initMoviesByType(menuItem.id);
  }

  initMoviesByType(type: string): void {
    // @ts-ignore
    this.searchService[kebabToCamelCase(type)]().subscribe((result: QueryResult) => {
      this.movieList = result.results;
    });
  }

  search(searchValue: string): void {
    this.router.navigate(['movie/search', {query: searchValue}]);
  }
}
