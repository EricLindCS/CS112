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