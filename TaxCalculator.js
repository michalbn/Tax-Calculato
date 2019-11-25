/***************************************************

michal ben mlaca
id: 308219435
*****************************************************/

//---------------------------------------------------------

function init ()//load html,css before java script
{
	syntax();
	var checkbox = document.getElementById ("checkBox1");
	if (checkbox.addEventListener) //listener to checkBox
	{
		checkbox.addEventListener ('click',OnChangeCheckbox, false);
	}
	document.getElementById("btnCalculate").addEventListener('click',OnChangeCheckboxBtn);//listener to button
}
//-------------------------------------------------------------

function OnChangeCheckbox (event)
{
	var checkbox = event.target;
	if (checkbox.checked)
	{
		with_v();	//call this function when user press 'v'
	}
	else
	{
		without_v();//call this function when user release 'v'
	}
}
//--------------------------------------------------------------

function OnChangeCheckboxBtn()//function for button listener
{
	var x=document.getElementById("checkBox1").checked;
	if(x===true)
	{
		calculate_tax_with_v();//calculate tax when user press 'v'
	}
	else
	{
		calculate_tax_without_v();//calculate tax when user release 'v'
	}	
}
//------------------------------------------------------------

function with_v()//hide the text
{
	var arr = document.getElementsByTagName("td");
	var i;
	for(i=0;i<arr.length-4;i++)
	{
		arr[i].style.display="none";
		
	}
}
//------------------------------------------------------------

function without_v()//show the text
{
	var arr1 = document.getElementsByTagName("td");
	var i;
	
	for(i=0;i<arr1.length-4;i++)
	{
		arr1[i].style.display="table-cell";
	}
}
//------------------------------------------------------------

function check_value(x)
{
	if(x==="")
	{
		x=0;
	}
	 else if(x<0)
	{
		alert("must be positive number");
	}
	else if(x>=0)
	{
		
	}
	else if (isNaN(x.oncut))
	{
		alert('must be a number');
	}
	
}
//-------------------------------------------------------------

function syntax()//Checking the string that the user entered
{
	document.getElementById("inputField").onblur= function() {check_value(this.value)};
	document.getElementById("inputField1").onblur= function() {check_value(this.value)};
	document.getElementById("inputField2").onblur= function() {check_value(this.value)};
	document.getElementById("inputField3").onblur= function() {check_value(this.value)};
	document.getElementById("inputField4").onblur= function() {check_value(this.value)};
	document.getElementById("inputField5").onblur= function() {check_value(this.value)};
	document.getElementById("inputField6").onblur= function() {check_value(this.value)};
	document.getElementById("inputField7").onblur= function() {check_value(this.value)};
	document.getElementById("inputField8").onblur= function() {check_value(this.value)};
	document.getElementById("inputField9").onblur= function() {check_value(this.value)};
	document.getElementById("inputField10").onblur= function() {check_value(this.value)};
	document.getElementById("inputField11").onblur= function() {check_value(this.value)};
	document.getElementById("inputField12").onblur= function() {check_value(this.value)};
	document.getElementById("inputField13").onblur= function() {check_value(this.value)};
}

//-------------------------------------------------------------

function calculate_tax_with_v()//calculate tax ->same salary every month
{
	var salary = document.getElementById("inputField").value;
	salary*=12;
	var tax= tax_level(salary);

	var bonus = document.getElementById("inputField13").value;//calculate bonus
	bonus*=2580;
	tax-=bonus;
	if(tax<0)
		tax=0;
	document.getElementById("payment").innerHTML = "the total tax is: " + tax;;//print to the screen
}
//-----------------------------------------------------------

function tax_level(x)//calculate tax level
{
	var tax;
	if(x>=0&&x<=74640)
	{
		tax=(x*10) / 100;
	}
	if(x>=74641&&x<=107040)
	{
		tax=7464+(((x-74640)*14)/100);
	}
	if(x>=107041&&x<=171840)
	{
		tax=7464+12000+(((x-107040)*20)/100);
	}
	if(x>=171841&&x<=238800)
	{
		tax=7464+12000+24960+(((x-171840)*31)/100);
	}
	if(x>=238801&&x<=496920)
	{
		tax=7464+12000+24960+45717+(((x-238800)*35)/100);
	}
	if(x>=496921&&x<=640000)
	{
		tax=7464+12000+24960+45717+136059+(((x-496920)*47)/100);
	}
		if(x>=640001)
	{
		tax=7464+12000+24960+45717+136059+203307+(((x-64000)*47)/100);
	}
	return tax;
}
//--------------------------------------------------------------------------

function calculate_tax_without_v()//calculate tax ->difrent salary every month
{
	var tax=0;
	var arr=[];//put value in array
	var i;
	arr[0]=parseFloat(document.getElementById("inputField1").value);
	arr[1]=parseFloat(document.getElementById("inputField2").value);
	arr[2]=parseFloat(document.getElementById("inputField3").value);
	arr[3]=parseFloat(document.getElementById("inputField4").value);
	arr[4]=parseFloat(document.getElementById("inputField5").value);
	arr[5]=parseFloat(document.getElementById("inputField6").value);
	arr[6]=parseFloat(document.getElementById("inputField7").value);
	arr[7]=parseFloat(document.getElementById("inputField8").value);
	arr[8]=parseFloat(document.getElementById("inputField9").value);
	arr[9]=parseFloat(document.getElementById("inputField10").value);
	arr[10]=parseFloat(document.getElementById("inputField11").value);
	arr[11]=parseFloat(document.getElementById("inputField12").value);
	
	for(i=0;i<arr.length;i++)//calculate tax
	{
		if(isNaN(arr[i])||arr[i]<0)
			arr[i]=0;
		tax+=arr[i];
	}
	var total_tax=tax_level(tax);
	var bonus = document.getElementById("inputField13").value;//calculate bonus
	bonus*=2580;
	if(bonus<0)//bonus must be positive
		bonus=0;
	total_tax-=bonus;
	if(total_tax<0)
		total_tax=0;
	document.getElementById("payment").innerHTML = "the total tax is: " + total_tax;//print to the screen
}
//----------------------------------------------------------------------

