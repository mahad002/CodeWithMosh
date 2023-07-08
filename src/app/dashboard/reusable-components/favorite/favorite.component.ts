import { Component ,EventEmitter,Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  //if it is a small component
  // template: `

  
  styleUrls: ['./favorite.component.css'],
  //if it is a small component
  // styles: [
  //   `
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

 @Input('isFavorite') isFavorite?: boolean;
 @Output('change') click = new EventEmitter();



  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue:this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs{
  newValue:boolean
}
