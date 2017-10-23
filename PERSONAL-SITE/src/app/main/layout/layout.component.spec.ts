import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { HomeComponent } from '../pages/home/home.component';
import { SideSliderComponent } from '../side-slider/side-slider.component';
import { ResumeComponent } from '../pages/resume/resume.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../navigation/navigation.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterTestingModule } from '@angular/router/testing';
import { Pages } from '../pages/utilities';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let nav: NavigationService;
  let navigationService = {
    currentPage: new BehaviorSubject(Pages[0]),
    navigate: ()=>{}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LayoutComponent, 
        SideSliderComponent, 
        HomeComponent, 
        ResumeComponent, 
        ContactComponent, 
        SideBarComponent
      ],
      providers: [{provide: NavigationService, useValue: navigationService}],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    nav = TestBed.get(NavigationService);
    fixture.detectChanges();
  });

  it('should init', () => {
    expect(component).toBeTruthy();
    expect(component.pages).toBe(Pages);
    expect(component.currentPage).toBe(Pages[0]);
  });

  it('navigates internally', () => {
    let spy = spyOn(nav, 'navigate');

    component.navigate('anything');

    expect(spy).toHaveBeenCalledWith( component.currentPage, 'anything');
  });

  it('navigates externally', () => {
    let spy = spyOn(window, 'open');

    component.externalNavigate('anything');

    expect(spy).toHaveBeenCalledWith('anything');
  });

  it('navigates to both', fakeAsync(() => {
    let internalSpy= spyOn(component, 'navigate');
    let externalSpy = spyOn(component, 'externalNavigate');

    component.hybridNavigate('external', 'internal');
    tick(1000);

    expect(internalSpy).toHaveBeenCalledWith('internal');
    expect(externalSpy).toHaveBeenCalledWith('external');
  }));

});
