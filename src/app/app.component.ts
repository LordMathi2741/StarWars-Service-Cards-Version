import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {TheFooterContentComponent} from "./public/the-footer-content/the-footer-content.component";
import {TheToolbarComponent} from "./public/the-toolbar-content/the-toolbar-content.component";
import {ActorsCardComponent} from "./actors/components/actors-card/actors-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheFooterContentComponent, TheToolbarComponent, ActorsCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica05-pc01';
}
