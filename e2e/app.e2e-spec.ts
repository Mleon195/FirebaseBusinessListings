import { BusinesscontactsPage } from './app.po';

describe('businesscontacts App', () => {
  let page: BusinesscontactsPage;

  beforeEach(() => {
    page = new BusinesscontactsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
