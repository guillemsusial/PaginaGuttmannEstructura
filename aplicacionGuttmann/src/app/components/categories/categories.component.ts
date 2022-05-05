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
    $('.div-game').show();
    
    $('button[category="category1"]').click(function (){
      $('.div-game').hide();
      $('div[category="category1"]').show();
    }
    )

    $('button[category="category2"]').click(function (){
      $('.div-game').hide();
      $('div[category="category2"]').show();
    }
    )

    $('button[category="category3"]').click(function (){
      $('.div-game').hide();
      $('div[category="category3"]').show();
    }
    )

    $('button[category="category4"]').click(function (){
      $('.div-game').hide();
      $('div[category="category4"]').show();
    }
    )

    $('button[category="category5"]').click(function (){
      $('.div-game').hide();
      $('div[category="category5"]').show();
    }
    )

    $('button[category="all"]').click(function (){
      $('.div-game').show();
    }
    )
  }

}
