window.onload = AdjBW;

function AdjBW() {
var element = document.getElementById("title"),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('width');
    var element1 = document.getElementById('button');
    document.getElementById("button").style.width=top;
}
    

let num = 1;
const igra = [
  "Dogs are descendants of wolves and were the first animal to be domesticated by humans.",
  "The average body temperature of a dog is around 101.2 degrees Fahrenheit (38.4 degrees Celsius).",
  "Dogs have a sense of smell that is up to 100,000 times better than that of humans.",
  "The world's smallest dog breed is the Chihuahua, while the largest is the Great Dane.",
  "Dogs have been trained for a variety of jobs, including search and rescue, bomb detection, and therapy.",
  "A dog's nose print is unique, much like a human's fingerprints.",
  "Dogs can see in color, but their color vision is not as vivid as a human's.",
  "A wagging tail doesn't always mean a dog is happy - it can also be a sign of nervousness or aggression.",
  "Dogs can hear sounds that are too faint for humans to hear and can also detect sounds at much higher frequencies.",
  "Dogs have three eyelids - an upper eyelid, a lower eyelid, and a third eyelid, which helps keep the eye moist and protected.",
  
    "Dogs are descendants of wolves and were the first domesticated animal.",
    "There are over 300 different breeds of dogs.",
    "A dog's sense of smell is 1,000 times stronger than a human's.",
    "The tallest dog ever recorded was a Great Dane who stood at 44 inches tall.",
    "The smallest dog ever recorded was a Chihuahua who stood at just 3.8 inches tall.",
    "Dogs can see in color, but their vision is not as sharp as humans.",
    "Puppies are born deaf, blind, and toothless.",
    "Dogs have three eyelids: an upper lid, a lower lid, and a third lid, called a nictitating membrane.",
    "A dog's nose print is as unique as a human's fingerprint.",
    "Dogs can understand up to 250 words and gestures.",
    "Dogs can hear sounds at a frequency four times higher than what humans can detect.",
    "Dogs are social animals and enjoy being around other dogs and people.",
    "A wagging tail doesn't always mean a dog is happy. It can also indicate fear or aggression.",
    "Dogs can get jealous and exhibit behaviors similar to humans.",
    "The most popular dog name in the world is 'Max'.",
    "Dogs can detect changes in human mood and behavior.",
    "Dogs can get sunburned, especially breeds with light-colored fur.",
    "A dog's average body temperature is around 101.5 degrees Fahrenheit.",
    "Dogs sweat through their paw pads, not by panting like humans.",
    "Some breeds of dogs are more prone to certain health issues, such as hip dysplasia or respiratory problems.",
    "Dogs have a strong instinct to protect their owners and their home.",
    "Dogs have been trained to detect seizures, cancer, and other medical conditions.",
    "Dogs have been used in law enforcement for centuries, including tracking, search and rescue, and bomb detection.",
    "Dogs have been trained to perform a wide range of tasks, from guiding the blind to pulling sleds.",
    "The Basenji is the only dog breed that doesn't bark.",
    "Dogs have been known to travel hundreds of miles to find their way back home.",
    "Dogs have a natural instinct to dig, which can be frustrating for their owners.",
    "Dogs have been bred for specific purposes, such as hunting, herding, and guarding.",
    "Dogs have been known to save their owners from danger, such as house fires or drowning.",
    "The oldest dog on record lived to be 29 years and 5 months old.",
    "Dogs have a special gland in their anus that releases a unique scent, which is why they sniff each other's behinds.",
    "Dogs have been known to form strong bonds with other animals, including cats and even horses.",
    "Dogs can learn new tricks at any age.",
    "Dogs have a natural instinct to chew, which can help keep their teeth clean and strong.",
    "Some breeds of dogs are more intelligent than others, with Border Collies and Poodles often considered the smartest.",
    "Dogs can suffer from anxiety and depression, just like humans.",
    "Dogs have been trained to provide emotional support to people with mental health issues.",
    "Dogs have been used in therapy to help people with physical disabilities or illnesses.",
    "Dogs have been used in the military since ancient times.",
    "Dogs can be trained to detect drugs, explosives, and other contraband",
    "Dogs have been domesticated for at least 15,000 years.",
  "There are over 340 different breeds of dogs worldwide.",
  "Dogs can hear sounds at frequencies up to 65,000 Hz (humans can only hear up to 20,000 Hz).",
  "A dogs sense of smell is up to 100,000 times better than a human’s.",
  "Dogs sweat through their paw pads.",
  "The average body temperature for a dog is 101.2 degrees Fahrenheit.",
  "Dogs can see in the dark better than humans can.",
  "Dogs have three eyelids.",
  "A dogs nose print is unique, much like a human fingerprint.",
  "Dalmatians are born completely white and develop spots as they grow older.",
  "Greyhounds are the fastest dogs, capable of running up to 45 miles per hour.",
  "Dogs have been trained to detect various diseases, including cancer and COVID-19.",
  "Puppies are born blind and deaf.",
  "Dogs can feel jealousy and guilt.",
  "The tallest dog on record was a Great Dane named Zeus, who was 44 inches tall at the shoulder.",
  "Dogs have been known to save their owners from danger.",
  "A dogs whiskers help them navigate and sense their surroundings.",
  "The oldest dog on record was an Australian Cattle Dog named Bluey, who lived to be 29 years and 5 months old.",
  "Dogs can understand up to 250 words and gestures.",
  "The Basenji is the only breed of dog that does not bark.",
  "Pugs were originally bred to be lap dogs for Chinese emperors.",
  "Dogs can have up to 300 million olfactory receptors in their noses.",
  "The shape of a dogs ears can affect their hearing ability.",
  "Dogs have a wet nose to help absorb scent chemicals.",
  "The Chihuahua is the smallest breed of dog.",
  "Dogs can sense changes in the earths magnetic field.",
  "Poodles were originally bred to retrieve ducks and other waterfowl for hunters.",
  "The Alaskan Malamute is one of the oldest breeds of dog.",
  "Dogs can dream just like humans can.",
  "The Shih Tzu was bred to be a companion dog for Chinese royalty.",
  "A dogs tail can indicate their mood and emotions.",
  "The Afghan Hound has a reputation for being the dumbest breed of dog.",
  "Dogs have been used for various jobs throughout history, including hunting, herding, and protecting.",
  "The Bichon Frise is hypoallergenic, making it a popular choice for people with allergies.",
  "Dogs can hear sounds that are four times farther away than what humans can hear.",
  "The Bull Terrier is known for its unique egg-shaped head.",
  "Dogs have an excellent sense of taste and can distinguish between sweet, sour, salty, and bitter flavors.",
  "The Samoyed breed was originally used for hunting and herding in Siberia.",
  "Dogs can feel empathy for their owners and other animals.",
  "The Dachshund was originally bred to hunt badgers and other small animals.",
  "Dogs have been trained to assist people with disabilities, including guide dogs and hearing dogs.",
  "The Golden Retriever is one of the most popular breeds of dog in the world.",
  "Dogs can learn from each other and imitate their behaviors.",
];

function randomfact() {  
    let rand = Math.floor(Math.random() * igra.length);
    var broj = igra[rand];
    
   num = num +1;
   document.getElementById("p1").innerHTML = broj;
   document.getElementById("p0").innerHTML = "Fact " + (rand+1) + ":";
}


// continuously update the scale of elem1 to match that of elem2
setInterval(() => {
  const elem2 = document.getElementById('Fact');
  const elem1 = document.getElementById('button');
  const transformValue = getComputedStyle(elem1).getPropertyValue('transform');
  var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
    matches = $(elem1).css('-webkit-transform').match(matrixRegex);
  //elem2.style.transform = transformValue;
  elem2.style.transform = "scale(" + 1/matches[1] + ", " + 1/matches[2] + ")";
  
}, 10);