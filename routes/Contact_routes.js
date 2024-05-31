const express=require('express')
const contact_route=express.Router()
const Contact_controller=require('../Controller/Contact_controller')
contact_route.post('/create_contact',Contact_controller.create_contact)
contact_route.get('/get_contact_id/:id',Contact_controller.get_contact_details_id)
contact_route.get('/get_all_contacts',Contact_controller.get_all_contacts)
contact_route.patch('/update_contact',Contact_controller.update_contact)
contact_route.delete('/delete_contact/:id',Contact_controller.delete_contact)




module.exports=contact_route