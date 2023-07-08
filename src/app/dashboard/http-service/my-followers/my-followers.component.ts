import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {
  followers!: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) {
    
  }

  ngOnInit(): void {
    let obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined => {
      let id = combined[0].get('id');
      let username = combined[1].get('username');
      return this.service.getAll();
    }
    ))
    .subscribe(followers => {
      this.followers = followers as any[];
    }
    );
  }

  




}
