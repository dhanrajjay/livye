import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivyeComponentsComponent } from './livye-components.component';

describe('LivyeComponentsComponent', () => {
  let component: LivyeComponentsComponent;
  let fixture: ComponentFixture<LivyeComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivyeComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivyeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
