export default {
  downloadAllEstados: async () => {
    try {
      // 1. Run the query
      const data = await all_estados.run();

      if (!data || data.length === 0) {
        showAlert("No data found to download", "warning");
        return;
      }

      // 2. Build CSV with ; separator
      const headers = Object.keys(data[0]);
      const csvRows = [headers.join(";")];

      data.forEach(row => {
        const values = headers.map(h => row[h] ?? "");
        csvRows.push(values.join(";"));
      });

      const csvString = csvRows.join("\n");

      // 3. Trigger Appsmith download
      download(csvString, "all_estados.csv", "text/csv");

      return true;
    } catch (e) {
      showAlert("Error generating CSV: " + e.message, "error");
      return false;
    }
  }
};
