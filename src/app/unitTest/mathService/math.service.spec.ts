import { LoggerService } from "src/app/services/logger.service";
import { MathService } from "./math.service";

fdescribe("MathService", () => {
  it('should add two numbers', () => {
    // Todo : Test if the service is well instanciated
    // Arrange
    const logger = new LoggerService();
    const mathService = new MathService(logger);
    //Act
    const result = mathService.add(2,3);
    //Assert
    expect(result).toBe(5);
  })
});
