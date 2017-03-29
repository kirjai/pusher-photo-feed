import { PhotoFeedClientPage } from './app.po';

describe('photo-feed-client App', () => {
  let page: PhotoFeedClientPage;

  beforeEach(() => {
    page = new PhotoFeedClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
