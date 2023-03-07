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
  
];

function randomfact() {  
    let rand = Math.floor(Math.random() * igra.length);
    var broj = igra[rand];
   console.log(broj);
   num = num +1;
   document.getElementById("p1").innerHTML = broj;
   document.getElementById("p0").innerHTML = "Fact " + (rand+1) + ":";
   console.log(num);
}
