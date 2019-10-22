export abstract class ApiTransformer<SP, SR, FP, FR> {
  abstract send(params: SP): SR;
  abstract fetch(response: FP): FR;

  // Применяется в том случае, если у вас есть коллекция исходящих обектов для трансформации
  public sendCollection(param: SP[]): SR[] {
    return param.map(item => this.send(item));
  }

  // Применяется в том случае, если у вас есть коллекция входящих обектов для трансформации
  public fetchCollection(data: FP[]): FR[] {
    return data.map(item => this.fetch(item));
  }
}
