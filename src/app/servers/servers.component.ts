import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  statusClass = '';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver','Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' created';
    this.servers.push(this.serverName);
    this.statusClass = 'text-info';
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
