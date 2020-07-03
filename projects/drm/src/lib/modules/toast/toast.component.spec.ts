import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '../material-design/material-design.module';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToastComponent,        
      ],
      imports: [ MaterialModule ],
      providers: [ ToastService ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ToastComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));
  
  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
