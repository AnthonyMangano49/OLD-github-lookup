import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { TempApiService } from './temp-api.service';
import { Http } from '@angular/http';
import { tick } from '@angular/core/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let api: TempApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [FormsModule]
      //overriding because temp api is provided directly to the API, not to the module...
    }).overrideComponent(ContactComponent, {
      set: {
        providers: [{provide : TempApiService, useValue: {sendEmail:()=>{}}}]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    api = fixture.debugElement.injector.get(TempApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inits', () => {
    let spy = spyOn(component, 'init');

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  //sloppy on purpose bc I'm bored...
  it('sets values on init', () => {
    component.form = component.message = component.canSubmit = {};

    component.init();

    ['category', 'name', 'message', 'email', 'phone'].forEach(property => {
      expect(component.form[property]).toBeDefined();
    })
    expect(component.message).toBe('Hello');
    expect(component.canSubmit).toBeTruthy();
  });

  describe('submit', () => {
    
    describe('unsuccessful', () => {
      beforeEach(() => component.message = 'spaghetti');

      it('!canSubmit', () => {
        component.canSubmit = false;

        component.submit();

        expect(component.message).toBe('spaghetti');
      });

      it('is missing data', () => {
        component.form.email = component.form.phone = '';

        component.submit();

        expect(component.message).toBe('Phone or Email Required');
      });
    });
  
    describe('sucessful submit', () => {
      let spy;
      let setValue = (type: 'email' | 'phone', input = 'blah') => component.form[type] = input;
      beforeEach(() => {
        spy = spyOn(api, 'sendEmail'); 
        setValue('email');
      })

      it('submits with email', () => {
        component.submit();
        
        expect(spy).toHaveBeenCalled();
      });

      it('submits with phone', () => {
        setValue('email', '');
        setValue('phone', 'phone');

        component.submit();

        expect(spy).toHaveBeenCalled();
      });

      it('sets values', () => {
        component.submit();

        expect(component.canSubmit).toBeFalsy;
        expect(component.message).toBe('Thank You');
      });

      it('clears values', fakeAsync(() => {
        let spy = spyOn(component, 'init');

        component.submit();
        tick(2000);

        expect(spy).toHaveBeenCalled();
      }));
    });
    
  });
});
