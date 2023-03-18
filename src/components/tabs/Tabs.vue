<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-fit gap-3 rounded-full mx-auto bg-gray-100 px-1 py-1 flex">
    <tab-item
      v-for="(tab, index) in tabsLocal"
      :key="index"
      :title="tab.title"
      :name="tab.name"
      :active="tab.active"
      @change-tab="store.selectedTab"
    ></tab-item>
  </div>
</template>

<script>
import { useTabsStore } from '@/store/tabsStore';
import { defineComponent } from 'vue';
import TabItem from './TabItem.vue';

export default defineComponent({
  props: {
    tabs: {
      required: true,
      type: Array,
    },
  },
  components: { TabItem },
  setup(props) {
    const store = useTabsStore();
    // eslint-disable-next-line no-shadow
    const tab = props.tabs.filter((tab) => tab.active)[0];
    store.$patch({ tabs: props.tabs, tabShow: tab.name });
    return {
      store,
    };
  },
  data() {
    return {
      tabSelected: '',
    };
  },
  computed: {
    tabsLocal() {
      return this.store.tabs;
    },
  },
  methods: {},
});
</script>

<style scoped></style>
