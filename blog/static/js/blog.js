$(function(){
	if($('input[name="author"]').val() !== '') {
			$('input[name="author"]').css('background', '#c9a96e');
			$('input[name="author"]').css('color', '#000');
	}
	if($('select').children(':selected').val() !== '') {
			$('select').css('background', '#c9a96e');
			$('select').css('color', '#000');
	}
	if($('textarea').val() !== '') {
			$('textarea').css('background', '#c9a96e');
			$('textarea').css('color', '#000');
	}
	$('input').keypress(function(){
		var $this = $(this);
		$this.next().children().fadeOut('fast');
	});
	$('input[name="author"]').change(function(){
		var $this = $(this);
		var value = Boolean($this.val());
		if(value) {
            $this.css('background', '#c9a96e');
            $this.css('color', '#fff');
        } else {
            $this.css('background', '#D3D9D9');
            $this.css('color', '#000');
        }
	});
	$('input[name="author"]').keydown(function(e){
		var $this = $(this);
		var value = $this.val();
		var keyCode = e.keyCode || e.which; 
		if (keyCode == 9) { 
			if(value) {
				$this.css('background', '#c9a96e');
				$this.css('color', '#000');
			} else {
				$this.css('background', '#D3D9D9');
				$this.css('color', '#647373');
			}
		}
	});
	$('select').change(function(){
		var $this = $(this);
		$this.next().children().fadeOut('fast');
		if($this.children(':selected').val() !== ''){
			$this.css('background', '#c9a96e');
			$this.css('color', '#fff');
		} else {
			$this.css('background', '#D3D9D9');
			$this.css('color', '#647373');
		}
	});
	$('textarea').change(function(){
		var $this = $(this);
		var value = $this.val();
		if(value) {
			$this.css('background', '#c9a96e');
			$this.css('color', 'white');
		} else {
			$this.css('background', '#D3D9D9');
			$this.css('color', '#647373');
		}
	});
	$('textarea').keydown(function(e){
		var $this = $(this);
		var value = $this.val();
		var keyCode = e.keyCode || e.which; 
		if (keyCode == 9) { 
			if(value) {
				$this.css('background', '#c9a96e');
				$this.css('color', '#fff');
			} else {
				$this.css('background', '#D3D9D9');
				$this.css('color', '#647373');
			}
		}
	});
	$('textarea').keypress(function(){
		var $this = $(this);
		$this.next().children().fadeOut('fast');
	});
});