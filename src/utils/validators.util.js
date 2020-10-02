export const phoneValidator = (value) => /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
export const birthValidator = (value) => new Date(value) >= new Date("1920-01-01");
export const booleanValidator = (value) => !!value;
// export const sizeValidatorHard = (value, vm) => {console.log(vm); return (value && value instanceof File ) ? value.size < CONFIG.IMAGE_MAX_SIZE : false;}
// export const sizeValidatorSoft = (value, vm) => {console.log(vm); return (value && value instanceof File ) ? value.size < CONFIG.IMAGE_MAX_SIZE : true;}

export const sizeValidator = (value, vm) => {return (value && value instanceof File ) ? value.size < CONFIG.IMAGE_MAX_SIZE : vm.story ? true : false;}