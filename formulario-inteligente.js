$("#verMasCampos").change(function() {
			if ($(this).val() == "yes") {
				$('#masCamposDiv').show();
				$('#masCampos').attr('required','');
				$('#masCampos').attr('data-error', 'Este campo es requerido.');
			} else {
				$('#masCamposDiv').hide();
				$('#masCampos').removeAttr('required');
				$('#masCampos').removeAttr('data-error');				
			}
		});
		$("#verMasCampos").trigger("change");
		
$("#verMasCamposGroup").change(function() {
			if ($(this).val() == "yes") {
				$('#masCamposGroupDiv').show();
				$('#masCampos1').attr('required','');
				$('#masCampos1').attr('data-error', 'Este campo es requerido.');
				$('#masCampos2').attr('required','');
				$('#masCampos2').attr('data-error', 'Este campo es requerido.');
				$('#masCampos3').attr('required','');
				$('#masCampos3').attr('data-error', 'Este campo es requerido.');
			} else {
				$('#masCamposGroupDiv').hide();
				$('#masCampos1').removeAttr('required');
				$('#masCampos1').removeAttr('data-error');
				$('#masCampos2').removeAttr('required');
				$('#masCampos2').removeAttr('data-error');	
				$('#masCampos3').removeAttr('required');
				$('#masCampos3').removeAttr('data-error');	
			}
		});
		$("#verMasCamposGroup").trigger("change");
		