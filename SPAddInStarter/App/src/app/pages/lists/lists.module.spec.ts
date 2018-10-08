import { ListsModule } from './lists.module';

describe('ListsModule', () => {
  let listsModule: ListsModule;

  beforeEach(() => {
    listsModule = new ListsModule();
  });

  it('should create an instance', () => {
    expect(listsModule).toBeTruthy();
  });
});
