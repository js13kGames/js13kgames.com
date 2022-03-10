# JS13KGAMES 2022 WEBSITE TODO

Rough draft (really, everything can be discussed) of the pages and their functionalities for the new website. Might be missing some stuff. Turn it into GitHub's tasks/issues/features? Set priorities as must-haves and not-so-needed-extras?

## MAIN PAGE [/]

Top menu, intro text, a few banners/boxes with important messages, latest blog posts, snippets of games/experts/prizes/categories, banners of partners at the bottom.

## GAMES [/games/]

Menu containing all the years, with the latest edition being selected, and showing categories from that given year. Below, the list of all the entries from the given year. Ability to sort them on submission date, name, author.

IMPORTANT: move all the entries from the old website (all previous years) to the new website.

## GAME [/games/GAME_NAME/]

Game page with game's title, screenshot, details (author's nick/name, link to profile, solo/team, link to GitHub, website, Twitter, etc), stats/achievements/badges/medals (year submitted, places, submitting few years in a row, top something in a given category, etc), button to play the game, description and controls, categories, comments (from all registered users, experts/judges marked uniquely).

## WINNERS [/winners/]

List of winners, menu with years. Ability to sort on submission date, name, author.

## EXPERTS [/experts/]

List of experts, menu with years. Ability to sort on name.

## EXPERT [/experts/EXPERT_NAME/]

Expert's profile with theid basic info. Below, the list of all the comments they gave to any entries.

## PRIZES [/prizes/]

List of prizes, menu with years. Ability to sort on submission date, name, author.

## PLACES [/places/]

List of places (what prize is assigned to a given place from a specific category), menu with years.

## CATEGORIES [/categories/]

List of categories, menu with years.

## PARTNERS [/partners/]

List of partners, menu with years. Beside the linked logo, every partner gets a few sentences about them.

## REGISTER [/register/]

Page to register, preferably as easy as possible - through GitHub? Only asking for email/username?

## LOGIN [/login/]

Page to log in - through GitHub/Twitter/user+pass?

## SUBMIT [/submit/]

Submit form, the less information you have to enter (and the more is taken from your profile) the better. You have to register first to submit. In the perfect situation, a "submit" is just a single button that turns a draft of an entry with all the fields into a submission.

DRAFTS

A draft of an entry can be created to reserve the name and the slug, and dev can work on it by uploading a new build in a zip, so it can be tested on the website, enter and modify any info like title, description, controls, screenshots, etc.

VALIDATING

Validation bot runs through the zip attached checking the size limit, external links, etc.

ACCEPTING

If a submission is validated and everything seems ok, it is automatically accepted and published on the website. Email message with confirmation.

REJECTING

If a validation bot detects any issues, it prevents a submission from being accepted - all issues are presented as detailed messages of what was wrong and how it could be fixed. Only after fixing everything an entry can be accepted.

SHARING

Automatically sharing on js13kGames' social media, Twitter and Facebook, when the game is accepted.

BUGFIXING

Submitted entry can't be normally edited after it is submitted, but can get bugfixes. Those can be applied by the author(s), it can be a description change, new zip, etc. Text field to indicate what is being fixed. Admin need to accept those. They can happen between the time the entry was submitted and up to 24 hours after the final deadline on September 13th.

## VOTE [/vote/]

Voting app that allows those participants who submitted an entry to cast votes on other folks' entries. While voting they give points/stars (0-5? 0-10?) to a given entry and also leave a comment. Based on how Itch.io works? You can vote on given criteria of an entry: Innovation, Fun, Theme, Gameplay, Graphics, Audio, and Controls, and games end up in rankings based on those as well, not only the categories.

Experts only give feedback - write a comment under the games they were assigned to.

Judges vote for entries in special categories - for example WebXR. Those are treated separately, with its own scoring. A judge panel lists all the games from the given year, newly submitted at the top, but can be sorted based on date, category, score. Info about average score and the one given by judge if they already voted.

Community Awards could be done by anyone who have an account, but is not an expert/judge/participant? Or allow everyone, but limit the complexity to a single point per person?

## ADMIN [/admin/]

Admin panel to manage submitted entries - they can be downgraded from accepted to drafts, or be rejected entirely. Admin can add a message to the author why this is happening.

PRIZE INPUT/FORWARDING

Ability to assign prizes that will be given to the winners. Messaging-like system? Inbox where winner can see details of the prize they got, and the ability to decline it (if they are not interested in using it) which will make the prize go to the next winner in ranking (where they can do the same).

ADDRESS EXPORT

Ability to export the list of all the shipping addresses to a Spreadsheet, so swag can be shipped. Then passing the tracking number to given recipients.

MESSAGING

Being able to message specific groups - those who participated in the WebXR category, or those who won t-shirts.

## PANEL [/panel/]

Edit all the things like bio, urls, socials of your profile. Same for teams (folks can be added/removed to the teams, they have rights to edit the details). Input for shipping address and t-shirt size for when someone wins the swag.

## USERS [/users/]

List of all the users: participants, experts, judges, admins. Ability to sort on name.

## USER [/users/NAME/]

Profile page of a given user - all the info about them: photo, bio, website, social media (Twitter, GitHub, etc), teams. List of all their activities, including submitted games, and/or given comments.

## TEAMS [/teams/]

List of all the teams. Ability to sort on name.

## TEAM [/teams/NAME/]

Profile page of a given team - all the basic info about it: logo, description, team members, website, social media. List of all their submissions.

## BLOG [/blog/]

List of blog posts. Admin or registered user with manually granted rank Writer can prepare the draft that is then approved by an Admin and published. All registered users can comment.

## BLOG POST [/blog/SLUG/]

Blog post with title, date published, images, text, and comments.

## RULES [/rules/]

Static page of all the rules (and FAQ).

## PRESSKIT [/presskit/]

Standard presskit contents do be downloaded.

## NEWSLETTER [/newsletter/]

Form to input name and email to subscribe to the js13kNewsletter.

## CONTACT [/contact/]

Contact form (secured from spam), email, social accounts.

## SITEMAP [/sitemap/]

List of all the top level pages.