import profanityList from '../../profanitylist';

function sortStringArraybyLength( a , b ) {
  return b.length - a.length;
}

function generateReplacement(profanity, length) {
  var replacement = "";
  var characterPool = "#&*%";

  for(var i = 0; i < length; i++) {
    replacement += profanity[i] == ' '
      ? ' '
      : characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }

  return replacement;
}

export default function filterProfanity(text) {
  if (text.length) {
    var sortedProfanity = profanityList.sort(sortStringArraybyLength);

    for(var i = 0; i < sortedProfanity.length; i++) {
      var profanity = sortedProfanity[i].toLowerCase();

      if (text.toLowerCase().search(profanity) >= 0) {
      	var replacement = generateReplacement(profanity, profanity.length);

      	text = text.toLowerCase().replace(profanity, replacement);
      }
    }
  }

  return text;
}
