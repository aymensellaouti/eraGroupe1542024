import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStandaloneComponent } from './first-standalone.component';

describe('FirstStandaloneComponent', () => {
  let component: FirstStandaloneComponent;
  let fixture: ComponentFixture<FirstStandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirstStandaloneComponent]
    });
    fixture = TestBed.createComponent(FirstStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
