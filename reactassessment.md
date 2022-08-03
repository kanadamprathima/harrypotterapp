# 🧙 Week 2 - React Challenge

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for this challenge

- You are allowed to consult the Reader, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to make this challenge public in any ways

#### Second opinion

- As per Codaisseur rules you can request a second opinion from another teacher if you disagree with your evaluation. To request reevaluation send an email to: teachers@codaisseur.com

#### Duration

- This exam ends at 15:30

#### Passing grade

This challenge is graded in red, yellow or green. Meaning of each grade:

- 📕 Red: you haven't completed the two mandatory sections. `Fail grade`.

- 📒 Yellow: you've completed both mandatory sections. `Pass grade`.

- 📗 Green: you've completed both mandatory sections + one bonus section. `Pass with honor grade`.

🚨 **If you've completed both mandatory sections, but it's not fully functional, you might still downgrade to a red.**

#### Results feedback

Correcting this assessments takes time. Please be patient with regards to getting the results of your assessments. Results will go out the following week between Monday and Tuesday.

#### How to make and submit your homework

- Use `npx create-react-app` to create a new react app
- Add this briefing to your repo as `BRIEFING.md`
- `create-react-app` will initialize a git repository for you, so don't make one yourself
- Go to `github.com` and
  - create a new `private` repository
  - make sure **NOT** to initalize with a readme/.gitignore as it will give you errors when you will try to push
  - Add the evaluator to your repository as a `collaborator` (karlaevelize, swendude and matiasgarcia91)
- Add your newly created git repository as a remote to your react app
- Push the initial version of your app created by `create-react-app`
- Start your react app with `npm run start`, as usual, and start programming.

#### Self assessment

- After you finish the challenge, go and fill up this form:

👉 [React Challenge Form](https://forms.gle/u12qYdMi1XFqppfGA)

#### What to expect after submitting this challenge?

- If you scored a red, a teacher will contact you for a conversation
- In case you scored yellow or green, you don't have to expect a conversation, but feel free to reach out to a teacher if you have questions

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Creating components
- Composing components and passing them data via props
- Using `event listeners` and `event handlers`
- Designing and managing component local state with `useState` hook
- Using the `useEffect` hook to fetch data
- Using `react-router-dom` to make static and dynamic routes
- Making controlled forms
- Mapping, filtering, finding & sorting arrays of objects
- Using npm to install packages and run scripts
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the Reader, Google (Stackoverflow), or the documentation links we provide below.

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

**TIP: Focus on the required features first!** Before moving to the bonus sections of this assessment, focus on implementing the madatory parts, then move on to the next ones.

## What are we building?

We are building a webapp with a list of Hogwarts students. It has 2 main pages

- A homepage with a list of students
- A details page for each student

## API

The data for this app is already available through an API. This way you can build your entire app without having to create a working API yourself.

👉 [Harry Potter API](https://hp-assessment-api.herokuapp.com/)

Endpoints:

⚡ GET hp/characters

⚡ GET hp/character/:id

⚡ GET hp/houses

⚡ GET hp/house/:id

## Wireframes

👉 [Homepage](https://media.discordapp.net/attachments/882561666787713024/885802683087355904/Image_2021-09-09_at_2.09.57_PM.png?width=1700&height=1236)
👉 [Character Details Page](https://media.discordapp.net/attachments/882561666787713024/885802686191112222/Image_2021-09-09_at_2.28.20_PM.png?width=1676&height=1236)
👉 [House Details Page](https://media.discordapp.net/attachments/882561666787713024/885802689261363221/Image_2021-09-09_at_3.05.44_PM.png?width=1648&height=1235)

## Required Features

### ❗ Feature 1 - Homepage

API endpoint: [ https://hp-assessment-api.herokuapp.com/hp/characters ]

- The Homepage displays a list of characters
- A separate component is used to display the characters
- Characters should be sorted alphabetically by their first name
- Each charcter is displayed with their name, birth, image, house (name or houseId) and "read more" button
- Clicking on the "Read more" button takes you to a details page

### ❗ Feature 2 - Character Details Page

API endpoint: [ https://hp-assessment-api.herokuapp.com/hp/character/:id ]

- A character is displayed with all its available information
- The data is fetched from the API, not hardcoded
- Params are used to get the character id

## Bonus Features

### ➕ Bonus 1 - Filter characters by house on the Homepage

API endpoint: [ https://hp-assessment-api.herokuapp.com/hp/houses ]

- There's a selector on the page with the 4 houses
- The houses are not harcoded, but fetched from the API
- When a house is selected, only characters from that house appear
- If no house is selected, we see all the students

### ➕ Bonus 2 - Search characters on the Homepage

Tip: Have a look at [".includes"](https://devdocs.io/javascript/global_objects/string/includes) to solve this bonus

Tip: This is the hardest feature of this app

- There's an input of type text on the Homepage and a local state to keep the searchTerm.
- Typing something on the input field filters the array of characters.
- If the name **OR** the house include the search term the character should be displayed
  (Ex: searchTerm = "G", should display every character in Gryffindor + **G**ilderoy + Cedric Di**GG**ory + more)

### ➕ Bonus 3 - Form to add comments on Character Details Page

Note: This is stored only in local state, when the page is refreshed everything should disappear.

Note: It's up to you to have the form in the same or in a different component

- There's a form with inputs for name and comment
- Submitting the form displays the name and comment on the screen
- Submitting a second comment also works

### ➕ Bonus 4 - House details page

API endpoint: [ https://hp-assessment-api.herokuapp.com/hp/house/:id ]

- Clicking on the house of a character (house name or houseId) in the Homepage takes you to a details page
- A house is displayed with all it's values (founder, animal, imgUrl, etc)
- There's also a list of students belonging to that house (ideally you use the separate component created for the Homepage)
- Params are used to get the house id
