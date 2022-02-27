# elden-ring-messages
Generates all possible message combinations in the game Elden Ring.

In Elden Ring and other Souls games, players can leave messages for each other to find by selecting pairs of pre-written words and phrases in the menu. A message must always have at least one template-word pairing, but it can also have two pairs connected by a conjunction.

![message-menu](https://media.discordapp.net/attachments/652178351699787792/947554111333740624/IMG_1829.jpg?width=1191&height=670)

![message-menu-filled](https://media.discordapp.net/attachments/652178351699787792/947554112009044008/IMG_1828.jpg?width=1191&height=670)

Given that there are 25 templates and 363 words to choose from, this means that there are 9,075 possible single-pair phrases. This file is included in the output, and it's being used in the website (https://drewedgette.github.io/elden-ring-messages/).

![single-phrase-list](https://media.discordapp.net/attachments/652178351699787792/947636147067179048/Screenshot_108.png?width=1270&height=671)

Once you add a second phrase, you have to multiply the original set by itself, then multiply it by the conjunctions and add the original set.
9075 x 9075 x 10 + 9075

This brings the possible combinations to a grand total of 823,565,325.
