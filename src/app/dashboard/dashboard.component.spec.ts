import { UserService } from './../user.service';
import { UserSearchComponent } from './../user-search/user-search.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';



import { USERS } from '../mock-users';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let userService;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    userService = jasmine.createSpyObj('UserService', ['getUseres']);
    getHeroesSpy = userService.getUseres.and.returnValue(of(USERS));
    TestBed
        .configureTestingModule({
          declarations: [DashboardComponent, UserSearchComponent],
          imports: [RouterTestingModule.withRoutes([])],
          providers: [{provide: UserService, useValue: userService}]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Heroes');
  });

  it('should call heroService', waitForAsync(() => { 
       expect(getHeroesSpy.calls.any()).toBe(true);
     }));

  it('should display 4 links', waitForAsync(() => {
       expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
     }));
});
