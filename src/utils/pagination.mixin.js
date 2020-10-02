import _ from "lodash";

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: CONFIG.PAGINATION_PROFILE_PER_PAGE,
      pageCount: 0,
      allItems: [],
      items: [],
    };
  },
  methods: {
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize);
      this.pageCount = _.size(this.allItems);
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    },
    pageChangeHandler(page) {
      this.$router.push({path: `${this.$route.path}?page=${page}`, hash: this.hash}).catch(() => {});
      if (this.hash) {setTimeout(() => { location.href = this.$route.hash }, 0);}
      this.items = this.allItems[page - 1] || this.allItems[0];
    },
  },
}