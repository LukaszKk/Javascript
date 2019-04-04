$(document).ready(function(){
	$('#M1').click(function(){
		var x = $(this);
    $('#H1').slideToggle(250, function(){
        if ($(this).is(':visible'))
			x.text('Mniej');  
        else
            x.text('Wiecej');     
		});       
	});
});
/*----------------------------------------------------------*/
$(document).ready(function(){
	$('#M2').click(function(){
		var x = $(this);
    $('#H2').slideToggle(250, function(){
        if ($(this).is(':visible'))
			x.text('Mniej');  
        else
            x.text('Wiecej');     
		});       
	});
});
/*----------------------------------------------------------*/
$(document).ready(function(){
	$('#M3').click(function(){
		var x = $(this);
    $('#H3').slideToggle(250, function(){
        if ($(this).is(':visible'))
			x.text('Mniej');  
        else
            x.text('Wiecej');     
		});       
	});
});
/*----------------------------------------------------------*/
$(document).ready(function(){
	$('#M4').click(function(){
		var x = $(this);
    $('#H4').slideToggle(250, function(){
        if ($(this).is(':visible'))
			x.text('Mniej');  
        else
            x.text('Wiecej');     
		});       
	});
});
/*----------------------------------------------------------*/
/*----------------------------------------------------------*/
/*----------------------------------------------------------*/
$(document).ready(function(){
	$('.h31').click(function(){
    $('#Karta1').slideToggle(250);
	});
});
/*----------------------------------------------------------*/
$(document).ready(function(){
	$('.h32').click(function(){
    $('#Karta2').slideToggle(250);
	});
});
/*----------------------------------------------------------*/
$(document).ready(function(){
	$('.h33').click(function(){
    $('#Karta3').slideToggle(250);
	});
});
/*----------------------------------------------------------*/
$(document).ready(function(){
	$('.h34').click(function(){
    $('#Karta4').slideToggle(250);
	});
});
/*----------------------------------------------------------*/
/*----------------------------------------------------------*/
/*----------------------------------------------------------*/
function validate(form)
{
	return (
	checkString1(form.elements["imie"].value, 'Imię') &&
	checkString2(form.elements["nazwisko"].value, 'Nazwisko') &&
	il(form.elements["osoby"].value) &&
	phoneNumber(form.elements["telefon"].value) &&
	Data(form.elements["data"].value));
}
function checkString1(st)
{
	if(isWhiteSpace(st) || isEmpty(st))
	{
		$('#im2').hide();
		$('#im1').show();
		$('#im1').css('display','inline');
	}
	else
	{
		$('#im1').hide();
		$('#im2').show();
		$('#im2').css('display','inline');
		return true;
	}
}
function checkString2(st)
{
	if(isWhiteSpace(st) || isEmpty(st))
	{
		$('#nz2').hide();
		$('#nz1').show();
		$('#nz1').css('display','inline');
	}
	else
	{
		$('#nz1').hide();
		$('#nz2').show();
		$('#nz2').css('display','inline');
		return true;
	}
}
function il(st)
{
	var s = st;
	if(s.length == 1 || s.length == 2)
	{
			if(isDigit(s.charAt(0)) || (isDigit(s.charAt(0)) && isDigit(s.charAt(1))))
			{
				$('#joke').hide();
				$('#il1').hide();
				$('#il2').show();
				$('#il2').css('display','inline');
				return true;
			}
			else 
			{
				$('#joke').hide();
				$('#il2').hide();
				$('#il1').show();
				$('#il1').css('display','inline');
			}
	}
	else
	{		
		if(s.length == 0)
		{
			$('#joke').hide();
			$('#il2').hide();
			$('#il1').show();
			$('#il1').css('display','inline');
		}
		else
		{
			$('#joke').show();
			$('#joke').css('display','inline');
			$('#il2').hide();
			$('#il1').show();
			$('#il1').css('display','inline');
		}
	}
}
function phoneNumber(st)
{
	var s = st;
	if(s.length == 9)
	{
			if(isDigit(s.charAt(0)) && isDigit(s.charAt(1)) && isDigit(s.charAt(2)) && isDigit(s.charAt(3)) && isDigit(s.charAt(4)) && isDigit(s.charAt(5)) &&
			   isDigit(s.charAt(6)) && isDigit(s.charAt(7)) && isDigit(s.charAt(8)))
			{
				$('#tel1').hide();
				$('#tel2').show();
				$('#tel2').css('display','inline');
				return true;
			}
			else 
			{
				$('#tel2').hide();
				$('#tel1').show();
				$('#tel1').css('display','inline');
			}
	}
	else
	{
		$('#tel2').hide();
		$('#tel1').show();
		$('#tel1').css('display','inline');
	}
}
function Data(st)
{
	var s = st;
	if(s.length == 10)
	{
		if((s.charAt(2) == '-') && (s.charAt(5) == '-'))
		{
			if(isDigit(s.charAt(0)) && isDigit(s.charAt(1)) && isDigit(s.charAt(3)) &&
			   isDigit(s.charAt(4)) && isDigit(s.charAt(6)) && isDigit(s.charAt(7)) &&
			   isDigit(s.charAt(8)) && isDigit(s.charAt(9)))
			{
				$('#dat1').hide();
				$('#dat2').show();
				$('#dat2').css('display','inline');
				$('#rezerwuj').show();
				return true;
			}
			else 
			{
				$('#dat2').hide();
				$('#dat1').show();
				$('#dat1').css('display','inline');
			}
		}
		else
		{
			$('#dat2').hide();
			$('#dat1').show();
			$('#dat1').css('display','inline');
		}
	}
	else
	{
		$('#dat2').hide();
		$('#dat1').show();
		$('#dat1').css('display','inline');
	}
}
function isWhiteSpace(st)
{
	var ws = "\t \n \r";
	for(i = 0; i <st.length; i++)
	{
		var c = st.charAt(i);
		if(ws.indexOf(c) == -1)
			return false;
	}
	return true;
}
function isEmpty(st)
{
	if(st.length == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function isDigit(c)
{
	return ((c >= "0") && (c <= "9"));
}