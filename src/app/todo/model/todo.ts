export class Todo {
  public id: string;
  constructor(id = '', public name = '', public content = '') {
    this.id = id;
  }
}
