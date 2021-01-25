<template>
  <grid-layout rows="auto" class="password" width="100%" height="44">
    <TextField
      row="1"
      ref="passwordInput"
      class="password__input"
      :class="{ '-error': !valid && wereActive }"
      left="0"
      top="0"
      :secure="secure"
      :value="value"
      text-transform="capitalize"
      :hint="hint"
      @textChange="passwordInput($event)"
      @focus="blockActive"
      @blur="activate"
    />
    <Image
      row="1"
      class="password__show-password"
      top="10"
      width="30"
      height="30"
      src="~/assets/images/icons/show-password.png"
      @tap="changeSecure"
    />
  </grid-layout>
</template>

<script lang="ts">
import { setCursorPosition } from '@/globals/methods/setCursoPosition';
import Vue from 'nativescript-vue';

interface ComponentData {
  wereActive: boolean;
  secure: boolean;
}

interface ComponentMethods {
  passwordInput: (event: any) => void;
  changeSecure: () => void;
  blockActive: () => void;
  activate: () => void;
}

interface ComponentProps {
  hint: string;
  value: string;
  valid: boolean;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, ComponentProps>({
  name: 'InputPasswordComponent',
  props: {
    hint: String,
    value: String,
    valid: {
      type: Boolean,
      default: true,
    },
  },
  data: function (): ComponentData {
    return {
      secure: true,
      wereActive: false,
    };
  },
  methods: {
    passwordInput(event: any) {
      this.$emit('input', event.value);
    },
    async changeSecure(): Promise<void> {
      this.secure = !this.secure;
      let input = await (this as any).$refs.passwordInput.nativeView;
      await setCursorPosition(input, input.get('text').length);
    },
    activate() {
      this.wereActive = true;
    },
    blockActive() {
      this.wereActive = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app.scss';
.password {
  &__input {
    background-color: $white;
    border: 0px solid;
    border-radius: 10;
    width: 100%;
    padding: 10 15;
    &.-error {
      border-color: $warning-light;
      border-width: 2;
      padding: 8 13;
      color: $warning-light;
      placeholder-color: $warning-light;
    }
  }
  &__show-password {
    margin-left: 85%;
  }
}
</style>
