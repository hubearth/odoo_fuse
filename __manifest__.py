{
 'name': 'Fuse extension',
 'description': 'Personalisation de Odoo pour la Fuse',
 'author': 'Hubert Pineault',
 'depends': [
     'base',
     'project',
     'mail',
     'calendar',
     'web_calendar'
 ],    
 'application': True,
 'data': [
     'security/disableling_security.xml',
     'security/ir.model.access.csv',
     'views/fuse_disableling.xml',
     'views/fuse_calendar_customization_view.xml',
     'views/fuse_project.xml'    
 ], 
 'test': [ 
     'static/tests/test_fuse_calendar_customization.js'     
 ]
}
