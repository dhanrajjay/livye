import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(VideoComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
