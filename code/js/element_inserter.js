/**
 * element inserter
 *
 * the element inserter is configured with a parent and an element list. the
 * element list provides the items that the user can select. there is also the
 * ability to create a new element through the interface. i suggest you find a
 * way to cache the element list separately from the inserter.
 *
 * elements in the list are expected to be in the form:
 *  { id: "div", name: "div", markup: "<div> </div>" }
 *
 * example:
 *  var config = {};
 *  config.parent_element = document.getElementById('test_element');
 *  config.element_list = [{ id: "div", name: "div", markup: "<div> </div>"}];
 *  var ei = ruib.element_inserter(config).draw();
 *
 */
var ruib = (ruib === undefined) ? {} : ruib;

ruib.element_inserter = function(my) {
    var that = {};
    my.textarea_id = 'markup_textarea';
    my.modal_id = 'element_inserter_modal';

    that.set_defaults = function() {
	if (my.element_list === undefined) { my.element_list = []; }
	my.element_list.unshift({id: "select", name: "select", markup: ""});
    };
    that.set_defaults();

    that.insert = function(element_markup) {
	$(my.parent_element).append(element_markup);
    };
    that.draw_header = function(parent_element) {
	var header = document.createElement('div');
	$(header).addClass('modal-header');
	$(parent_element).append(header);
	
	var close_button = document.createElement('button');
	$(close_button).addClass('close');
	$(close_button).attr('type', 'button');
	$(close_button).attr('aria-hidden', 'true');
	$(close_button).data('dismiss', 'modal');
	$(close_button).val('x');
	$(close_button).html('x');
	$(header).append(close_button);

	var header_title = document.createElement('h3');
	$(header_title).html('element inserter');
	$(header).append(header_title);
    };
    that.draw_body = function(parent_element) {
	var fieldset = document.createElement('fieldset');
	$(fieldset).addClass('modal-body');
	$(parent_element).append(fieldset);
	var element_select = document.createElement('select');
	$(element_select).on("change", function(e) {
	    var selected_id = $(e.currentTarget.selectedOptions[0]).attr('id');
	    var selected_markup = '';
	    for (var i = 0; i < my.element_list.length; i++) {
		if (my.element_list[i].id == selected_id) {
		    selected_markup = my.element_list[i].markup;
		    break;
		}
	    }
	    $('#'+my.textarea_id).val(selected_markup);
	});
	$(fieldset).append(element_select);
	for (var i=0; i<my.element_list.length; i++) {
	    var option = document.createElement('option');
	    $(option).attr('id', my.element_list[i].id);
	    $(option).html(my.element_list[i].name);
	    $(element_select).append(option);
	}
	$(fieldset).append(document.createElement('br'));
	var element_textarea = document.createElement('textarea');
	$(element_textarea).attr('id', my.textarea_id);
	$(element_textarea).attr('row', '3');
	$(fieldset).append(element_textarea);
    };
    that.draw_footer = function(parent_element) {
	var footer = document.createElement('div');
	$(footer).addClass('modal-footer');
	$(parent_element).append(footer);

	var close_button = document.createElement('a');
	$(close_button).addClass("btn");
	$(close_button).html("Close");
	$(close_button).on("click", function() {
	    $("#"+my.modal_id).modal("hide");
	    return false;
	});
	$(footer).append(close_button);
	var insert_button = document.createElement('input');
	$(insert_button).attr('type', 'submit');
	$(insert_button).addClass("btn btn-primary");
	$(insert_button).val("Insert");
	$(footer).append(insert_button);
    };
    that.draw_modal = function() {
	var modal_selector = document.createElement('div');
	$(modal_selector).addClass('modal');
	$(modal_selector).attr('id', my.modal_id);
	$(modal_selector).modal({show: true, backdrop: true});

	that.draw_header(modal_selector);

	var form = document.createElement('form');
	$(form).on('submit', function() {
	    that.insert($('#'+my.textarea_id).val());
	    $("#"+my.modal_id).modal("hide");
	    return false;
	});
	$(modal_selector).append(form);
	that.draw_body(form);

	that.draw_footer(form);
    };

    that.draw = function() {
	if (document.getElementById(my.textarea_id)) {
	    $("#"+my.modal_id).modal("show");
	}
	else {
	    that.draw_modal();
	}
    };

    return that;
};


