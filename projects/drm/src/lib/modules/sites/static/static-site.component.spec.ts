import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { StaticSiteComponent } from './static-site.component';

describe('StaticSiteComponent', () => {
  let component: StaticSiteComponent;
  let fixture: ComponentFixture<StaticSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StaticSiteComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(StaticSiteComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
