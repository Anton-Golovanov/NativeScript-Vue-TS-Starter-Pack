<template>
  <Page actionBarHidden="true" class="login">
    <FlexboxLayout
      flexWrap="nowrap"
      alignContent="center"
      flexDirection="column"
    >
      <FlexboxLayout
        class="logo"
        flexWrap="nowrap"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="30%"
      >
        <Image
          class="logo__image"
          src="~/assets/images/common/logo-white.png"
        />
      </FlexboxLayout>
      <LoginForm
        height="300"
        @loginChanged="
          (val) => {
            this.username = val;
          }
        "
        @passwordChanged="
          (val) => {
            this.password = val;
          }
        "
        @continue="loginUser"
        @register="goToRegister"
        @passwordRecover="goToPasswordRecover"
      ></LoginForm>
    </FlexboxLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import {
  dataServiceFactory,
  getLocalStorageRepo,
  getRouterRepository,
} from '@/globals/dependencies';

import LoginForm from '@/components/auth/LoginForm.vue';
import { PtRouterRepository } from '@/core/contracts/repositories';

const localStorageRepo = getLocalStorageRepo();

const userDataService = dataServiceFactory.get('user');
const routerRepository: PtRouterRepository = getRouterRepository();

interface ComponentMethods {
  loginUser: () => void;
  goToRegister: () => void;
  goToPasswordRecover: () => void;
}

interface ComponentData {
  username: string;
  password: string;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, {}>({
  name: 'Login',
  components: { LoginForm },
  data: function () {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
    const role = localStorageRepo.getItem('userRole', 'string');
    if (role === 'parent') {
      routerRepository.goTo('/parent', { clearHistory: true });
    }
  },
  methods: {
    async loginUser() {
      let resp = await userDataService.login({
        username: this.username,
        password: this.password,
      });
      let id = localStorageRepo.getItem('userId', 'number');
      let role = localStorageRepo.getItem('userRole', 'string');
      if (resp && role === 'parent') {
        routerRepository.goTo('/parent', { clearHistory: true });
      }
    },
    goToRegister(): void {
      routerRepository.goTo('/register', {});
    },
    goToPasswordRecover(): void {
      routerRepository.goTo('/passwordRecover', {});
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.login {
  background-color: $corporate-background;
  .logo {
    padding: 10%;
    &__image {
      width: 60%;
    }
  }
}
</style>
