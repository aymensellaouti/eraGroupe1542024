import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ColorUtComponent } from "./color-ut.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

fdescribe("ColorUtComponent", () => {
  let component: ColorUtComponent;
  let fixture: ComponentFixture<ColorUtComponent>;
  let template: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorUtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorUtComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
    fixture.detectChanges();

  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should have red Div', () => {

  // Récupérer la div
    const paragraphe = template.query(By.css('[data-testid="para"]'));
    expect(paragraphe.nativeElement.style.backgroundColor).toBe('red');
  });

  it('should have yellow Div after click', () => {
      // Récupérer la div
      const paragraphe = template.query(By.css('[data-testid="para"]'));
      paragraphe.triggerEventHandler('click');
      expect(component.divColor).toBe('yellow');
      fixture.detectChanges();
      expect(paragraphe.nativeElement.style.backgroundColor).toBe('yellow');
  });
});
