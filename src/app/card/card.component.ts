import { Component, OnInit,Input} from '@angular/core';
import{ReceipeService} from '../receipe.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('url')url="";
  @Input('name')name='';
  constructor() { }

  ngOnInit(): void {
  }

}
