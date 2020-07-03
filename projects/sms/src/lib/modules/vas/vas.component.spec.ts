import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { VASComponent } from './vas.component';

describe('VASComponent', () => {
  let component: VASComponent;
  let fixture: ComponentFixture<VASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VASComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(VASComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
