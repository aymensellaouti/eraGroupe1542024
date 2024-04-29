import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotStandaloneComponent } from './not-standalone.component';

describe('NotStandaloneComponent', () => {
  let component: NotStandaloneComponent;
  let fixture: ComponentFixture<NotStandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotStandaloneComponent]
    });
    fixture = TestBed.createComponent(NotStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
