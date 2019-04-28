# Odoo Built in Method Documents 

## name_get

name_get() -> [(id, name), ...]

Returns a textual representation for the records in self. By default this is the value of the display_name field.

:return: list of pairs (id, text_repr) for each records :rtype: list(tuple)

## onchange

Return a decorator to decorate an onchange method for given fields.
Each argument must be a field name::

    @api.onchange('partner_id')
    def _onchange_partner(self):
        self.message = "Dear %s" % (self.partner_id.name or "")

In the form views where the field appears, the method will be called
when one of the given fields is modified. The method is invoked on a
pseudo-record that contains the values present in the form. Field
assignments on that record are automatically sent back to the client.

The method may return a dictionary for changing field domains and pop up
a warning message, like in the old API::

    return {
        'domain': {'other_id': [('partner_id', '=', partner_id)]},
        'warning': {'title': "Warning", 'message': "What is this?"},
    }


.. warning::

    ``@onchange`` only supports simple field names, dotted names
    (fields of relational fields e.g. ``partner_id.tz``) are not
    supported and will be ignored


## depends

Return a decorator that specifies the field dependencies of a "compute"
method (for new-style function fields). Each argument must be a string
that consists in a dot-separated sequence of field names::

    pname = fields.Char(compute='_compute_pname')

    @api.one
    @api.depends('partner_id.name', 'partner_id.is_company')
    def _compute_pname(self):
        if self.partner_id.is_company:
            self.pname = (self.partner_id.name or "").upper()
        else:
            self.pname = self.partner_id.name

One may also pass a single function as argument. In that case, the
dependencies are given by calling the function with the field's model.