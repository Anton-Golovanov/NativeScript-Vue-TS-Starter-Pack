<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <StackLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Label :text="navigator" />
      <Label :text="$t('common.female')" />
      <Label :text="$t('common.male')" />
      <Label :text="$i18n.locale" />
      <Label :text="storage.getItem('root', 'test')" />
      <Button text="Button" @tap="onButtonTap" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import {
  getLocalStorageService,
  getRouterRepository,
  getStorageService,
} from '@/globals/dependencies/locator';
import Vue from 'nativescript-vue';
import { PtStorageService } from '@/core/contracts/services/ptStorageService.contract';
import { PtLocalStorageService } from '@/core/contracts/services/ptLocalStorageService.contract';
const router = getRouterRepository();
const storage = getStorageService();
const localStorage = getLocalStorageService();

interface ComponentData {
  msg: 'Login';
  storage: PtStorageService;
  localStorage: PtLocalStorageService;
}

interface ComponentMethods {
  onButtonTap: () => void;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, {}>({
  data(): ComponentData {
    return {
      msg: 'Login',
      storage,
      localStorage,
    };
  },
  computed: {
    navigator() {
      return router.getCurrentRouter();
    },
  },
  mounted() {
    localStorage.setValue('test', 123453);
    console.log('1', localStorage.getValue('test', 'number'));
    localStorage.removeValue('test');
    console.log('2', localStorage.getValue('test', 'number'));
  },
  methods: {
    onButtonTap(): void {
      storage.setItem('root', 'changeTest', 'ieuwq');
      this.$i18n.locale = 'RU';
      // // @ts-ignore
      // this.$store.dispatch('user/get', 'test')

      router.goTo('/home', {
        clearHistory: true,
        props: { id: 121123 },
      });

      //@ts-ignore
      // this.$navigator.navigate('/home', {
      //   clearHistory: true,
      //   props: { id: 12123 },
      // });
    },
  },
});
</script>

<style lang="scss" scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
