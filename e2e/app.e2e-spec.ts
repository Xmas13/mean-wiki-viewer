import { MeanWikiViewerPage } from './app.po';

describe('mean-wiki-viewer App', () => {
  let page: MeanWikiViewerPage;

  beforeEach(() => {
    page = new MeanWikiViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
