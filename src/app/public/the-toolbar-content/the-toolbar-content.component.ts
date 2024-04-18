import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";


@Component({
  selector: 'the-toolbar-content',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './the-toolbar-content.component.html',
  styleUrl: './the-toolbar-content.component.css'
})
export class TheToolbarComponent {

}
