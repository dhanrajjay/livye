import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CertificatesComponent } from './certificates.component';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  let fixture: ComponentFixture<CertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CertificatesComponent,        
      ],
      imports: [ ],
      providers: [ ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CertificatesComponent);
      component = fixture.componentInstance;      
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {    
    expect(component).toBeTruthy();
  }));  
});
