export const firstnameInvalid = {
  computed: {
    firstnameInvalid() {
      if (this.$v.firstname.$dirty && !this.$v.firstname.required) {return this.$messages.FORM_FIRSTNAME_FIELD_REQUIRED;}
      return false;
    },
  }
}

export const secondnameInvalid = {
  computed: {
    secondnameInvalid() {
      if (this.$v.secondname.$dirty && !this.$v.secondname.required) {return this.$messages.FORM_SECONDNAME_FIELD_REQUIRED;} 
      return false;
    },
  }
}

export const emailInvalid = {
  computed: {
    emailInvalid() {
      if (this.$v.email.$dirty && !this.$v.email.required) {return this.$messages.FORM_EMAIL_FIELD_REQUIRED;} 
      if (this.$v.email.$dirty && !this.$v.email.email) {return this.$messages.FORM_EMAIL_FIELD_INCORRECT;} 
      return false;
    },
  }
}

export const passwordInvalid = {
  computed: {
    passwordInvalid() {
      if (this.$v.password.$dirty && !this.$v.password.required) {return this.$messages.FORM_PASSWORD_FIELD_REQUIRED;} 
      if (this.$v.password.$dirty && !this.$v.password.minLength) {return this.$messages.FORM_PASSWORD_FIELD_SHORT.first + this.$v.password.$params.minLength.min + this.$messages.FORM_PASSWORD_FIELD_SHORT.second;} 
      return false;
    },
  }
}

export const passwordInvalidForLogin = {
  computed: {
    passwordInvalid() {
      if (this.$v.password.$dirty && !this.$v.password.required) {return this.$messages.FORM_PASSWORD_FIELD_REQUIRED;} 
      return false;
    },
  }
}

export const phoneInvalid = {
  computed: {
    phoneInvalid() {
      if (this.$v.phone.$dirty && !this.$v.phone.required) {return this.$messages.FORM_PHONE_FIELD_REQUIRED;}
      if (this.$v.phone.$dirty && !this.$v.phone.phoneValidator) {return this.$messages.FORM_PHONE_FIELD_INCORRECT;} 
      return false;
    },
  }
}

export const birthInvalid = {
  computed: {
    birthInvalid() {
      if (this.$v.birth.$dirty && !this.$v.birth.required) {return this.$messages.FORM_BIRTH_FIELD_REQUIRED;}
      if (this.$v.birth.$dirty && !this.$v.birth.birthValidator) {return this.$messages.FORM_BIRTH_FIELD_INCORRECT;} 
      return false;
    },
  }
}

export const nameInvalid = {
  computed: {
    nameInvalid() {
      if (this.$v.name.$dirty && !this.$v.name.required) {return this.$messages.FORM_FIRSTNAME_FIELD_REQUIRED;}
      return false;
    },
  }
}

export const messageInvalid = {
  computed: {
    messageInvalid() {
      if (this.$v.message.$dirty && !this.$v.message.required) {return this.$messages.FORM_MESSAGE_FIELD_REQUIRED;} 
      return false;
    },
  }
}

export const themeInvalid = {
  computed: {
    themeInvalid() {
      if (this.$v.theme.$dirty && !this.$v.theme.required) {return this.$messages.FORM_THEME_FIELD_REQUIRED;}
      return false;
    },
  }
}

export const descInvalid = {
  computed: {
    descInvalid() {
      if (this.$v.desc.$dirty && !this.$v.desc.required) {return this.$messages.FORM_MESSAGE_FIELD_REQUIRED;} 
      if (this.$v.desc.$dirty && (!this.$v.desc.minLength || !this.$v.desc.maxLength)) {
        return (this.$messages.FORM_DESC_FIELD_LENGTH.first +
               this.$v.desc.$params.minLength.min + 
               this.$messages.FORM_DESC_FIELD_LENGTH.second +
               this.$v.desc.$params.maxLength.max +
               this.$messages.FORM_DESC_FIELD_LENGTH.third
        );} 
      return false;
    },
  }
}



