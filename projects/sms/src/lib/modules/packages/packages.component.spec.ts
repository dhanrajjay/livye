import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { PackagesComponent } from './packages.component';

describe('PackagesComponent', () => {
  let component: PackagesComponent;
  let fixture: ComponentFixture<PackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackagesComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PackagesComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
