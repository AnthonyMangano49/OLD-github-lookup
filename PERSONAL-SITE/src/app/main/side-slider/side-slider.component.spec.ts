import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSliderComponent } from './side-slider.component';
import { NavigationService } from '../navigation/navigation.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Page, Pages} from '../pages/utilities';
import { Observable } from 'rxjs/Observable';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';

describe('SideSliderComponent', () => {
  let component: SideSliderComponent;
  let fixture: ComponentFixture<SideSliderComponent>;
  let pages = Pages;
  let nav: NavigationService;
  let MockNav;
  
  MockNav = {currentPage: new BehaviorSubject<Page>(pages[0])};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSliderComponent ],
      providers: [{provide: NavigationService, useValue: MockNav}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSliderComponent);
    component = fixture.componentInstance;
    nav = fixture.debugElement.injector.get(NavigationService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start on init page', fakeAsync(() => {
    component.init();
    
    tick();
    
    expect(component.currentPage).toBe(0);
  }));

  it('should update page', fakeAsync(() => {
    component.init();
    
    nav.currentPage.next(pages[2]);
    tick();
    
    expect(component.currentPage).toBe(2);
  }));
});
