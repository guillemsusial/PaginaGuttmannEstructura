import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  
  constructor() {}

  ngOnInit(){
    $('.div-game').fadeIn("slow");
    $('button[category="all"]').addClass("button-categories-active");

    $('button[category="category1"]').click(function (){
      $('.button-categories').removeClass("button-categories-active");
      $('button[category="category1"]').addClass("button-categories-active");
      $('.div-game').hide("slow");
      $('div[category="category1"]').show("slow");
    }
    )
    $('button[category="category2"]').click(function (){
      $('.button-categories').removeClass("button-categories-active");
      $('button[category="category2"]').addClass("button-categories-active");
      $('.div-game').hide("slow");
      $('div[category="category2"]').show("slow");
    }
    )
    $('button[category="category3"]').click(function (){
      $('.button-categories').removeClass("button-categories-active");
      $('button[category="category3"]').addClass("button-categories-active");
      $('.div-game').hide("slow");
      $('div[category="category3"]').show("slow");
    }
    )
    $('button[category="category4"]').click(function (){
      $('.button-categories').removeClass("button-categories-active");
      $('button[category="category4"]').addClass("button-categories-active");
      $('.div-game').hide("slow");
      $('div[category="category4"]').show("slow");
    }
    )
    $('button[category="category5"]').click(function (){
      $('.button-categories').removeClass("button-categories-active");
      $('button[category="category5"]').addClass("button-categories-active");
      $('.div-game').hide("slow");
      $('div[category="category5"]').show("slow");
    }
    )
    $('button[category="all"]').click(function (){
      $('.div-game').show("slow");
      $('.button-categories').removeClass("button-categories-active");
      $('button[category="all"]').addClass("button-categories-active");
    }
    )
  }

}
