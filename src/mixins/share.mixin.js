export default {
  methods: {
    vkShareLinkCreate(id) {
      return `${CONFIG.VK_SHARE_LINK}url=${location.origin}/story/${id}`;
    },
    okShareLinkCreate(id) {
      return `${CONFIG.OK_SHARE_LINK}url=${location.origin}/story/${id}`;
    },
  },
}