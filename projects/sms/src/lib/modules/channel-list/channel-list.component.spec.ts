import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ChannelListComponent } from './channel-list.component';

describe('ChanneListComponent', () => {
  let component: ChannelListComponent;
  let fixture: ComponentFixture<ChannelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChannelListComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ChannelListComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
