import { Component, OnInit, Input } from '@angular/core';
import {} from 'src/app/components/categories/categories.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
})
export class TutorialComponent implements OnInit {
  game: { game: string };

  constructor(private rutaActiva: ActivatedRoute) {
    this.game = { game: this.rutaActiva.snapshot.params['game'] };
  }

  ngOnInit(): void {}
}
