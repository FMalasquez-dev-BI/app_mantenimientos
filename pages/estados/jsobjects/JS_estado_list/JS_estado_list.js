export default {
  applyFilters: () => {
    const data = list_estados.data || [];

    return data.filter(row => {
      const f1 = !selfilt_bonos.selectedOptionValue || row.bonos == selfilt_bonos.selectedOptionValue;
      const f2 = !selfilt_salida.selectedOptionValue || row.salida_anticipada == selfilt_salida.selectedOptionValue;
      const f3 = !selfilt_comision.selectedOptionValue || row.comision == selfilt_comision.selectedOptionValue;
      const f4 = !selfilt_proceso.selectedOptionValue || row.proceso_alta == selfilt_proceso.selectedOptionValue;
      const f5 = !selfil_cond.selectedOptionValue || row.condicionamiento == selfil_cond.selectedOptionValue;
      const f6 = !selfilt_ranking.selectedOptionValue || row.ranking == selfilt_ranking.selectedOptionValue;
      const f7 = !selfilt_liq.selectedOptionValue || row.liquidacion == selfilt_liq.selectedOptionValue;
      const f8 = !selfilt_seg_gest.selectedOptionValue || row.segmento_gestion == selfilt_seg_gest.selectedOptionValue;
			
			const f9 = !selfil_recup.selectedOptionValue || row.recuperable == selfil_recup.selectedOptionValue;
			
			const f10 = !selfil_obj_bono.selectedOptionValue || row.recuperable == selfil_obj_bono.selectedOptionValue;
			

      return f1 && f2 && f3 && f4 && f5 && f6 && f7 && f8 && f9 && f10;
    });
  }
};
