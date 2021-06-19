import { Component, OnInit } from '@angular/core';
import{ReceipeService} from '../receipe.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  search = '';
  RecipeData:any;

  constructor(private recipeService:ReceipeService) { }

  ngOnInit(): void {
  }

  fetchRecipe(){
    this.recipeService.getRecipe(this.search).subscribe((res:any)=>{
      this.RecipeData = res.hits;
    });
  }


}
