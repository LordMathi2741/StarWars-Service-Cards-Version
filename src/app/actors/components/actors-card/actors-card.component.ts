import {Component, OnInit} from '@angular/core';
import {ApiFakeService} from "../../service/fake-api.service";
import {MatCard, MatCardContent} from "@angular/material/card";
import {Actor} from "../../model/actor.entity";


@Component({
  selector: 'actors-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './actors-card.component.html',
  styleUrl: './actors-card.component.css'
})
export class ActorsCardComponent implements OnInit {
  actors: Actor[] = [];
  actorData: Actor;
  ngOnInit(): void {
    this.getActors();
  }
  constructor(private actorsService: ApiFakeService) {
    this.actorData = {} as Actor;
  }
  getActors() {
    this.actorsService.getAll().subscribe((data:any) => {
      data.results.forEach((actor: any) => {
        this.actorData = new Actor(actor.name, actor.mass, actor.gender, actor.skin_color,actor.birth_year);
        this.actors.push(this.actorData);
      });
    });
  }


}
