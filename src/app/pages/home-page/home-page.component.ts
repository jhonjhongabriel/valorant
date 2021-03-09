import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  public agents;
  constructor(public http: APIService
    ) { }

  ngOnInit(): void {
    this.http.getAgents().subscribe(res => {
      this.agents =  res;
    })
  }

}
