import { Component } from '@angular/core';
declare var Dropbox: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dropbox-angular-demo';
  constructor(){
    const that = this;
  }

  click(){
    Dropbox.choose({
      success: function(files: any) {
        for (var file of files){
          console.log(file.name);
        }
      }
    });
  }
}
