import { FormDynamicPage } from './app.po';

describe('form-dynamic App', () => {
  let page: FormDynamicPage;

  beforeEach(() => {
    page = new FormDynamicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
