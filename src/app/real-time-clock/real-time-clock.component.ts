import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-real-time-clock',
  templateUrl: './real-time-clock.component.html',
  styleUrls: ['./real-time-clock.component.scss'],
})
export class RealTimeClockComponent implements OnInit {
  private daysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  public hour: any;
  public minute: string = '';
  public second: string = '';
  public ampm: string = '';
  public day: string = '';

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
    this.day = this.daysArray[new Date().getDay()];
  }

  private updateDate(date: Date): void {
    const hours = date.getHours();
    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12 || 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
