import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardPageComponent } from './keyboard-page.component';

describe('KeyboardPageComponent', () => {
  let component: KeyboardPageComponent;
  let fixture: ComponentFixture<KeyboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
