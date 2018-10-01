import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((res: NavigationEnd) => {
          this.currentUrl = res.url;
        });
 }

}


