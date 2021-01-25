<template>
  <TextField
    ref="MaskedInput"
    :text="value"
    :hint="$t('common.fields.phone')"
    keyboardType="phone"
    class="masked-input"
    :class="{ '-error': !valid && wereActive }"
    @textChange="maskInput($event)"
    @focus="blockActive"
    @blur="activate"
  />
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import { setCursorPosition } from '@/globals/methods/setCursoPosition';

interface ComponentData {
  tempValue: string;
  wereActive: boolean;
}

interface ComponentProps {
  value: string;
  valid: boolean;
}

interface ComponentMethods {
  maskInput: (event: any) => void;
  normalToNumber: (number: string) => string;
  numberToNormal: (login: string) => string;
  activate: () => void;
  blockActive: () => void;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, ComponentProps>({
  name: 'PhoneMaskedInputComponent',
  props: {
    value: String,
    valid: Boolean,
  },
  mounted() {
    this.maskInput({ value: this.value });
  },
  data: (): ComponentData => {
    return {
      tempValue: '',
      wereActive: false,
    };
  },
  methods: {
    maskInput(event: any): void {
      this.tempValue = this.normalToNumber(event.value);
      (this as any).$refs.MaskedInput.nativeView.set(
        'text',
        this.numberToNormal(this.tempValue)
      );
      setCursorPosition(
        (this as any).$refs.MaskedInput.nativeView,
        (this as any).$refs.MaskedInput.nativeView.get('text').length
      );
      this.$emit('input', this.tempValue);
    },
    numberToNormal(login: string): string {
      let tempNumber = login.replace(/\D/g, '');
      // tempNumber = tempNumber.replace(/^0/, '');
      if (tempNumber.length > 10) {
        // 11+ digits. Substring
        tempNumber = tempNumber.substring(0, 10);
      } else if (tempNumber.length > 8) {
        // 8..10 digits. 915 123-45-67
        tempNumber = tempNumber.replace(
          /^(\d\d\d)(\d{3})(\d{2})(\d{0,2}).*/,
          '$1 $2-$3-$4'
        );
      } else if (tempNumber.length > 6) {
        // 7..8 digits. 915 123-45
        tempNumber = tempNumber.replace(
          /^(\d\d\d)(\d{3})(\d{0,2}).*/,
          '$1 $2-$3'
        );
      } else if (tempNumber.length > 3) {
        // 4..6 digits. 915 123
        tempNumber = tempNumber.replace(/^(\d\d\d)(\d{0,3})/, '$1 $2');
      } else {
        // 0..3 digits. 915
        tempNumber = tempNumber.replace(/^(\d*)/, '$1');
      }
      return tempNumber;
    },
    normalToNumber(number: string): string {
      return number.replace(/[^\d]/g, '');
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

<style scoped lang="scss">
@import '~@/app.scss';
.masked-input {
  background-color: $white;
  border: 0px solid;
  border-radius: 10;
  padding-left: 10;
  color: $black;
  placeholder-color: $grey;
  &.-error {
    border-color: $warning-light;
    border-width: 2;
    padding: 8 13;
    color: $warning-light;
    placeholder-color: $warning-light;
  }
}
</style>
