import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { LiveStreamComponent } from './live-stream.component';

describe('LiveStreamComponent', () => {
  let component: LiveStreamComponent;
  let fixture: ComponentFixture<LiveStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LiveStreamComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LiveStreamComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
