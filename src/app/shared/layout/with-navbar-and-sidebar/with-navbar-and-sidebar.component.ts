import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {filter, map, withLatestFrom} from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
import {MenuModel} from '../../models/menu.model';
import {MENU_LIST} from '../../../core/data/const/menu.data';

@Component({
  selector: 'app-with-navbar-and-sidebar',
  templateUrl: './with-navbar-and-sidebar.component.html',
  styleUrls: ['./with-navbar-and-sidebar.component.scss']
})
export class WithNavbarAndSidebarComponent implements AfterViewInit {

  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  @Input() showUserProfile = false;
  // @Input() menus: MenuModel[];
  // @Input() tabMenus: TabModel[];
  menus: MenuModel[] = MENU_LIST;
  loading: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.loading = false;
    this.router.events.subscribe(
      (event: RouterEvent): void => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      }
    );
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map(result => result.matches)
    );

  ngAfterViewInit(): void {
    this.router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => this.drawer.close());
  }
}
