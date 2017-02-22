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
			
			$(".ui-progressbar-value").css({
				
			"display": "block",
			"margin": 0,
			"width": (parseInt(((checked / count) * 100),10)) + "%"
				
			});
			
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
//			checked++;
			console.log(checked);
//			$(".ui-progressbar-value").css({
//				
//				"display": "block",
//				"width": (parseInt(((checked / count) * 100),10)) + "%"
				
//			});
			
//			}"display","block");
			
			if (checkBox.hasClass('glyphicon-check')) {
			$(this).appendTo('.toDoItems');
			checked++;
			console.log(checked);
			$(".ui-progressbar-value").css({
				
				"display": "block",
				"width": (parseInt(((checked / count) * 100),10)) + "%"
			})
				
//			} else {
//			var del = window.confirm("Delete item?");
//			$(this).prependTo('.toDoItems');
//				if (del == true) {
//					$(this).remove();
//				}
//			}
			
			$(this).draggable({revert:'invalid'});	
				
			
		progressBarCalc();
			
			}
			
			else {
				checked--;
				console.log(checked);
				progressBarCalc();
				$(this).removeClass('draggable');
				$(".ui-progressbar-value").css({
				
				"display": "block",
				"width": (parseInt(((checked / count) * 100),10)) + "%"
			})
			}
			
		})
		
    var percentage = parseInt(((0 / 0) * 100),10);
		
	
	 $(".progressbar-bar").progressbar({
		  value: percentage
        });
		
//	function progressBarCalc(){
//		$(".progressbar-label").text((parseInt(((checked / count) * 100),10)) + "%");
//	}
		
	$(".progressbar-label").text((parseInt(((checked / count) * 100),10)) + "%");
		
//	$('.monster').hover(function(){
//		$('.ui-draggable-dragging').remove();
//		count--;
//		count_new--;
//		checked--;
//		if (count == 0 && checked == 0) {
//			count = 100;
//		}
//		progressBarCalc();
//		$(".ui-progressbar-value").css({
//			"display": "block",
//			"width": (parseInt(((checked / count) * 100),10)) + "%"
//			})
//		})

		
	$('.monster').droppable({
		tolerance: "pointer",
		drop: function(event, ui) {
//			$('.ui-draggable-dragging').remove();
			ui.draggable.remove();
			count--;
			count_new--;
			checked--;
			if ( count == 0 && checked == 0) {
				count = 100;
			}
			progressBarCalc();
				$(".ui-progressbar-value").css({				
				"display": "block",
				"width": (parseInt(((checked / count) * 100),10)) + "%"
			})
		}
//		drop: function(event, ui) {
//			$('.ui-draggable-dragging').remove();
//			count--;
//			count_new--
//			checked--;
//			if ( count == 0 && checked == 0) {
//				count = 100;
//			}
//			progressBarCalc();
//				$(".ui-progressbar-value").css({				
//				"display": "block",
//				"width": (parseInt(((checked / count) * 100),10)) + "%"
//			})
//
//	}	 

		
	});
		
	$('.monster').hover(
		function(){
		$(this).attr('src', '/images/Neko-Open.gif')
	});
		

		
		
		

	
	$('.monster').mouseout(
		function(){
		$(this).attr('src', '/images/Neko-Breathing-Resize.gif')
	});
		
	
	})
