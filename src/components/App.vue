<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <StackLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Label :text="$t('common.female')" />
      <Label :text="$t('common.male')" />
      <Label :text="$t('login.one')" />
      <Label :text="id" />
      <Button text="Button" @tap="onButtonTap" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { getRouterRepository } from '@/globals/dependencies/locator';

export default {
  data() {
    return {
      msg: 'Hello World!',
    };
  },
  props: {
    id: Number,
  },
  methods: {
    test(): void {},
    onButtonTap() {
      const router = getRouterRepository();
      router.goTo('/login', {
        clearHistory: true,
      });
    },
  },
};
</script>

<style scoped>
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
