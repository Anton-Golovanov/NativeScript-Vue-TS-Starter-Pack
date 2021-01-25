<template>
  <StackLayout class="auth">
    <StackLayout>
      <phone-complex-component
        @change="
          (val) => {
            $emit('loginChanged', val);
          }
        "
        class="auth__login"
      />
      <input-password-component
        :hint="$t('common.fields.password')"
        @input="
          (val) => {
            $emit('passwordChanged', val);
          }
        "
        class="auth__password"
        height="50"
      />
      <FlexboxLayout
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        height="40"
        width="100%"
      >
        <Label
          @tap="goToPasswordRecover"
          class="forgot-password"
          :text="$t('common.links.forgotPassword')"
          height="20"
        />
      </FlexboxLayout>
      <button-component
        class="auth-button"
        height="50"
        @tap="continueAuth"
        :text="$t('common.buttons.continue')"
      />
      <button-component
        class="auth-button"
        height="50"
        @tap="goToRegister"
        :text="$t('common.buttons.register')"
        type="secondary"
      />
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import ButtonComponent from '@/components/primitives/ButtonComponent.vue';
import InputPasswordComponent from '@/components/primitives/InputPasswordComponent.vue';
import PhoneComplexComponent from '@/components/primitives/phoneInput/PhoneComplexComponent.vue';

interface ComponentMethods {
  continueAuth: () => void;
  goToRegister: () => void;
  goToPasswordRecover: () => void;
}

export default Vue.extend<{}, ComponentMethods, {}, {}>({
  name: 'LoginForm',
  components: {
    ButtonComponent,
    InputPasswordComponent,
    PhoneComplexComponent,
  },
  methods: {
    continueAuth(): void {
      this.$emit('continue');
    },
    goToRegister(): void {
      this.$emit('register');
    },
    goToPasswordRecover(): void {
      this.$emit('passwordRecover');
    },
  },
});
</script>

<style scope lang="scss">
@import '~@/app.scss';
.auth {
  padding: 0 20;
  &__login {
    margin-bottom: 20;
  }
  &__password {
    margin-bottom: 20;
  }
  .forgot-password {
    color: $corporate-white;
  }
  .auth-button {
    margin-bottom: 20;
  }
}
</style>
