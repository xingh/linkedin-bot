//TODO : Change this to the number of pages to scroll. There are about 10-15 people per page. Don't go over board. 
var countOfPagesScrolled = 5;

function scrollDown(height, countOfPagesScrolled){
	scroll(0, document.body.clientHeight);
	setTimeout(function(){
		if(height != document.body.clientHeight && countOfPagesScrolled > 0){
			scrollDown(document.body.clientHeight, --countOfPagesScrolled);
		}else
			return sendRequest();
	}, 1500);
}

function sendRequest(){
	var contactsNum = 0;
	jQuery.each( $('li.mn-person-card'), 	function() {
		contactsNum++;

		var identity_full_name = $(this).find('a.mn-person-info__link span.mn-person-info__name').text().trim();
		var identity_occupation = $(this).find('a.mn-person-info__link span.mn-person-info__occupation').text().trim();
		var identity_occupation_split = identity_occupation.split(' at '); 
		var identity_occupation_title = identity_occupation_split[0];
		var identity_occupation_company = identity_occupation_split[1];
		var identity_social_lin = 'https://linkedin.com'+$(this).find('a.mn-person-info__link').attr('href');
		
		//IMPORTANT - UNCOMMENT THIS LINE IF YOU WANT TO CONNECT PEOPLE. I DONT TURN THIS ON BY DEFAULT BECAUSE IT SHOULD BE USED CAREFULLY
		//$(this).find('div.mn-person-card__card-actions button.mn-person-card__person-btn-ext.button-secondary-medium').click();
		
		console.log(contactsNum+','+identity_full_name+','+identity_occupation_title+','+identity_occupation_company+','+identity_social_lin);
	});
	console.log('Just added contacts: ' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);
