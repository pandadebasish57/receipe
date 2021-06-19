import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ReceipeService} from '../receipe.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  currentRecipeName = "";
  recipeData:any;
  constructor(private activatedRoute:ActivatedRoute ,private recipeService:ReceipeService) {
    this.currentRecipeName = this.activatedRoute.snapshot.params.name;
    console.log(this.currentRecipeName);
   }

  ngOnInit(): void {
    this.recipeService.getRecipeByName(this.currentRecipeName).subscribe((res:any)=>{
      this.recipeData = res.hits[0];
    });
  }

}
