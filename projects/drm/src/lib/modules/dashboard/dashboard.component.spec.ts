import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
