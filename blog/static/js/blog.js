var ContactForm = {
    init: function (fieldType, fieldName) {
    	var self = this;
    	self.authorField = $('input[name="author"]');
    	self.genderField = $('select[name="gender"]');
    	self.textField = $('textarea[name="text"]');
    	self.checkField(self.authorField, Boolean(self.authorField.val()));
    	self.checkField(self.genderField, Boolean(self.genderField.val()));
    	self.checkField(self.textField, Boolean(self.textField.val()));
    	self.changeField(self.authorField);
    	self.changeField(self.genderField);
    	self.changeField(self.textField);
    },
	checkField: function(field, fieldValue){
		if(fieldValue) {
            field.css('background', '#c9a96e');
            field.css('color', '#fff');
            field.addClass('ready-field');
            field.next().children().fadeOut('fast');
        } else {
            field.css('background', '#D3D9D9');
            field.css('color', '#647373');
            field.removeClass('ready-field');
			var errorBlockByClass = field.attr('name');
			var errorBlock = $('.' + errorBlockByClass);
			var errorBlockHasChild = Boolean(errorBlock.has('div').length);
			if(!errorBlockHasChild) {
                var append = '<div class="validation-error-triangle"></div>';
                append += '<div class="validation-error"><p>This field is required.</p></div>';
                errorBlock.append(append);
            }
			field.next().children().fadeIn('fast');
        }
	},
	changeField: function (field) {
		var self = this;
        field.change(function () {
            self.checkField(field, Boolean(field.val()));
        });
		field.keyup(function () {
			self.checkField(field, Boolean(field.val()));
		});
    }
};

$(function () {
	ContactForm.init();
});