/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { defineStore } from 'pinia';

export const useTabsStore = defineStore('tabs', {
  state: () => ({ tabs: [], tabShow: '' }),
  actions: {
    selectedTab(name) {
      return this.tabs.map((tab) => {
        // eslint-disable-next-line no-param-reassign
        tab.active = tab.name === name;
        this.tabShow = tab.active ? tab.name : this.tabShow;
        return tab;
      });
    },
  },
});
