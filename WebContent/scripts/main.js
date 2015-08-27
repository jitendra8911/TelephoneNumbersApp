  function signOut() {
	  var tableDiv = document.getElementById("div-telephoneNumbers");
	  tableDiv.innerHTML = ''
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      document.getElementById('divTelephoneNumbers').style.display = 'none';
      document.getElementById('divTelephoneNumberErrorMessage').style.display = 'none';
    });
  
  }
  function onSignIn(googleUser) {
	  var profile = googleUser.getBasicProfile();
	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	  console.log('Name: ' + profile.getName());
	  console.log('Image URL: ' + profile.getImageUrl());
	  console.log('Email: ' + profile.getEmail());
      document.getElementById('divTelephoneNumbers').style.display = 'block';
	}
  
  
  function validateTelephone(page)
  {
      /* start of telephone number validation*/
	  var tableDiv = document.getElementById("div-telephoneNumbers");
	  tableDiv.innerHTML = ''
	  var telephone=document.getElementById('inputTelephoneNumber').value;
      var reg1=/^[1-9]\d{9}$/;
      var reg2=/^[1-9]\d{6}$/;
      if(!(reg1.test(telephone) || reg2.test(telephone)))
    	  {
    	  document.getElementById('divTelephoneNumberErrorMessage').style.display = 'block';
    	  }
      else
    	  {
    	  document.getElementById('divTelephoneNumberErrorMessage').style.display = 'none';
    	  
    	  $.ajax({
    		    aysnc: true,
    		    cache: true,
    		   
    		    dataType: 'json',
    		    error: function(jqXHR, textStatus, error){
    		        console.log(error);
    		    },
    		    success: function (data, textStatus, jqXHR) {
    		    	var table = document.getElementById("table-telephoneNumbers");
    		        createTable(data,page)

    		        
    		    },
    		    type: 'GET',
    		    url: 'api/logic/computeTelephoneNumbers/'+telephone+'/'+page
    		});
    	  
    	  
    	  }
      
    

      /* end of telephone number validation */

  }
  
  function createTable(data,page)
  {
	  var tableDiv = document.getElementById("div-telephoneNumbers");
	  tableDiv.innerHTML = ''
	    var table = document.createElement('table');
	  table.border='1';
	  table.align='center';
	  var caption=document.createElement('caption');
	  caption.appendChild(document.createTextNode("Total number of combinations are"+data.message));
	  table.appendChild(caption);
	    var tableHead=document.createElement('THEAD');
	    
	
		       var tr = document.createElement('TR');
		       tableHead.appendChild(tr);		       		      
		           var th1 = document.createElement('TH');
		           var th2 = document.createElement('TH');
		           th1.appendChild(document.createTextNode('#'));
		           th2.appendChild(document.createTextNode('Number'));
		           tr.appendChild(th1);
		           tr.appendChild(th2);
	              table.appendChild(tableHead);
	    
	    
	    var tableBody = document.createElement('TBODY');
	    var seq=6*(page-1);
	    for (var telephoneNumber in data.payload){
		       var tr = document.createElement('TR');
		       tableBody.appendChild(tr);
		       var td1 = document.createElement('TD');
	           var td2 = document.createElement('TD');
	           seq++;
	           td1.appendChild(document.createTextNode(seq));
	           td2.appendChild(document.createTextNode(data.payload[telephoneNumber]));
	           tr.appendChild(td1);
	           tr.appendChild(td2);
	           
		      
	    } 
	       table.appendChild(tableBody);
	       tableDiv.appendChild(table);
	   
  }