var count=0;
 
	function agregarValores(){
		var nombre=document.getElementById("nombre").value;
		var apellidos=document.getElementById("telefono").value;
		var correo=document.getElementById("correo").value;
 
		count++;
 
		if(nombre.length>0 || apellidos.length>0)
		{
			var tbody = document.getElementById("miTabla").getElementsByTagName("TBODY")[0];
 
			var attrId = document.createAttribute('id');
			attrId.value=count;
 
			var td1 = document.createElement("TD");
			td1.appendChild(document.createTextNode(nombre));
			var td2 = document.createElement("TD");
			td2.appendChild(document.createTextNode(apellidos));
			var td3 = document.createElement("TD");
			td3.appendChild(document.createTextNode(correo));
			var td4 = document.createElement("TD");
			td4.appendChild(crearButton(count));
 
			var row = document.createElement("TR");
			row.setAttributeNode(attrId);
			row.appendChild(td1);
			row.appendChild(td2);
			row.appendChild(td3);
			row.appendChild(td4);
			tbody.appendChild(row);
		}
 
		document.getElementById("nombre").value="";
		document.getElementById("telefono").value="";
		document.getElementById("correo").value="";
	}
	function eliminarValor(id)
	{
		var row = document.getElementById(id);
		row.parentNode.removeChild(row);
	}
 
	function crearButton(id)
	{
		var button=document.createElement("input");
		var attrType=document.createAttribute('type');
		attrType.value="button";
		var attrValue=document.createAttribute('value');
		attrValue.value="Eliminar";
		var attrOnclick=document.createAttribute('onclick');
		attrOnclick.value="eliminarValor("+count+");";
 
		button.setAttributeNode(attrType);
		button.setAttributeNode(attrValue);
		button.setAttributeNode(attrOnclick);
 
		return button;
	}