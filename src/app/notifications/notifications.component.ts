import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../signalr.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: string[] = [];

  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addNotificationListener(this.onNotificationReceived);
  }

  onNotificationReceived = (message: string) => {
    this.notifications.push(message);
  }
}
