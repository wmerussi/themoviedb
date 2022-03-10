import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { Genre } from '../../interfaces/genre.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input() details: Movie = <Movie>{};
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  getPosterUrl(posterFileName: string): string {
    return `https://image.tmdb.org/t/p/w200${posterFileName}`;
  }

  getGenres(genres: Genre[]): string {
    return genres.map((genre: Genre) => genre.name).join(', ');
  }
}
