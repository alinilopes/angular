import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  //title = 'lyrics-app';

  searchWord: String = "";
  callLyricWrapper(e) {
    this.searchWord = e;
  }
}