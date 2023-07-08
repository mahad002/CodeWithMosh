import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isActive') isLiked?: boolean;
  @Input('likesCount') likesCount?: number;

  onClick() {
    if (this.isLiked !== undefined && this.likesCount !== undefined) {
      this.isLiked = !this.isLiked;
      this.likesCount += this.isLiked ? 1 : -1;
    }
  }

}
