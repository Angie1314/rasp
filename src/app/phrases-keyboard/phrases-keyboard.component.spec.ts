import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesKeyboardComponent } from './phrases-keyboard.component';

describe('PhrasesKeyboardComponent', () => {
  let component: PhrasesKeyboardComponent;
  let fixture: ComponentFixture<PhrasesKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
