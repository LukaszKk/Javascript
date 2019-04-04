function checkValue()
{
	var value = document.getElementById("field").value;
	if( value > 0 )
		document.getElementById("result").innerHTML = "dodatnia";
	else if( value < 0 )
		document.getElementById("result").innerHTML = "ujemna";
	else if( value == 0 )
		document.getElementById("result").innerHTML = "zero";
	else
		document.getElementById("result").innerHTML = "to nie jest liczba";
}