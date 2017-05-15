// After an attendee has RSVPd for a Meetup, we need to log who they were and save them.
// This doesn't send the good to see you message yet, but it will in the future. 

function listMeetupAttendees(){
	var contactsNum = 0;
	jQuery.each( $('li.j_rsvper'), 	function() {
		contactsNum++;

		var identity_owner        = "TeamMember";
		var identity_contact_type = "Network"; //default for now until we do some ML 
		var identity_touch_type   = "Social";
		var identity_touch        = "Interaction";
		var identity_full_name    = $(this).find('a.unlink').text().trim();
		var identity_job          = "Attendee at Data Wranglers DC";
		var identity_job_split    = identity_job.split(' at '); 
		var identity_job_title    = identity_job_split[0];
		var identity_job_company  = identity_job_split[1];
		var identity_social_lin   = $(this).find('a.unlink').attr('href');
		
		// IMPORTANT - do not modify this timeout function otherwise your connections will fail. Linkedin's ajax functions won't respect all incoming requests.
		setTimeout(function(){
			//IMPORTANT - UNCOMMENT THIS LINE IF YOU WANT TO CONNECT PEOPLE. I DONT TURN THIS ON BY DEFAULT BECAUSE IT SHOULD BE USED CAREFULLY
			$(this).find('a.j-gtsy').click();
			console.log('Sent Good to See you to :'+identity_full_name);
		}, 1000);
		
		console.log(contactsNum+',"'+identity_owner+'","'+identity_contact_type+'","'+identity_job_title+'","'+identity_job_company+'","'+identity_full_name+'","'+identity_touch_type+'","'+identity_touch+'","'+identity_social_lin+'"');
	});
	console.log('Just added contacts: ' + contactsNum);
}

listMeetupAttendees();
