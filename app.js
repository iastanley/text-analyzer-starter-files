// your code here!

function main(){

//calculate word count
function wordCountCalc(text){
	//split into array of words
	var wordArray = text.split(' ');
	//return array.length
	return wordArray.length;
}

//calculate unique word count
function uniqueCountCalc(text){
	//remove punctuation and extra spaces from string
	text = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');

	//convert string to lowercase
	text = text.toLowerCase();

	//split into array of words
	var wordArray = text.split(' ');

	//array of unique words
	var uniqueArray = [];
	wordArray.forEach(function(word){
		//if word is not in unique array push to unique array
		if(!uniqueArray.includes(word)){
			uniqueArray.push(word);
		}
	});

	//return number of unique words
	return uniqueArray.length;
}

//calculate average word length
function avgWordLengthCalc(text){
	//remove punctuation and extra spaces from string
	text = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');

	//split into array of words
	var wordArray = text.split(' ');

	//array to store length of each word
	var wordLengthArray = [];

	wordArray.forEach(function(word){
		wordLengthArray.push(word.length);
	});

	//calculate the average of wordLengthArray and return it
	var charSum = 0;
	wordLengthArray.forEach(function(wordLength){
		charSum += wordLength;
	});

	return charSum/wordLengthArray.length;

}

//calcualte average sentence length
function avgSentenceLengthCalc(text){
	//create array of sentences
	var sentences = text.split(/[.?!]/g);

	//trim each sentence of whitespace
	sentences.forEach(function(sentence, index){
		sentences[index] = sentence.trim();
	});

	//variable for sentence length in characters
	var sentenceLengthArray = [];
	//calculate length of each sentence
	sentences.forEach(function(sentence){
		
		//avoid weird empty strings caused by split()
		if(sentence.length !== 0){
			sentenceLengthArray.push(sentence.length);
		}
	});
	
	//calculate and return the average
	var charTotal = 0;
	sentenceLengthArray.forEach(function(sentenceLength){
		charTotal += sentenceLength;
	});

	return charTotal/sentenceLengthArray.length;
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

	//display results description list
	$('.js-results').removeClass('hidden');

	//update HTML to reflect changes
	$('.js-results dd').each(function(index, element){
		$(element).text(results[index]);
	});

}); //end of on click

} //end of main function


$(main);