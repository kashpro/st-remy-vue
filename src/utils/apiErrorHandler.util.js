export function apiErrorHandler(err) {
  if (!err.response) {
    this.$store.dispatch("openAlert", {type: "error", text: this.$messages.ALERT_SERVER_ERROR});
      return;
  }
  if (err.response.status === 500) {
    this.$store.dispatch("openAlert", {type: "error", text: this.$messages.ALERT_SERVER_ERROR});
    return;
  }
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
    } else if (typeof field === "object") {
      result = result.concat(parseObject(field));
    }
    if (typeof field === "string") {
      result.push(`${key}: ${field}`);
    }
  }
  return result;
}