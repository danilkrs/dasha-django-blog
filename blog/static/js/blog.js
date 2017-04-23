$(function(){
	if($('input[name="author"]').val() !== '') {
			$('input[name="author"]').css('background', '#c9a96e');
			$('input[name="author"]').css('color', 'white');
	}
	if($('select').children(':selected').val() !== '') {
			$('select').css('background', '#c9a96e');
			$('select').css('color', 'white');
	}
	if($('textarea').val() !== '') {
			$('textarea').css('background', '#c9a96e');
			$('textarea').css('color', 'white');
	}
	$('input').keypress(function(){
		var $this = $(this);
		$this.next().children().fadeOut('fast');
	});
	$('input[name="author"]').change(function(){
		var $this = $(this);
		if($this.val() !== '') {
			$this.css('background', '#c9a96e');
			$this.css('color', 'white');
		} else {
			$this.css('background', '#D3D9D9');
			$this.css('color', '#647373 !important');
		}
	});
	$('input[name="author"]').keydown(function(e){
		var $this = $(this);
		var keyCode = e.keyCode || e.which; 
		if (keyCode == 9) { 
			if($this.val() !== '') {
				$this.css('background', '#c9a96e');
				$this.css('color', 'white !important');
			} else {
				$this.css('background', '#D3D9D9');
				$this.css('color', '#647373 !important');
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
		if($this.val() !== '') {
			$this.css('background', '#c9a96e');
			$this.css('color', 'white');
		} else {
			$this.css('background', '#D3D9D9');
			$this.css('color', '#647373 !important');
		}
	});
	$('textarea').keydown(function(e){
		var $this = $(this);
		var keyCode = e.keyCode || e.which; 
		if (keyCode == 9) { 
			if($this.val() !== '') {
				$this.css('background', '#c9a96e');
				$this.css('color', '#fff !important');
			} else {
				$this.css('background', '#D3D9D9');
				$this.css('color', '#647373 !important');
			}
		}
	});
	$('textarea').keypress(function(){
		var $this = $(this);
		$this.next().children().fadeOut('fast');
	});
});