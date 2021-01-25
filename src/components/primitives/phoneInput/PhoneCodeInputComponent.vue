<template>
  <StackLayout orientation="vertical">
    <TextField
      class="code-field"
      textAlignment="right"
      :text="phoneCodes[code].text"
      editable="false"
      @tap="modalOpen"
      hint=""
    />
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import { PhoneCode } from '@/core/customTypes';

import PhoneCodeModalComponent from '@/components/primitives/phoneInput/PhoneCodeModalComponent.vue';

interface ComponentMethods {
  modalOpen: () => void;
  newValue: (value: number) => void;
}

interface ComponentProps {
  code: number;
  phoneCodes: PhoneCode[];
}

export default Vue.extend<{}, ComponentMethods, {}, ComponentProps>({
  name: 'PhoneCodeInputComponent',
  props: {
    code: Number,
    phoneCodes: Array,
  },
  methods: {
    modalOpen(): void {
      let options = {
        props: {
          code: this.code,
          phoneCodes: this.phoneCodes,
        },
      };
      (this as any)
        .$showModal(PhoneCodeModalComponent, options)
        .then((value) => this.newValue(value));
    },
    newValue(value: number): void {
      this.$emit('newCode', value);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.test {
  background-color: red;
}
.code-field {
  border: 0px solid;
  background-color: $white;
  padding-right: 10;
  border-radius: 10;
  color: $black;
  placeholder-color: $grey;
}
</style>
