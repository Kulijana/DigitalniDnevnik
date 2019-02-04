import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnoLiceComponent } from './nastavno-lice.component';

describe('NastavnoLiceComponent', () => {
  let component: NastavnoLiceComponent;
  let fixture: ComponentFixture<NastavnoLiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnoLiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnoLiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
