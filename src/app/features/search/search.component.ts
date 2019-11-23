import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
 
export class SearchComponent {
  @Output() searchWordEvent = new EventEmitter();

  handleSearch(e) {
    //console.log(e.target.value);
    this.searchWordEvent.emit(e.target.value);
  }
}