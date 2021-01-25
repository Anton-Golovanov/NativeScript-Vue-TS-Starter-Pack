<template>
  <Page actionBarHidden="true">
    <grid-layout columns="*" rows="*, auto" width="100%" height="100%">
      <RadSideDrawer
        :drawerContentSize="(screen.mainScreen.heightDIPs / 100) * 70"
        row="0"
        drawerTransition="PushTransition"
        drawerLocation="Bottom"
        ref="menu"
      >
        <StackLayout
          backgroundColor="white"
          shadowColor="rgba(0,0,0,0)"
          ~drawerContent
        >
          <menu-component />
        </StackLayout>
        <grid-layout
          ~mainContent
          columns="*"
          rows="*"
          width="100%"
          height="100%"
        >
          <frame>
            <page>
              <user-action-bar-component />
              <grid-layout
                ~mainContent
                columns="*"
                rows="auto, *"
                width="100%"
                height="100%"
              >
                <clouds-component row="0" />
                <ScrollView row="1" orientation="vertical">
                  <StackLayout>
                    <Frame id="parent-frame">
                      <welcome-layout />
                    </Frame>
                  </StackLayout>
                </ScrollView>
              </grid-layout>
            </page>
          </frame>
        </grid-layout>
      </RadSideDrawer>
      <footer-menu-component row="1" @toggleMenu="toggleMenu" />
    </grid-layout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { screen, Screen } from '@nativescript/core/platform';
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';
import MenuComponent from '@/components/user/common/MenuComponent.vue';

import WelcomeLayout from '@/components/user/parent/WelcomeLayout.vue';
import CloudsComponent from '@/components/user/common/CloudsComponent.vue';
import FooterMenuComponent from '@/components/user/common/FooterMenuComponent.vue';
import UserActionBarComponent from '@/components/user/common/UserActionBarComponent.vue';

Vue.use(RadSideDrawer);

interface ComponentData {
  screen: Screen;
}

interface ComponentMethods {
  toggleMenu: () => void;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, {}>({
  name: 'Parent',
  components: {
    MenuComponent,
    WelcomeLayout,
    FooterMenuComponent,
    CloudsComponent,
    UserActionBarComponent,
  },
  data: function () {
    return {
      screen
    };
  },
  methods: {
    toggleMenu() {
      (this as any).$refs.menu.nativeView.toggleDrawerState();
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
</style>
