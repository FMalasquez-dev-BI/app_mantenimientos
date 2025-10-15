export default {
  intervalId: null,

  startAutoRefresh: () => {
    // Prevent multiple intervals
    if (this.intervalId) clearInterval(this.intervalId);

    // Run immediately
    query_comisiones_chart.run();
		query_liquidaciones.run();
    // Run every 60 seconds
    this.intervalId = setInterval(() => {
      query_comisiones_chart.run();
    }, 60000); // 60000 = 1 minute
  },

  stopAutoRefresh: () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
};
