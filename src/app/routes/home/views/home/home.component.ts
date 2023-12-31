import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private router: Router ,private observer: BreakpointObserver, private change: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res:any) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this.change.detectChanges();
  }

  logout() {
    this.router.navigateByUrl('/');
  }
}
