var response = prompt("You're at a massive gate of a dark, looming castle. The castle gate is locked and despite repeated knocks no one will answer. To your left is a moat, to your right is a ledge. Which way do you choose?")

if (response === "left") {
  response = prompt("You jump into the moat, feeling the decades of moat sludge crawl up you legs in the waist deep murky water.  As you push forward you feel some creature sliding around your ankles.  Will you continue forward or leave the moat?");

  if (response === "leave the moat" ) {
      response = alert("The creature tightens its grip on you legs, causing you to lose balance. As you frantically wade toward the embankment, the creature leaps from the dark water and bites the back of your neck, paralyzing you as it finishes its freshly caught meal.....you! Game Over.")
    }

  if (response === "continue forward") {
    response = prompt("The creature tightens its grip on you legs, causing you to lose balance. As you frantically grasp at the castle wall to keep yourself above the dark water, a voice calls out from the top of the wall 'Grasp the rope!!' Will you heed the strangers advice or ignore it?")
    }

    if (response === "ignore it") {
    response = prompt("The creature tightens its grip on you legs as you frantically wade toward the embankment, the creature leaps from the dark water and bites the back of your neck, paralyzing you as it finishes its freshly caught meal.....you! Game Over.")
    }

    if (response === "heed") {
    response = prompt("The creature tightens its grip on you legs as you frantically grasp the rope tightly. With a sudden jerk upward, you land safetly on top of the castle wall surrounded by armored knights. You're safe at last")
    }

    if (response !== "ignore it" || response !== "heed"){
      response = alert("Doing nothing? There is a time limit to your situation. Game over.")
    }





}

else if (response === "right") {
  response = prompt("Finding a steady foothold you jump and grasp the ledge. Pulling yourself up you find yourself in a dark hallway.  Not a sound can be heard from anywhere within the castle.  Next to you lies an unlit torch and a dagger. You must choose one to continue...");

  if (response === "torch" || response === "unlit torch"){
    response = prompt("Taking the torch from its holder, you light up the dark hallway. The torch light's reflection dances on the ornate gold and silver candelabras, casting flickering shadows upon the walls of the recently vacated castle.")
    }

  if (response === "dagger"){
    response = prompt("Taking the dagger from the wardrobe and leaving the torch, you silently creep through the empty halls of the giant castle.  What will you do with a dagger in an empty castle? Game over.")
    }





else if (response !== "left" || response !== "right") {
  response = alert("You must choose a path to continue")
}}
