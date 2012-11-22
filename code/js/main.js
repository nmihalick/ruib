/**
 * GLOBALS
 */
var app = {};
$(document).ready(function() {
    $("#ruib-edit").on("click", function(e) {
	$("*").on("click", function(e) {
	    var editModal = document.createElement('div');
	    $(editModal).addClass("modal hide");
	    $(editModal).attr('id', 'editModal');
	    $(editModal).modal({show: true, backdrop: false});

	    var editModal_header = document.createElement('div');
	    $(editModal_header).addClass('modal-header');
	    $(editModal_header).appendTo(editModal);
	    var editModal_closeButton = document.createElement('button');
	    $(editModal_closeButton).addClass('close');
	    $(editModal_closeButton).attr('type', 'button');
	    $(editModal_closeButton).attr('aria-hidden', 'true');
	    $(editModal_closeButton).data('dismiss', 'modal');
	    $(editModal_closeButton).val("x");
	    $(editModal_closeButton).html("x");
	    $(editModal_closeButton).appendTo(editModal_header);
	    var editModal_headerTitle = document.createElement('h3');
	    $(editModal_headerTitle).html("element editor");
	    $(editModal_headerTitle).appendTo(editModal_header);

	    var editModal_body = document.createElement('div');
	    $(editModal_body).addClass('modal-body');
	    $(editModal_body).html(e.currentTarget);
	    $(editModal_body).appendTo(editModal);

	    var editModal_footer = document.createElement('div');
	    $(editModal_footer).addClass('modal-footer');
	    $(editModal_footer).appendTo(editModal);
	    return false;
	});
	return false;
    });
});
