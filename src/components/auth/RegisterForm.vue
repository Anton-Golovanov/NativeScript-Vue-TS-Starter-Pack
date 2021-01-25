<template>
  <StackLayout class="register">
    <phone-complex-component
      class="register__field"
      :phone="registerData.phone"
      :valid="validate.phone"
      @change="changePhone"
    />
    <date-input-field
      class="register__field"
      :hint="$t('common.fields.birthdate')"
      :date="date"
      @change="changeDate"
    />
    <input-corporate-component
      class="register__field"
      :hint="$t('common.fields.name')"
      :value="registerData.name"
      :valid="validate.name"
      @input="
        (val) => {
          registerData.name = val;
        }
      "
    />
    <input-corporate-component
      class="register__field"
      :hint="$t('common.fields.surname')"
      :value="registerData.surname"
      :valid="validate.surname"
      @input="
        (val) => {
          registerData.surname = val;
        }
      "
    />
    <input-corporate-component
      class="register__field"
      :hint="$t('common.fields.email')"
      :value="registerData.email"
      :valid="validate.email"
      @input="
        (val) => {
          registerData.email = val;
        }
      "
    />
    <input-password-component
      class="register__field"
      :hint="$t('common.fields.password')"
      :value="registerData.password"
      :valid="validate.password"
      @input="
        (val) => {
          registerData.password = val;
        }
      "
    />
    <input-password-component
      class="register__field"
      :hint="$t('common.fields.passwordRepeat')"
      :value="registerData.passwordRepeat"
      :valid="validate.passwordRepeat"
      @input="
        (val) => {
          registerData.passwordRepeat = val;
        }
      "
    />

    <TextView class="register__helper" editable="false">
      <FormattedString>
        <Span text="Для продолжения заполните все обязательные поля.*" />
      </FormattedString>
    </TextView>

    <button-component
      class="register__button"
      height="50"
      @tap="applyRegister"
      :disabled="!validate.form"
      :text="$t('common.buttons.register')"
    />
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import ButtonComponent from '@/components/primitives/ButtonComponent.vue';
import DateInputField from '@/components/primitives/dateInput/DateInputField.vue';
import InputPasswordComponent from '@/components/primitives/InputPasswordComponent.vue';
import InputCorporateComponent from '@/components/primitives/InputCorporateComponent.vue';
import PhoneComplexComponent from '@/components/primitives/phoneInput/PhoneComplexComponent.vue';

type Date = {
  [key: string]: number | null;
};

type RegisterData = {
  [key: string]: string;
};

type Validate = {
  [key: string]: boolean;
};

interface ComponentData {
  date: Date;
  registerData: RegisterData;
}

interface ComponentMethods {
  changePhone: (val: string) => void;
  changeDate: (val: Date) => void;
  applyRegister: () => void;
}

interface ComponentComputed {
  validate: Validate;
}

export default Vue.extend<
  ComponentData,
  ComponentMethods,
  ComponentComputed,
  {}
>({
  name: 'RegisterForm',
  components: {
    ButtonComponent,
    DateInputField,
    PhoneComplexComponent,
    InputPasswordComponent,
    InputCorporateComponent,
  },
  computed: {
    validate() {
      let name =
        !!this.registerData.name && !!(this.registerData.name.length > 0);
      let surname =
        !!this.registerData.surname && !!(this.registerData.surname.length > 0);
      let email =
        !!this.registerData.email && !!(this.registerData.email.length > 0);
      let phone =
        !!this.registerData.phone && !!(this.registerData.phone.length > 10);
      let password =
        !!this.registerData.password &&
        !!(this.registerData.password.length > 6);
      let passwordRepeat =
        !!this.registerData.passwordRepeat &&
        !!(this.registerData.passwordRepeat.length > 6) &&
        this.registerData.passwordRepeat === this.registerData.password;
      let form =
        !!name &&
        !!surname &&
        !!phone &&
        !!email &&
        !!password &&
        !!passwordRepeat;
      return { name, surname, phone, email, password, passwordRepeat, form };
    },
  },
  data(): ComponentData {
    return {
      date: {
        day: null,
        month: null,
        year: null,
      },
      registerData: {
        phone: '',
        birthdate: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeat: '',
      },
    };
  },
  watch: {
    registerData: {
      deep: true,
      handler(val): void {
        console.log(val);
      },
    },
  },
  methods: {
    changePhone(val: string): void {
      this.registerData.phone = val;
    },
    changeDate(val: Date): void {
      this.date = val;
    },
    applyRegister() {
      let birthdate = `${('0' + this.date.day).slice(-2)}.${(
        '0' + this.date.month
      ).slice(-2)}.${this.date.year}`;
      // console.log({ ...this.registerData, birthdate });
      this.$emit('apply', { ...this.registerData, birthdate });
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.register {
  padding: 20;
  &__field {
    margin-bottom: 20;
  }
  &__button {
  }
  &__helper {
    border-bottom-width: 1;
    border-bottom-color: transparent;
    color: $dark-grey;
    margin-top: 40;
    font-size: 15;
  }
}
</style>
