import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import e from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('SSR NIH BOSSS ANGULAR & IONIC');
  }
}
