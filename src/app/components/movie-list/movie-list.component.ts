import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movieList: Movie[] = [];
  @Output() cardClick: EventEmitter<number> = new EventEmitter<number>();

  getPosterUrl(posterFileName: string): string {
    return `https://image.tmdb.org/t/p/w200${posterFileName}`;
  }

  getMovieRating(voteAverage: number): number {
    return voteAverage * 10;
  }

  onCardClick(id: number): void {
    this.cardClick.emit(id);
  }
}
