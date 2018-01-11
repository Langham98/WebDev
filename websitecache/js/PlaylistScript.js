//shopping basket
	
	$(function(){
	console.log("reached basket");
    
	
	$('.song').draggable({
        revert:true,
        proxy:'clone',
        onStartDrag:function(){
			console.log('dragging')
            $(this).draggable('options').cursor = 'not-allowed';
            $(this).draggable('proxy').css('z-index',10);
        }
 
    });
	    $('.playlist').droppable({
       
	   onDragEnter:function(e,source){
		   $(source).draggable('options').cursor = 'auto';
	   },
	   
	   onDragLeave: function (e,source){
		   $(source).draggable('options').cursor = 'not-allowed';
	   },
	   
	   
        onDrop:function(e,source){
			console.log('dropped');
            var song = $(source).data('song');
            var length = $(source).data('length');
            console.log("adding to cart")
			addProduct(song,length);
        }
    });
	
    var data = {"total":0,"rows":[]};
    var totalLength = 0;
    
	function addProduct(song,length){
        function add(){
            for(var i=0; i<data.total; i++){
                var row = data.rows[i];
                if (row.song == song){
                    row.quantity += 1;
                    return;
                }
            }
            data.total += 1;
            data.rows.push({
                song:song,
                quantity:1,
                length:length
            });
        }
        add();
        totalLength += length;
        $('#cartContent').datagrid('loadData', data);
        $('div.playlist .total').html('Total: '+totalLength);
    }    


	});







	
	
	

