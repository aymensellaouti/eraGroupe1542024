import { LoggerService } from "../services/logger.service";
import { TodoService } from "../todo/service/todo.service";

export const todoProviderFactory = (logger: LoggerService) => {
  return new TodoService(logger);
}
