export default {
  // variable safely initialized

  // function to fetch ajustes
  get_list_ajustes: async (sale_id = null) => {
    try {
      // use parameter if provided, else fallback to value_sale
      const idToUse = sale_id ?? appsmith.store?.selected_sale?.manage_id;

      if (!idToUse) {
        showAlert("⚠️ No sale_id provided or selected", "warning");
        return [];
      }

      return await list_ajustes.run({ id_sale: idToUse });
    } catch (err) {
      showAlert("❌ Error fetching ajustes: " + err.message, "error");
      return [];
    }
  }
};