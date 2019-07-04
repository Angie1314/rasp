import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesiconsComponent } from './phrasesicons.component';

describe('PhrasesiconsComponent', () => {
  let component: PhrasesiconsComponent;
  let fixture: ComponentFixture<PhrasesiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
