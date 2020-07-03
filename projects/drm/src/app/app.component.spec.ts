import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../lib/modules/header/header.component';
import { MaterialModule } from '../lib/modules/material-design/material-design.module';
import { ToastService } from '../lib/modules/toast/toast.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [ BrowserAnimationsModule, MaterialModule, RouterTestingModule ],
      providers: [ ToastService ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));
  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {    
    expect(component.title).toEqual('app');
  }));  
});
