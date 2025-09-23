export default {
  async insertAdjustments() {
    const selected = tbl_ventas.selectedRows;  // Replace with your table name
    if (!selected.length) {
      showAlert("Please select at least one row", "warning");
      return;
    }

    // Collect widget values for adjustments
    const adjAmount = inp_amount_adjustment.text   // Replace with widget names
    const adjType   = sel_tipo_ajuste.selectedOptionValue;
    const notes     = inp_adjust_note.text;
    const userId    = 1;  // Or set a fixed user_id

    try {
      // Run insert for each row sequentially
      for (let row of selected) {
        await insert_adjustment.run({
          sale_id: row.manage_id,           // comes from Table1 row
          adjustment_amount: adjAmount,
          adjustment_type: adjType,
          notes: notes,
          user_id: userId
        });
      }
      showAlert("Ajuste de Comision Ingresados!", "success");
      await list_ventas.run(); // refresh table
			
			// ✅ Close modal after success
      closeModal(mdl_add_addition);   // replace with your modal name
    } catch (err) {
      showAlert("Error inserting adjustments: " + err.message, "error");
    }
  },

	  async insertAdjustmentsGeneral() {
    const selected = tbl_ventas.selectedRows;
    if (!selected.length) {
      showAlert("No has seleccionado una Venta", "warning");
      return;
    }

    // Collect values for general adjustments
    const adjAmount   = inp_amount_adjustmentgeneral.text;
    const adjTypeId   = sel_tipo_ajustegeneral.selectedOptionValue;   // maps to adj_type_id
    const impactLiq   = moment(dt_fecha_liquid.selectedDate).startOf("month").format("YYYY-MM-DD");    // new widget for impact_liquidation
    const notes       = txt_coment_adj_general.text;
    const userId      = 1; // same as above, can be dynamic

    try {
      for (let row of selected) {
        await insert_adjustments_general.run({
          sale_id: row.manage_id,
          adjustment_amount: adjAmount,
          adj_type_id: adjTypeId,
          impact_liquidation: impactLiq,
          notes: notes,
          user_id: userId
        });
      }
      showAlert("Ajustes Generales ingresados!", "success");
      await list_ventas.run();
						// ✅ Close modal after success
      closeModal(mdl_add_addition)
			
    } catch (err) {
      showAlert("Error inserting general adjustments: " + err.message, "error");
    }
  }
};
