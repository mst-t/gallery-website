import { GallerySitePage } from './app.po';

describe('gallery-site App', function() {
  let page: GallerySitePage;

  beforeEach(() => {
    page = new GallerySitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
