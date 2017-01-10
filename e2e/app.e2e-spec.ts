import { MapItClientPage } from './app.po';

describe('map-it-client App', function() {
  let page: MapItClientPage;

  beforeEach(() => {
    page = new MapItClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
