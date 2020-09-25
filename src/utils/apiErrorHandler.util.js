export function apiErrorHandler(err) {
  // ошибка 500, в err.response.data будет html-страница с логом ошибки, ее не парсим
  if (err.response.status === 500) {
    this.$store.dispatch("openAlert", {type: "error", text: this.$messages.ALERT_SERVER_ERROR});
  }
  //остальные ошибки
  let messages = parseObject(err.response.data);
  messages = messages.join("<br>");
  this.$store.dispatch("openAlert", {type: "error", text: messages});
}

// рекурсивная функция, вытаскивает все сообщения в плоский массив из ответа сервера
function parseObject(object) {
  let result = [];
  for (let key in object) {
    const field = object[key];
    if (Array.isArray(field)) {
      result = result.concat(field.map( (value) => {return `${key}: ${value}`} ));
    }
    if (typeof field === "string") {
      result.push(`${key}: ${field}`);
    }
    if (typeof field === "object") {
      result = result.concat(parseObject(field));
    }  
  }
  return result;
}