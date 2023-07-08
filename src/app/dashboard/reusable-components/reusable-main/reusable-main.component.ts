import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-reusable-components',
  templateUrl: './reusable-main.component.html',
  styleUrls: ['./reusable-main.component.css']
})
export class ReusableMainComponent {
  title = 'ReUsableComp';
  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'Here is the body of a tweet...',
    isActive: true,
    likesCount: 10
  };
  //previous code
  // onFavoriteChanged(isFavorite: boolean) {
  //   console.log('Favorite changed ' + isFavorite);
  // }

  //new code
  onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
    console.log('Favorite changed ',eventArgs);
  }
}
