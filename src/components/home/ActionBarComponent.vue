<template>
  <ActionBar title="" class="action-bar">
    <GridLayout
      class="action-bar__container"
      horizontalAlignment="stretch"
      columns="auto, auto, auto"
      height="40"
    >
      <StackLayout
        col="0"
        horizontalAlignment="left"
        verticalAlignment="middle"
        width="19%"
        @tap="goBack"
      >
        <Image
          src="~/assets/images/icons/arrow.png"
          width="24"
          horizontalAlignment="left"
          verticalAlignment="middle"
          height="24"
        />
      </StackLayout>

      <StackLayout
        col="1"
        width="60%"
        horizontalAlignment="center"
        verticalAlignment="center"
      >
        <Image
          horizontalAlignment="center"
          verticalAlignment="center"
          src="~/assets/images/common/logo-white.png"
          height="40"
        />
      </StackLayout>
      <StackLayout width="19%" col="2"> </StackLayout>
    </GridLayout>
  </ActionBar>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import { getRouterRepository } from '@/globals/dependencies/locator';
import { PtRouterRepository } from '@/core/contracts/repositories';

let routerRepository: PtRouterRepository = getRouterRepository();

interface ComponentMethods {
  goBack: () => void;
}

export default Vue.extend<{}, ComponentMethods, {}, {}>({
  name: 'ActionBarComponent',
  methods: {
    goBack() {
      routerRepository.goBack({});
    },
  },
});
</script>

<style lang="scss" scoped>
.action-bar {
  padding: 0;
  margin: 0;
  z-index: 0;
  border-width: 0;

  &__container {
    margin: 0;
    width: 100%;
    padding: 0;
  }
}
</style>
