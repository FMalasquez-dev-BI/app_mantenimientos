export default {
  async deleteAdjustment(row) {
    try {
      if (!row) {
        showAlert("No row selected for delete", "warning");
        return;
      }

      if (row.origen_ajuste === "ADJ_GEN") {
        await delete_adjustment_general.run({ adj_id: row.id_adjust });
      } else if (row.origen_ajuste === "ADJ_COM") {
        await delete_adjustment.run({ adj_id: row.id_adjust });
      }

      showAlert("Adjustment deleted (status = 0)", "success");
      await  JS_detail_adjust.get_list_ajustes();  // refresh the table
    } catch (err) {
      showAlert("Error deleting adjustment: " + err.message, "error");
    }
  }
};