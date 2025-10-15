export default {
  venta_applyFilters: () => {
    const data = list_ventas_2.data || [];

    return data.filter(row => {
      const f1 = !dp_fecha_liq.formattedDate || row.fecha_liquidacion == dp_fecha_liq.formattedDate;
      const f2 = !select_prov.selectedOptionValue || row.proveedor == select_prov.selectedOptionValue;
      const f3 = !sel_indicador.selectedOptionValue || row.indicador == sel_indicador.selectedOptionValue;
      const f4 = !sel_ajustes.selectedOptionValue || row.commision_adjustment == sel_ajustes.selectedOptionValue;
      return f1 && f2 && f3 && f4;
    });
  },
};
