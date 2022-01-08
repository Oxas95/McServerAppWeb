import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.css']
})
export class ServerManagerComponent implements OnInit {

  item: string = "default";

  constructor() { }

  ngOnInit(): void { }

}
