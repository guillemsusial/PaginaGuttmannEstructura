import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-welcome-comp',
  templateUrl: './welcome-comp.component.html',
  styleUrls: ['./welcome-comp.component.css']
})
export class WelcomeCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
