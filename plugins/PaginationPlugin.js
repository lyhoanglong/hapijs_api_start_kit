import Pagination from 'hapi-pagination';

export default {
  register: Pagination,
  enabled: false,
  options: {
    routes: {
      include: [],
      exclude: [],
    },
  },
};
