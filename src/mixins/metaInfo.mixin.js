export default {
  metaInfo() {
    return {
      title: CONFIG.VIEWS_META_NAMES[this.$options.name] ? `${CONFIG.VIEWS_META_NAMES[this.$options.name]} | ${CONFIG.APP_NAME}` : CONFIG.APP_NAME,
    }
  },
}