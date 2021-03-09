import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agent-page',
  templateUrl: './agent-page.component.html',
  styles: [
  ]
})
export class AgentPageComponent implements OnInit {

  constructor(public http: APIService, private route: ActivatedRoute) { }

  public uuid = this.route.snapshot.params.id;
  public agent;


  ngOnInit(): void {
    this.loadAgent();
  }

  loadAgent() {
    return this.http.getAgent(this.uuid).subscribe( res => {
      this.agent = res
    })
  }

}
