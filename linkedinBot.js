//TODO : Change this to the number of pages to scroll. There are about 10-15 people per page. Don't go over board. 
var countOfPagesScrolled = 3;

function scrollDown(height, countOfPagesScrolled){
	scroll(0, document.body.clientHeight);
	setTimeout(function(){
		if(height != document.body.clientHeight && countOfPagesScrolled > 0){
			scrollDown(document.body.clientHeight, --countOfPagesScrolled);
		}else
			return sendOrAcceptRequest();
	}, 1500);
}

// Execute this (commented) if on My Network https://www.linkedin.com/mynetwork/
// Execute this (commented) if on Invitation Manager : https://www.linkedin.com/mynetwork/invitation-manager/
function sendOrAcceptRequest(){
	var contactsNum = 0;
	jQuery.each( $('li.mn-person-card'), 	function() {
		contactsNum++;

		var identity_owner        = "TeamMember";
		var identity_contact_type = "Network"; //default for now until we do some ML 
		var identity_touch_type   = "Social";
		var identity_touch        = "New";
		var identity_full_name    = $(this).find('a.mn-person-info__link span.mn-person-info__name').text().trim();
		var identity_job          = $(this).find('a.mn-person-info__link span.mn-person-info__occupation').text().trim();
		var identity_job_split    = identity_job.split(' at '); 
		var identity_job_title    = identity_job[0];
		var identity_job_company  = identity_job[1];
		var identity_social_lin   = 'https://linkedin.com'+$(this).find('a.mn-person-info__link').attr('href');
		
		// IMPORTANT - do not modify this timeout function otherwise your connections will fail. Linkedin's ajax functions won't respect all incoming requests.
		//setTimeout(function(){
			//IMPORTANT - UNCOMMENT THIS LINE IF YOU WANT TO CONNECT PEOPLE. I DONT TURN THIS ON BY DEFAULT BECAUSE IT SHOULD BE USED CAREFULLY
			//$(this).find('div.mn-person-card__card-actions button.mn-person-card__person-btn-ext.button-secondary-medium').click();
			console.log('Connected with :'+identity_full_name);
		//}, 1000);
		
		console.log(contactsNum+',"'+identity_owner+'","'+identity_contact_type+'","'+identity_job_title+'","'+identity_job_company+'","'+identity_full_name+'","'+identity_touch_type+'","'+identity_touch+'","'+identity_social_lin+'"');
	});
	console.log('Just added contacts: ' + contactsNum);
}


scrollDown(document.body.clientHeight, countOfPagesScrolled);
