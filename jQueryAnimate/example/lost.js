(function() {
	var $boat = $('#boat');
	var $questionMark = $('#question-mark');

	var $title1 = $('#title1');
	var $title2 = $('#title2');
	var $form = $('#form');

	var $waterFront = $('#water-front');
	var $waterBack = $('#water-back');

	var $cloud1 = $('#cloud-group-1');
	var $cloud2 = $('#cloud-group-2');

	//init
	$boat.css({ 'left' : '-220px' });
	$questionMark.css({ 'opacity' : 0 });
	$title1.css({ 'opacity' : 0 });
	$title2.css({ 'opacity' : 0 });
	$form.css({ 'left' : '370px' });


	//boat
	$boat.animate({'left' : '20px'}, 2000, function() {
		loopBoat();
		$.when($questionMark.delay(500).animate({'opacity' : 1}, 1000)).then(function() {
			return $.when($title1.animate({'opacity' : 1}, 1000));
		}).then(function() {
			return $.when($title2.animate({'opacity' : 1}, 1000));
		}).then(function() {
			$form.animate({'left' : 0}, 500);
		});
	});

	// $questionMark.delay(500).animate({'opacity' : 1}, 1000).promise().then(function() {
	// 		return $title1.animate({'opacity' : 1}, 1000).promise();
	// 	}).then(function() {
	// 		return $title2.animate({'opacity' : 1}, 1000).promise();
	// 	}).done(function() {
	// 		$form.animate({'left' : 0}, 500);
	// 	});

	// boat
	function loopBoat() {
		$boat
			.animate({ 'bottom' : '15px'}, 500)
			.animate({ 'bottom' : '25px'}, 500, loopBoat);
	}

	//sea
	(function loopSea() {
		$waterFront
			.animate({ 'bottom' : '-65px', 'left' : '-30px' }, 500)
			.animate({ 'bottom' : '-60px', 'left' : '-25px' }, 500);

		$waterBack
			.animate({ 'bottom' : '15px', 'left' : '-20px' }, 500)
			.animate({ 'bottom' : '10px', 'left' : '-25px' }, 500);

		$.when($waterFront, $waterBack).done(loopSea);
	})();

	//cloud
	(function loopCloud() {
		$cloud1
			.animate({'left' : '-720px' }, 10000)
			.animate({ 'left' : '0px' }, 0);

		$cloud2
			.animate({'left' : '0px' }, 10000)
			.animate({ 'left' : '720px' }, 0, loopCloud);
	})();
})();