import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Questions } from '../question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
   public questions = [];


  constructor(private dataService: DataService) {

   }

  ngOnInit() {
    console.log(this.dataService.getQuestions());
    this.dataService.getQuestions().subscribe(data => {
    console.log("YAHOO GETTING DATA",data);
    this.questions = data;
    console.log("#$$$$$$$",this.questions);
});




  }

  loadData(){
    // this.dataService.getQuestions().subscribe(data => this.questions = data);
    console.log(this.questions);
  }



}
