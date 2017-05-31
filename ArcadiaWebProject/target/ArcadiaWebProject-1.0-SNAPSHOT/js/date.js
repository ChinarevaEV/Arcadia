function dateVeryfy(x1,x2)
{
	var ax1 = x1.split('.');
	var ax2 = x2.split('.');
	var data1 = new Date(ax1[2],ax1[1],ax1[0]);
	var data2 = new Date(ax2[2],ax2[1],ax2[0]);
	
    if (data2<=data1)
    {
        alert( " Sorry, wrong date entered!" );
		event.preventDefault();
		return 0;
		
		
    } else {
		
		
		return 1;
		
	}
    
}

function formatDate(date) {

					  var dd = date.getDate();
					  if (dd < 10) dd = '0' + dd;

					  var mm = date.getMonth() + 1;
					  if (mm < 10) mm = '0' + mm;

					  var yy = date.getFullYear();
					  //if (yy < 10) yy = '0' + yy;

					  return dd + '.' + mm + '.' + yy;
					}
