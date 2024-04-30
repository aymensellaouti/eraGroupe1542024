import { LoggerService } from "src/app/services/logger.service";
import { MathService } from "./math.service";
import { TestBed } from "@angular/core/testing";

fdescribe("MathService", () => {
  let mathService: MathService;
  // let spy: jasmine.Spy<any>;
  beforeAll(() => {
    // Todo : Test if the service is well instanciated
    // Arrange
    //const
     //const logger = jasmine.createSpyObj('LoggerService', ['logger']);
     mathService = TestBed.inject(MathService);
    //  spy = spyOn(mathService, 'add');
    //  spy.and.callThrough();
  });
  it('should create a new MathService', () => {
    expect(mathService).toBeTruthy();
  })
  it('should add two numbers', () => {
    //Act
    // spy.and.returnValue(2);
    const result = mathService.add(2,3);
    //Assert
    expect(result).toBe(5);
  })
  it('should substract two numbers', () => {
    //Act
    const result = mathService.substract(2,3);
    //Assert
    expect(result).toBe(-1);
  })
});
