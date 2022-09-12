import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'Props';
  onSave = () => {
    console.log('test')
  };
  buttonStatus: boolean = false;
  toggleButton = () => {
    this.buttonStatus = !this.buttonStatus
  };
}
