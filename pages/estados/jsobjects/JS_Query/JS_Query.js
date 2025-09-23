export default {
  async updateEstado() {
    try {
      // Run query
      const res = await update_estado.run();

      // Show success message
      showAlert("✅ Estado Actualizado Correctamente", "success");

      // Reset state
      storeValue("estado_to_edit", null);

      // Close modal
      closeModal(mdl_info_estado);

      // Refresh the table
      await list_estados.run();

      return res;
    } catch (err) {
      showAlert(`❌ Error Actualizando estado: ${err.message}`, "error");
      throw err;
    }
  }
};
