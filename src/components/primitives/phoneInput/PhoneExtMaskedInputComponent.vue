<template>
  <TextField
    ref="MaskedInput"
    :text="value"
    :hint="$t('titles.labels.extPhone')"
    keyboardType="number"
    class="masked-input"
    @textChange="maskInput($event)"
  />
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import { setCursorPosition } from '@/globals/methods/setCursoPosition';

interface ComponentData {
  tempValue: string;
}

interface ComponentProps {
  value: string;
}

interface ComponentMethods {
  maskInput: (event: any) => void;
  normalToNumber: (number: string) => string;
  numberToNormal: (login: string) => string;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, ComponentProps>({
  name: 'PhoneExtMaskedInputComponent',
  props: {
    value: String,
  },
  data: () => {
    return {
      tempValue: '',
    };
  },
  methods: {
    maskInput(event): void {
      this.tempValue = this.normalToNumber(event.value);
      (this as any).$refs.MaskedInput.nativeView.set(
        'text',
        this.numberToNormal(event.value)
      );
      let input = (this as any).$refs.MaskedInput.nativeView;
      setCursorPosition(input, input.get('text').length);
      this.$emit('input', this.tempValue);
    },
    numberToNormal(login: string): string {
      let tempNumber = login.replace(/\D/g, '');
      // tempNumber = tempNumber.replace(/^0/, '');
      if (tempNumber.length > 1) {
        tempNumber = tempNumber.substring(0, 1);
      } else if (tempNumber.length > 0 && login.length !== 2) {
        tempNumber = tempNumber.replace(/^(\d*)/, '($1)');
      } else if (tempNumber.length > 0 && login.length === 2) {
        tempNumber = '';
      } else {
        tempNumber = '';
      }
      return tempNumber;
    },
    normalToNumber(number: string): string {
      return number.replace(/[^\d]/g, '');
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
}
</style>
