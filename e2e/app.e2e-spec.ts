import { BeautifulWordsPage } from './app.po';

describe('beautiful-words App', () => {
  let page: BeautifulWordsPage;

  beforeEach(() => {
    page = new BeautifulWordsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
