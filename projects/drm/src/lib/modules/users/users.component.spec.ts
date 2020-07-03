import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MaterialModule } from '../material-design/material-design.module';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,        
      ],
      imports: [ BrowserAnimationsModule, MaterialModule ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UsersComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
