import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:any;
  searchText:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get<any>('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences');
    response.subscribe((data)=>this.events=data.paid);
   }

}
