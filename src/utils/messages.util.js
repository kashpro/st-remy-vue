const messages = {
  YOUNG_ACCESS_DENIED_MESSAGE: {
    text: "Вход разрешен только совершеннолетним",
  },
  FORM_FIRSTNAME_FIELD_REQUIRED: "Поле 'Имя' обязательно",
  FORM_SECONDNAME_FIELD_REQUIRED: "Поле 'Фамилия' обязательно",
  FORM_EMAIL_FIELD_REQUIRED: "Поле 'E-mail' обязательно",
  FORM_EMAIL_FIELD_INCORRECT: "Введите корректный E-mail",
  FORM_PASSWORD_FIELD_REQUIRED: "Поле 'Пароль' обязательно",
  FORM_PASSWORD_FIELD_SHORT: {
    first: "Минимальная длина пароля: ",
    second: " символов",
  },
  FORM_PHONE_FIELD_REQUIRED: "Поле 'Телефон' обязательно",
  FORM_PHONE_FIELD_INCORRECT: "Введите корректный телефон",
  FORM_BIRTH_FIELD_REQUIRED: "Поле 'Дата рождения' обязательно",
  FORM_BIRTH_FIELD_INCORRECT: "Введите корректную дату рождения",
  FORM_MESSAGE_FIELD_REQUIRED: "Поле 'Сообщение' обязательно",
  FORM_DESC_FIELD_REQUIRED: "Поле 'Описание' обязательно",
  FORM_DESC_FIELD_LENGTH: {
    first: "Длина сообщения должна быть от ",
    second: " до ",
    third: " символов",
  },
  FORM_THEME_FIELD_REQUIRED: "Поле 'Тема' обязательно",
  FEEDBACK_THEMES: [
    "Как зарегистрироваться на сайте",
    "Технические проблемы с сайтом",
    "Как удалить свои персональные данные",
    "Нет ответа по обратной связи",
    "Прошу связаться со мной",
  ],
  
};

export default {
  install(Vue) {
    Vue.prototype.$messages = messages;
  },
}