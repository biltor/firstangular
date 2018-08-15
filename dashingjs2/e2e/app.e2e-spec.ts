import { Dashingjs2Page } from './app.po';

describe('dashingjs2 App', function() {
  let page: Dashingjs2Page;

  beforeEach(() => {
    page = new Dashingjs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
