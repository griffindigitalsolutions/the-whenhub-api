import { TheWhenhubApiPage } from './app.po';

describe('the-whenhub-api App', () => {
  let page: TheWhenhubApiPage;

  beforeEach(() => {
    page = new TheWhenhubApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
