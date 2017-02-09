// your code here!

function main(){

//calculate word count
function wordCountCalc(text){
	return 1;
}

//calculate unique word count
function uniqueCountCalc(text){
	return 2;
}

//calculate average word length
function avgWordLengthCalc(text){
	return 3;
}

//calcualte average sentence length
function avgSentenceLengthCalc(text){
	return 4;
}

//event listener for submit button
$('.js-submit').on('click', function(e){

	//may need to prevent defaults
	e.preventDefault();
	
	//get input from textarea upon clicking submit button
	var userText = $('#user-text').val();
	//each result will be pushed to this array
	var results = [];
	
	//function to calculate wordCount
	var wordCount = wordCountCalc(userText);
	results.push(wordCount);

	//function to calculate uniqueCount
	var uniqueCount = uniqueCountCalc(userText);
	results.push(uniqueCount);

	//function to calculate avgWordLength
	var avgWordLength = avgWordLengthCalc(userText);
	results.push(avgWordLength);

	//function to calculate avgSentenceLength
	var avgSentenceLength = avgSentenceLengthCalc(userText);
	results.push(avgSentenceLength);

	//make results not hidden
	$('.js-results').removeClass('hidden');

	//update HTML to reflect changes
	$('.js-results dd').each(function(index, element){
		$(element).text(results[index]);
	});

}); //end of on click

} //end of main function


$(main);