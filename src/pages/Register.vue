<template>
  <Page class="register">
    <action-bar-component />
    <StackLayout>
      <StackLayout class="header">
        <Label
          horizontalAlignment="center"
          :text="$t('common.titles.register')"
          class="h1 header__title"
        />
      </StackLayout>
      <ScrollView orientation="vertical">
        <register-form @apply="register" />
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import ActionBarComponent from '@/components/home/ActionBarComponent.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';

type RegisterData = {
  [key: string]: string;
};

interface ComponentMethods {
register: (RegisterData) => void;
}

export default Vue.extend<{}, ComponentMethods, {}, {}>({
  name: 'Register',
  components: {
    RegisterForm,
    ActionBarComponent,
  },
  methods: {
    register(value: RegisterData): void {
      console.log(value);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.register {
  background-color: $corporate-background;
  .header {
    &__title {
      color: $corporate-white;
    }
  }
}
</style>
