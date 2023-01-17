const exercises = require('./exercises');

test('isUpperCase', () => {
  expect(isUpperCase('t')).toBe(false);
  expect(isUpperCase('T')).toBe(true);
  expect(isUpperCase('Four Score')).toBe(false);
  expect(isUpperCase('FOUR SCORE')).toBe(true);
  expect(isUpperCase('4SCORE!')).toBe(true);
  expect(isUpperCase('')).toBe(true);
});

test('removeVowels', () => {
  expect(removeVowels(['abcdefghijklmnopqrstuvwxyz'])).toEqual(["bcdfghjklmnpqrstvwxyz"]);
  expect(removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(["grn", "YLLW", "blck", "wht"]);
  expect(removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(["BC", "", "XYZ"]);
});

test('wordCap', () => {
  expect(wordCap('four score and seven')).toBe("Four Score And Seven");
  expect(wordCap('the javaScript language')).toBe("The Javascript Language");
  expect(wordCap('this is a "quoted" word')).toBe('This Is A "quoted" Word');
});

test('swapCase', () => {
  expect(swapCase('CamelCase')).toBe("cAMELcASE");
  expect(swapCase('Tonight on XYZ-TV')).toBe("tONIGHT ON xyz-tv");
});

test('staggeredCase', () => {
  expect(staggeredCase('I Love Launch School!')).toBe("I lOvE lAuNcH sChOoL!");
  expect(staggeredCase('ALL CAPS')).toBe("AlL cApS");
  expect(staggeredCase('ignore 77 the 444 numbers')).toBe("IgNoRe 77 ThE 444 nUmBeRs");
});

test('wordLengths', () => {
  expect(wordLengths('cow sheep chicken')).toEqual(["cow 3", "sheep 5", "chicken 7"]);
  expect(wordLengths('baseball hot dogs and apple pie')).toEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]);
  expect(wordLengths("It ain't easy, is it?")).toEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]);
  expect(wordLengths('Supercalifragilisticexpialidocious')).toEqual(["Supercalifragilisticexpialidocious 34"]);
  expect(wordLengths('')).toEqual([]);
});

test('searchWord', () => {
  let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
  expect(searchWord('his', text)).toBe(4);
  expect(searchWord('hip-hop', text)).toBe(1);
  expect(searchWord('Flow', text)).toBe(1);
  expect(searchWord('Inglewood', text)).toBe(2);
  expect(searchWord('the', text)).toBe(2);
});
