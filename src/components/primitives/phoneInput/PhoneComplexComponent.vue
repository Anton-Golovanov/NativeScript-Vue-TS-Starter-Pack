<template>
  <GridLayout class="phone" columns="60, *, 60" rows="auto" width="100%">
    <phone-code-input-component
      class="code-input"
      :code="code"
      :phoneCodes="phoneCodes"
      @newCode="updateCode"
      row="0"
      col="0"
    />
    <phone-masked-input-component
      class="phone-input"
      rowspan="2"
      row="0"
      col="1"
      :valid="valid"
      :value="number"
      @input="updateNumber"
    />
    <phone-ext-masked-input-component
      class="ext-input"
      row="0"
      col="2"
      :value="ext"
      @input="updateExt"
    />
  </GridLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import { PhoneCode } from '@/core/customTypes';
import { phoneCodes } from '@/core/data/phoneCodes';

import PhoneCodeInputComponent from '@/components/primitives/phoneInput/PhoneCodeInputComponent.vue';
import PhoneMaskedInputComponent from '@/components/primitives/phoneInput/PhoneMaskedInputComponent.vue';
import PhoneExtMaskedInputComponent from '@/components/primitives/phoneInput/PhoneExtMaskedInputComponent.vue';

interface ComponentProps {
  phone: string;
  valid: boolean;
}

interface ComponentData {
  phoneCodes: PhoneCode[];
  code: number;
  codeVal: string;
  number: string;
  ext: string;
}

interface ComponentMethods {
  updateCode: (value: number) => void;
  updateNumber: (value: string) => void;
  updateExt: (value: string) => void;
  connectPhone: () => void;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, ComponentProps>({
  name: 'PhoneComplexComponent',
  components: {
    PhoneExtMaskedInputComponent,
    PhoneCodeInputComponent,
    PhoneMaskedInputComponent,
  },
  props: {
    phone: String,
    valid: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      phoneCodes,
      code: 0,
      codeVal: '7',
      number: '',
      ext: '',
    };
  },

  watch: {
    phone: {
      immediate: true,
      handler() {
        let numbers = this.phone?.split('') || ['7'];
        if (numbers?.[0] == '7') {
          this.codeVal = numbers[0];
          this.code = this.phoneCodes.findIndex(
            (code) => code.value === numbers[0]
          );
          numbers.splice(0, 1);
        } else if (numbers?.[0] == '3' && numbers[1] == '8') {
          this.codeVal = numbers[0] + numbers[1];
          this.code = this.phoneCodes.findIndex((code) => code.value === '38');
          numbers.splice(0, 2);
        }
        if (numbers.length > 10) {
          this.ext = numbers[10];
          numbers.splice(10, numbers.length - 10);
        } else {
          this.ext = '';
        }
        this.number = numbers.join('');
      },
    },
  },
  methods: {
    updateCode(value: number): void {
      this.code = value;
      this.codeVal = this.phoneCodes[value].value;
      this.connectPhone();
    },
    updateNumber(value: string): void {
      this.number = value;
      this.connectPhone();
    },
    updateExt(value: string): void {
      this.ext = value;
      this.connectPhone();
    },
    connectPhone(): void {
      let tempPhone = `${this.codeVal}${this.number}${this.ext}`;
      this.$emit('change', tempPhone);
    },
  },
});
</script>

<style lang="scss" scoped>
.phone {
  //padding: 0 20;
}
.code-input {
  margin-right: 5;
}
.phone-input {
}

.ext-input {
  margin-left: 5;
}
</style>
