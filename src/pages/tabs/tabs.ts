import {Component} from '@angular/core';

import {MyMusicPage} from '../my-music/my-music';
import {SearchPage} from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = MyMusicPage;

  constructor() {

  }
}
