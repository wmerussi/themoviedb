import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies = [
    {
      imageSrc: 'https://via.placeholder.com/728x90',
      title: 'Star Wars: Episode VII - The Force Awakens',
      date: '24 Nov 2015',
      rating: 72,
    },
    {
      imageSrc: 'https://via.placeholder.com/728x90',
      title: 'Star Wars: Episode VII - The Force Awakens',
      date: '24 Nov 2015',
      rating: 72,
    },
    {
      imageSrc: 'https://via.placeholder.com/728x90',
      title: 'Star Wars: Episode VII - The Force Awakens',
      date: '24 Nov 2015',
      rating: 72,
    },
    {
      imageSrc: 'https://via.placeholder.com/728x90',
      title: 'Star Wars: Episode VII - The Force Awakens',
      date: '24 Nov 2015',
      rating: 72,
    },
    {
      imageSrc: 'https://via.placeholder.com/728x90',
      title: 'Star Wars: Episode VII - The Force Awakens',
      date: '24 Nov 2015',
      rating: 72,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
