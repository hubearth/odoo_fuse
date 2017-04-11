{
 'name': 'Fuse extension',
 'description': 'Personalisation de Odoo pour la Fuse',
 'author': 'Hubert Pineault',
 'depends': [
     'base',
     'project',
     'mail'
 ],    
 'application': True,
 'data': [
     'security/project.security.access.csv',
     'security/disableling_security.xml',
     'views/fuse_disableling.xml'    
 ], 
}
