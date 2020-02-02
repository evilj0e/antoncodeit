/*
The Road-Kill Detective

My name is State Trooper Mark ("skidmark" ) McDingle.
My job is maintaining 117 miles of the Interstate, keeping it clean and
clear of dead varmints. It is a serious job and I take my job seriously.
I am the Road-Kill Detective. Every time I find some dead critter I scrape
it up and record what type it was in my dead-critter notebook. Mostly I
just cruise up and down the interstate and only find a few racoons or
the occasional squirrel... But recently the road-kill has become much more
exotic. There must be some illegal private zoo back in the woods with a major
security problem. But that's none of my business... Anything beyond
the fog-line is out of my jurisdiction.

Evidence
Here are some photos of what I came across last week:
There was a thing that looked like a hyena

==========h===yyyyyy===eeee=n==a========
a long black and white smudge that probably once was a penguin

======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n=
and an unlucky bear that was hit going the other direction

=====r=rrr=rra=====eee======bb====b=======

Kata Task
Even for a professional like me, the identification of flattened exotic
animals is not always easy! If it ever happens that I can't find all of
the remains, or if there are gaps or other parts that I don't recognise,
then I record it as ?? in my dead-critter notebook.

What I really need is a program that I can scan my photos into which can
give back the correct answer straight away.

Link to the description: https://www.codewars.com/kata/58e18c5434a3022d270000f2
Link to the live coding: https://youtu.be/Hy0Bzt5mLEw
*/

const nameToCompressed = name =>
    [...name]
    .reduce(([[last, n], ...rest], letter) =>
        last === letter
          ? [[last, n + 1], ...rest]
          : [[letter, 1], [last, n], ...rest], [['', 0]]);
    
const isSimilar = target => variant =>
  variant.length !== target.length
    ? false
    : variant.every(([l, n], i) =>
        target[i][0] === l && n <= target[i][1])

const roadKill = photo => {
  const LR_ANIMALS = ANIMALS;
  const RL_ANIMALS = 
    LR_ANIMALS
    .map(animal =>
      [...animal]
      .reverse()
      .join(''));
  
  const target = nameToCompressed(photo.replace(/=/g, ''))
  
  const foundedIndex = [
    ...LR_ANIMALS,
    ...RL_ANIMALS]
      .map(nameToCompressed)
      .findIndex(isSimilar(target))
  
  return foundedIndex === -1
    ? '??'
    : ANIMALS[foundedIndex % ANIMALS.length]
}
