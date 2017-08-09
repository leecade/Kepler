
Template.panelUser.helpers({

	fullname: function() {
		return this.username!==this.name ? this.username+' ('+this.name+')': this.username;
	}
});

/*Template.panelUser.events({
	'click .nav-tabs a': function(e, tmpl) {
		e.preventDefault();
		$(e.currentTarget).tab('show');
	}
});
*/
Template.panel_user_btns.onRendered(function() {
	var self = this;
	self.$('.user-btn-del').btsConfirmButton(function(e) {
		K.Profile.friendDel(self.data.id);
	});
	self.$('.user-btn-block').btsConfirmButton(function(e) {
		K.Profile.userBlock(self.data.id);
	});	
});

Template.panel_user_btns.events({
	'click .user-btn-add': function(e, tmpl) {
		K.Profile.friendAdd(this.id);
	},
	'click .user-btn-confirm': function(e, tmpl) {
		K.Profile.friendConfirm(this.id);
	}
});
