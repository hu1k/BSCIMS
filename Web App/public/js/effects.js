$(document).ready(function(){

	$('#successObjAlert').hide();	//hide the successObjAlert for now

	//hide the financeForm when the page loads along with the perspectiveDiv
	$('#financeForm').hide();
	$('#financePerspDiv').hide();

	//hide the customerForm when the page loads along with the perspectiveDiv
	$('#customerForm').hide();
	$('#customerPerspDiv').hide();

	//hide the internalForm when the page loads along with the perspectiveDiv
	$('#internalForm').hide();
	$('#internalPerspDiv').hide();

	//hide the internalForm when the page loads along with the perspectiveDiv
	$('#learnForm').hide();
	$('#learnPerspDiv').hide();

	$('#objPerspDropdownMenu').change(function(){ //inspect the dropdown selection
		value = $(this).val();

		if (value == 'financeSelect'){			  
			$('#customerForm').hide(500);	
			$('#customerPerspDiv').hide(500);
			$('#internalForm').hide(500);	
			$('#internalPerspDiv').hide(500);
			$('#learnForm').hide(500);	
			$('#learnPerspDiv').hide(500);

			$('#financeForm').show(500);			//reveal the financeForm with its perspectiveDiv
			$('#financePerspDiv').show(500);
		}

		else if (value == 'customerSelect'){		
			$('#financeForm').hide(500);	
			$('#financePerspDiv').hide(500);
			$('#internalForm').hide(500);	
			$('#internalPerspDiv').hide(500);
			$('#learnForm').hide(500);	
			$('#learnPerspDiv').hide(500);
			$('#successObjAlert').hide();

			$('#customerForm').show(500);			//reveal the customerForm with its perspectiveDiv
			$('#customerPerspDiv').show(500);
		}

		else if (value == 'internalSelect'){		
			$('#financeForm').hide(500);	
			$('#financePerspDiv').hide(500);
			$('#customerForm').hide(500);	
			$('#customerPerspDiv').hide(500);
			$('#learnForm').hide(500);	
			$('#learnPerspDiv').hide(500);


			$('#internalForm').show(500);			//reveal the internalForm with its perspectiveDiv
			$('#internalPerspDiv').show(500);
		}

		else  {		
			$('#financeForm').hide(500);	
			$('#financePerspDiv').hide(500);
			$('#customerForm').hide(500);	
			$('#customerPerspDiv').hide(500);
			$('#internalForm').hide(500);	
			$('#internalPerspDiv').hide(500);


			$('#learnForm').show(500);			//reveal the internalForm with its perspectiveDiv
			$('#learnPerspDiv').show(500);
		}
	});
});

/*$('#submitObjButton').click(function(){
	//f.preventDefault();
	$('#successObjAlert').slideDown();
	$('#successObjAlert').fade(2000);

});*/