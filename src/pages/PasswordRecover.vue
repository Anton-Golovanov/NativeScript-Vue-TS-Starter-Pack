<template>
  <Page class="recover">
    <action-bar-component />
    <StackLayout>
      <StackLayout class="header">
        <Label
          horizontalAlignment="center"
          :text="$t('common.titles.recoverPassword')"
          textWrap="true"
          textAlignment="center"
          class="h1 header__title"
        />
      </StackLayout>
      <StackLayout class="recover-form">
        <phone-complex-component
          class="recover-form__field"
          :phone="recoverData.phone"
          :valid="validate.phone"
          @change="(val) => (recoverData.phone = val)"
        />
        <input-corporate-component
          class="recover-form__field"
          :hint="$t('common.fields.surname')"
          :value="recoverData.surname"
          :valid="validate.surname"
          @input="
            (val) => {
              recoverData.surname = val;
            }
          "
        />
        <input-corporate-component
          class="recover-form__field"
          :hint="$t('common.fields.email')"
          :value="recoverData.email"
          :valid="validate.email"
          @input="
            (val) => {
              recoverData.email = val;
            }
          "
        />
        <TextView class="recover-form__helper" editable="false">
          <FormattedString>
            <Span
              text="Для сброса пароля укажите свои номер телефона и фамилию для идентификации, а также email, куда будет отправлен новый пароль.*"
            />
          </FormattedString>
        </TextView>
        <button-component
          class="recover-form__button"
          height="50"
          @tap="applyRecover"
          :disabled="!validate.form"
          :text="$t('common.buttons.register')"
          type="secondary"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import ButtonComponent from '@/components/primitives/ButtonComponent.vue';
import ActionBarComponent from '@/components/home/ActionBarComponent.vue';
import InputCorporateComponent from '@/components/primitives/InputCorporateComponent.vue';
import PhoneComplexComponent from '@/components/primitives/phoneInput/PhoneComplexComponent.vue';

type RecoverData = {
  [key: string]: string;
};

interface ComponentData {
  recoverData: RecoverData;
}

interface ComponentMethods {}

interface ComponentComputed {}

export default Vue.extend<
  ComponentData,
  ComponentMethods,
  ComponentComputed,
  {}
>({
  name: 'PasswordRecover',
  components: {
    ButtonComponent,
    ActionBarComponent,
    PhoneComplexComponent,
    InputCorporateComponent,
  },
  computed: {
    validate() {
      let email =
        !!this.recoverData.email && !!(this.recoverData.email.length > 0);
      let surname =
        !!this.recoverData.surname && !!(this.recoverData.surname.length > 0);
      let phone =
        !!this.recoverData.phone && !!(this.recoverData.phone.length > 10);
      let form = !!phone && !!email;
      return { phone, surname, email, form };
    },
  },
  data: function () {
    return {
      recoverData: {
        phone: '',
        surname: '',
        email: '',
      },
    };
  },
  methods: {
    applyRecover() {
      console.log(this.recoverData);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.recover {
  background-color: $corporate-background;

  .header {
    &__title {
      color: $corporate-white;
    }
  }
  &-form {
    padding: 20;
    margin-top: 20;
    &__field {
      margin-bottom: 20;
    }
    &__helper {
      border-bottom-width: 1;
      border-bottom-color: transparent;
      color: $dark-grey;
      margin-top: 40;
      margin-top: 40;
      font-size: 15;
    }
    &__button {
      margin-top: 10;
    }
  }
}
</style>
