export default {
venta_summarized: () => {
    try {
      const data = query_comisiones_chart?.data || [];
      if (!Array.isArray(data)) return [];

      return data.filter(row => {
        const f3 = !sel_indicador.selectedOptionValue || row.indicador == sel_indicador.selectedOptionValue;
				const f4 = !select_prov.selectedOptionValue || row.proveedor == select_prov.selectedOptionValue;
        return f3 && f4;
      });
    } catch (e) {
      console.error("venta_summarized error:", e);
      return [];
    }
  },
liquidaciones_summarized: () => {
    try {
      const data = query_liquidaciones?.data || [];
      if (!Array.isArray(data)) return [];

      return data.filter(row => {
				const f4 = !select_prov.selectedOptionValue || row.proveedor == select_prov.selectedOptionValue;
        return f4;
      });
    } catch (e) {
      console.error("liquidacion_summarized error:", e);
      return [];
    }
  }	
	
	
	
	}
