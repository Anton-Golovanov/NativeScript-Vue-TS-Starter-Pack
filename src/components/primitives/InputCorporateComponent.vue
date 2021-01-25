<template>
  <StackLayout class="input">
    <TextField
      :value="value"
      :hint="hint"
      class="input__field"
      :class="{ '-error': !valid && wereActive }"
      @textChange="changeValue"
      @focus="blockActive"
      @blur="activate"
    />
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

interface ComponentData {
  wereActive: boolean;
}

interface ComponentMethods {
  changeValue: (val: string) => void;
  activate: () => void;
  blockActive: () => void;
}

interface ComponentProps {
  hint: string;
  value: string;
  valid: boolean;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, ComponentProps>({
  name: 'InputCorporateComponent',
  props: {
    hint: String,
    value: String,
    valid: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    return {
      wereActive: false,
    };
  },
  methods: {
    changeValue(val: string): void {
      this.$emit('input', val.value);
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
@import '~@/app';
.input {
  &__field {
    background-color: $white;
    border: 0px solid;
    border-radius: 10;
    width: 100%;
    padding: 10 15;
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
}
</style>
