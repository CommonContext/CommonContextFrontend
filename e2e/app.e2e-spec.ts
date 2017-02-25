import { CommonContextFrontendPage } from './app.po';

describe('common-context-frontend App', () => {
  let page: CommonContextFrontendPage;

  beforeEach(() => {
    page = new CommonContextFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
