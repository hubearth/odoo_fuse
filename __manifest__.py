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
     'security/disableling_security.xml',
     'security/project.security.access.csv',
     'views/fuse_disableling.xml'    
 ], 
}
