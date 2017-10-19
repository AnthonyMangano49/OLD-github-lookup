import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import { Router } from '@angular/router';
import { WorkItems } from './work-items';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  let router: Router;
  let mockRouter = {navigate: () => {}};
  let workItems = WorkItems

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarComponent ],
      providers: [{provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('populates work items', () => {
    component.workItems = [];
    
    component.ngOnInit();

    expect(component.workItems).toBe(WorkItems);
  });

  describe('navigate', () => {
    let windowSpy, routerSpy;
    beforeEach(() => {
      windowSpy = spyOn(window, 'open');
      routerSpy = spyOn(router, 'navigate');
    });

    it('navs href', () => {
      let item = WorkItems.find(item => item.route.isHref);

      component.navigate(item);

      expect(routerSpy).not.toHaveBeenCalled();
      expect(windowSpy).toHaveBeenCalledWith(item.route.value);
    });

    it('navs router', () => {
      let item = WorkItems.find(item => !item.route.isHref);

      component.navigate(item);
      
      expect(windowSpy).not.toHaveBeenCalled();
      expect(routerSpy).toHaveBeenCalledWith([item.route.value]);
    });
  });
});
