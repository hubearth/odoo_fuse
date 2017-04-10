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
     'views/fuse_disableling.xml',
     'security/disableling_security.xml'     
 ], 
}
