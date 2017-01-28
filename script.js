//Define variables
var item;
var itemArray = []
var latestItem;
var labelAttribute;
var checked;
var count = 100;
var checked = 0;
var count_new = 0;
function progressBarCalc(){
	$(".progressbar-label").text((parseInt(((checked / count) * 100),10)) + "%");
}
//var realLatestItem = (latestItem) - 1
//	When text is entered, we populate that as a li item in our ul
	$(function(){
		
		function progressBarCalc(){
		$(".progressbar-label").text((parseInt(((checked / count) * 100),10)) + "%");
	}
		
		$(".form-control").focus();
		
		$("form").submit(function(e){
			latestItem = itemArray.length;
			e.preventDefault();
			item = $('input').val();
			$('input').val("");
			count_new++;
			count = count_new;
			console.log(count);
			
			if (item !=='') {
			$('ul').append("<li><span class='glyphicon glyphicon-unchecked draggable boxes'></span> " + item +" </li>");
				
			} else {
				window.alert("Please input a list item!");
			}
			
		progressBarCalc();
	});

		
		
		$('ul').on('click','li',function(e){
			var checkBox = $(this).find('.glyphicon');
			checkBox.toggleClass('glyphicon-unchecked glyphicon-check');
			$(this).toggleClass("text-muted");
			checked++;
			console.log(checked);
			
			if (checkBox.hasClass('glyphicon-check')) {
			$(this).appendTo('.toDoItems');
				
			}
				
//			} else {
//			var del = window.confirm("Delete item?");
//			$(this).prependTo('.toDoItems');
//				if (del == true) {
//					$(this).remove();
//				}
//			}
			
			$(this).draggable();
			
		progressBarCalc();
			
			})
		
    var percentage = parseInt(((0 / 0) * 100),10);
		
	
	 $(".progressbar-bar").progressbar({
		  value: percentage
        });
		
//	function progressBarCalc(){
//		$(".progressbar-label").text((parseInt(((checked / count) * 100),10)) + "%");
//	}
		
	$(".progressbar-label").text((parseInt(((checked / count) * 100),10)) + "%");
  
	 

		
	});
