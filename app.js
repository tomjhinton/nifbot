require('dotenv').config()
var Twitter = require('twitter')
const axios = require('axios')


let  arr = [
` “You either know fashion or you don’t.” – Anna Wintour`,

`“You can never take too much care over the choice of your shoes. Too many women think that they are unimportant, but the real proof of an elegant woman is what is on her feet.” – Christian Dior`,

`“I loathe narcissism, but I approve of vanity.” – Diana Vreeland`,


`“Fashion is what you’re offered four times a year by designers. And style is what you choose.” – Lauren Hutton`,

`“Florals for spring? Groundbreaking.” – Miranda Priestly`

,`“One is never over-dressed or under-dressed with a Little Black Dress.” – Karl Lagerfeld`,

`“The customer is the final filter. What survives the whole process is what people wear. I’m not interested in making clothes that end up in some dusty museum.” – Marc Jacobs`,

`“I think there is beauty in everything. What ‘normal’ people would perceive as ugly, I can usually see something of beauty in it.” – Alexander McQueen`,

`“Shoes transform your body language and attitude. They lift you physically and emotionally.” – Christian Louboutin`,

`“I like my money right where I can see it: hanging in my closet.” – Carrie Bradshaw`,



`“Trendy is the last stage before tacky.” – Karl Lagerfeld`,


`“I have always believed that fashion was not only to make women more beautiful, but also to reassure them, give them confidence.” – Yves Saint Laurent`,

`“Style is a way to say who you are without having to speak.” – Rachel Zoe`,


`“It pains me physically to see a woman victimized, rendered pathetic by fashion.” – Yves Saint Laurent`,

`“Fashion is the armor to survive the reality of everyday life.” – Bill Cunningham`,

`“When you hear designers complaining about the challenge of their profession, you have to say: Don’t get carried away—it’s only dresses.” – Karl Lagerfeld`,

`“Always dress like you’re going to see your worst enemy.” – Kimora Lee`,

`“Fashion is not necessarily about labels. It’s not about brands. It’s about something else that comes from within you.” – Ralph Lauren`,


`“The most courageous act is still to think for yourself. Aloud.” – Coco Chanel`,

`“Clothes mean nothing until someone lives in them.” – Marc Jacobs`,

`“We must never confuse elegance with snobbery.” – Yves Saint Laurent`,

`“Fashion is only the attempt to realize art in living forms and social intercourse.” – Sir Francis Bacon`,

`“Girls do not dress for boys. They dress for themselves, of course, each other. If girls dressed for boys, they’d just walk around naked at all times.” – Betsey Johnson`,


`“Fashion is very important. It is life-enhancing, and, like everything that gives pleasure, it is worth doing well.” – Vivienne Westwood`,

`“What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.” – Miuccia Prada`,

`“When I first moved to New York, and I was totally broke, sometimes I would buy Vogue instead of dinner. I felt it fed me more.” – Carrie Bradshaw`,

`“Fashion should be a form of escapism and not a form of imprisonment.” – Alexander McQueen`,

`“Over the years, I have learned that what is important in a dress is the woman who is wearing it.” – Yves Saint Laurent`,

`“We don’t need fashion to survive, we just desire it so much.” – Marc Jacobs`,

`“In a machine age, dressmaking is one of the last refuges of the human, the personal, the inimitable.” – Christian Dior`,

`“Clothes are like a good meal, a good movie, great pieces of music.” – Michael Kors`,

`“The joy of dressing is an art.” – John Galliano`,

`“Don’t be into trends. Don’t make fashion own you, but you decide what you are, what you want to express by the way you dress and the way you live.” – Gianni Versace`,


`“Fashion, somehow for me, is purely and happily irrational.” – Hedi Slimane`,


`“When you go to a nice restaurant, you want to be relaxed and have a drink and everything, you want to look at people who look well. You don’t want to look at some slob with an open shirt and a hairy chest—at least I don’t.” – Iris Apfel`,

`“Whoever said that money can’t buy happiness, simply didn’t know where to go shopping.” – Bo Derek`,


`“Fashion has to reflect who you are, what you feel at the moment and where you’re going.” – Pharrell Williams`,


`“You gotta have style. It helps you get down the stairs. It helps you get up in the morning. It’s a way of life. Without it, you’re nobody.” – Diana Vreeland`,



` “I don’t do fashion. I am fashion.” – Coco Chanel`,

`“I’m a very down-to-earth person, but it is my job to make that earth more pleasant.” – Karl Lagerfeld`,


`“Conformity is the only real fashion crime. To not dress like yourself and to sublimate your spirit to some kind of group identity is succumbing to fashion fascism.” – Simon Doonan`,



`“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street; fashion has to do with ideas, the way we live, what is happening. – Coco Chanel`,


`“I’ll stop wearing black when they make a darker color.” – Wednesday Addams`,

`“Make it simple, but significant.” – Don Draper`,

`“A great dress can make you remember what is beautiful about life.” – Rachel Roy`,

`“In order to be irreplaceable, one must always be different.” – Coco Chanel`,

`“People will stare. Make it worth their while.” – Harry Winston`,

`“When you don’t dress like everybody else, you don’t have to think like everybody else.” – Iris Apfel`,


`“Buy less, choose well.” – Vivienne Westwood`,

`“Style is very personal. It has nothing to do with fashion. Fashion is over quickly. Style is forever.” – Ralph Lauren`,

`“My mother was right: When you’ve got nothing left, all you can do is get into silk underwear and start reading Proust.” – Jane Birkin`,

`“Too much good taste can be very boring. Independent style, on the other hand, can be very inspiring.” – Diana Vreeland`,

`“I’m just trying to change the world, one sequin at a time.” – Lady Gaga`,

`“If I can have any impact, I want women to feel good about themselves and have fun with fashion.” – Michelle Obama`,

`“You can have anything you want in life, if you dress for it.” – Edith Head`,

`“The dress must follow the body of a woman, not the body following the shape of the dress.” – Hubert de Givenchy`,

`“Real style is never right or wrong. It’s a matter of being yourself on purpose.” – G. Bruce Boyer`,


`“Style is a simple way of saying complicated things.” – Jean Cocteau`,

`“Give a girl the right shoes, and she can conquer the world.” – Marilyn Monroe`,

`“A girl should be two things: classy and fabulous.” – Coco Chanel`,

`“Fashion changes, but style endures.” – Coco Chanel`,

`“Style is knowing who you are, what you want to say and not giving a damn.” – Orson Welles`,

`“I don’t believe in fashion. I believe in costume. Life is too short to be the same person every day.” – Stephanie Perkins`,

`“Style; all who have it have one thing: originality.” – Diana Vreeland`,

`“Clothes have nothing until someone lives in them.” – Marc Jacobs`,

`“I can’t concentrate in flats.” – Victoria Beckham`,

`“Playing dress-up begins at age five and never really ends.” – Kate Spade`,

`“Fashion is like eating, you shouldn’t stick to the same menu.” – Kenzo
Takada`,

`“Isn’t elegance forgetting what one is wearing?” – Yves Saint Laurent`,

`“Style is primarily a matter of instinct.” – Bill Blass`,

`“Style is very important. It has nothing to do with fashion. Fashion is over quickly. Style lasts forever.” – Ralph Lauren`,

`“Women who wear black lead colorful lives.” – Neiman Marcus`,



`“You can have anything you want, if you dress for it.” – Edith Head`,



`“A little bad taste is like a nice splash of paprika. We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical. I think we could use more of it. No taste is what I’m against.” – Diana Vreeland`,

`“I design for the woman who loves being a woman.” – Diane von Furstenberg`,

`“Sweatpants are a sign of defeat. You lost control of your life so you bought some sweatpants.” – Karl Lagerfeld`,



`“I have four bedrooms in my house. One is for guests, the other three are for closets.” – André Leon Talley`,

`“When you don’t feel to dress means that you are depressed. You need a fashion shower.” – Anna Dello Russo`,



` “Fashion is all about happiness. It’s fun. It’s important. But it’s not medicine.” – Donatella Versace`,

`“I was at school when Britney Spears’s ‘Baby One More Time’ came out. I changed my uniform to look like hers. I just looked slutty after that, so thank you, Britney.” – Alexa Chung`,

`“Fashion wasn’t what you wore someplace anymore; it was the whole reason for going.” – Andy Warhol`,

`“A woman is never sexier than when she is comfortable in her clothes.” – Vera Wang`,






`“Fashion is part of the daily air, and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.” – Diana Vreeland`,

`“I’ve always thought of accessories as the exclamation point of a woman’s outfit.” – Michael Kors`

]



var client = new Twitter({
  consumer_key: process.env.API_key,
  consumer_secret: process.env.API_secret_key,
  access_token_key: process.env.Access_token,
  access_token_secret: process.env.access_token_secret
})

let ans =

axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.giphy_key}&q=next%20in%20fashion&limit=100`)
  .then(response => {
    // console.log(response.data.data[0].images['fixed_height'].url)
    ans =response.data.data.filter(x=> x.slug.includes('netflix-fashion-designer'))[Math.floor(Math.random()*response.data.data.length)-1].bitly_gif_url

    const update = arr[Math.floor(Math.random()*arr.length)-1] + ' ' + ans
    client.post('statuses/update', {status: update },  function(error, tweet, response) {
  if(error) throw error;
  // console.log(tweet);  // Tweet body.
  // console.log(response);  // Raw response object.
});

  })
  .catch(error => {
    console.log(error);
  })
//console.log(ans)
