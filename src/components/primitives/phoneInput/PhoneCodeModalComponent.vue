<template>
  <GridLayout class="code-modal" ref="modal" columns="auto" rows="* 70">
    <ListPicker
      :items="phoneCodes"
      textField="text"
      valueField="value"
      class="code-modal__code"
      row="0"
      ref="codePicker"
      :selectedIndex="code"
      @selectedIndexChange="ValueChanged($event)"
    />
    <button-component
      :text="'Ok'"
      class="code-modal__button"
      @tap="onButtonTap"
      row="1"
      type="main"
    />
  </GridLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import ButtonComponent from '@/components/primitives/ButtonComponent.vue';

interface ComponentData {
  selectedCode: number;
}

interface ComponentMethods {
  onButtonTap: () => void;
  ValueChanged: (event: any) => void;
}

interface ComponentProps {
  code: number;
  phoneCodes: object[];
}

export default Vue.extend<ComponentData, ComponentMethods, {}, ComponentProps>({
  name: 'PhoneCodeModalComponent',
  components: { ButtonComponent },
  props: {
    code: Number,
    phoneCodes: Array,
  },
  // mounted() {
  //   let el = (this as any).$refs.modal.nativeView;
  //   console.dir(el);
  // },
  data: function () {
    return {
      selectedCode: this.code,
    };
  },
  methods: {
    onButtonTap(): void {
      (this as any).$modal.close((this as any).selectedCode);
    },
    ValueChanged(event: any): void {
      let value = (this as any).$refs.codePicker.nativeView.get(
        'selectedIndex'
      );
      this.selectedCode = value;
    },
  },
});
</script>

<style scoped lang="scss">
@import '~@/app';
.code-modal {
  width: 300;
  height: 100%;
  background-color: $white;
  border-radius: 40;

  &__code {
    border-color: brown;
    width: 150px;
    margin: 0 auto;
    vertical-align: center;
    horizontal-align: center;
    * {
      border-color: blue;
    }
  }

  &__button {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 20;
  }
}
</style>
