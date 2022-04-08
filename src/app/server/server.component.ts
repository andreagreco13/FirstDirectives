import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: [`
    .online {
      font-weight: 500;
    }
  `]
})
export class ServerComponent {

  serverId = 0;
  serverStatus = '';

  constructor() {
    this.serverId = Math.round(Math.random() * 100000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
