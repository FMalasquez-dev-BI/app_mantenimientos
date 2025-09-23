export default {
	async updateAdjustment () {
		try {
			const row = tbl_list_adjustments.updatedRow;   // row being edited

			if (!row) {
				showAlert("No row to update", "warning");
				return;
			}

			// Decide target table depending on origen_ajuste
			if (row.origen_ajuste === "ADJ_GEN") {
				await update_commision_general.run({
					adj_id: row.id_adjust,
					sale_id: row.sale_id ?? 1,
					adjustment_amount: row.adjustment_amount,
					adj_type_id: row.adj_type_id,
					impact_liquidation: row.impact_liquidation,
					notes: row.notes,
					user_id: row.user_id ?? 1
				});
			} else if (row.origen_ajuste === "ADJ_COM") {
				await update_commision_adjustment.run({
					adj_id: row.id_adjust,
					sale_id: row.sale_id ?? 1,
					adjustment_amount: row.adjustment_amount,
					adj_type_id: row.adj_type_id,
					notes: row.notes,
					user_id: row.user_id ?? 1
				});
			}

			showAlert("Adjustment updated successfully!", "success");
			await JS_detail_adjust.get_list_ajustes(); // refresh your table query

			await JS_ventas.venta_applyFilters(); // refresh your table query
		} catch (err) {
			showAlert("Error updating adjustment: " + err.message, "error");
		}
	}
}
