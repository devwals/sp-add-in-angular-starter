import { WebPagesModule } from './web-pages.module';

describe('WebPagesModule', () => {
  let webPagesModule: WebPagesModule;

  beforeEach(() => {
    webPagesModule = new WebPagesModule();
  });

  it('should create an instance', () => {
    expect(webPagesModule).toBeTruthy();
  });
});
