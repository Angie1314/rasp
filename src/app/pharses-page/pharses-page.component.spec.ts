import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharsesPageComponent } from './pharses-page.component';

describe('PharsesPageComponent', () => {
  let component: PharsesPageComponent;
  let fixture: ComponentFixture<PharsesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharsesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharsesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
