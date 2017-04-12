odoo.define('fuse_calendar_customization.fuse_calendar_customization', function (require){
"use strict";
// require original module JS
//var widgets = require('calendar.widgets');
var calendar = require('base_calendar.base_calendar');

//calendar.widgets.SidebarFilter._add_filter(-1, _lt("Everybody's calendars"), true, false);
//calendar.widgets.SidebarFilter._add_filter(654, _lt("crotte de boeuf"), true, false);

// Extend widget
calendar.widgets.SidebarFilter.include({
	load_favorite_list: function () {
        var self = this;
        // Untick sidebar's filters if there is an active partner in the context
        var active_partner = (this.view.dataset.context.active_model === 'res.partner');
        return session.is_bound.then(function() {
            self.view.all_filters = {};
            self.view.now_filter_ids = [];
            self._add_filter(session.partner_id, session.name + _lt(" [Me]"), !active_partner);
            self._add_filter(-1, _lt("Everybody's calendars"), true, false);
            //Get my coworkers/contacts
            return new Model("calendar.contacts")
                .query(["partner_id"])
                .filter([["user_id", "=", session.uid]])
                .all()
                .then(function(result) {
                    _.each(result, function(item) {
                        self._add_filter(item.partner_id[0], item.partner_id[1], !active_partner, true);
                    });

                    self.view.now_filter_ids = _.pluck(self.view.all_filters, 'value');

                    self.render();
                });
        });
	},
});

	

});

