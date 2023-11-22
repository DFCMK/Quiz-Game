# JavaScript Quiz


This website features a JavaScript quiz designed to provide users with an opportunity to test their knowledge of the basics of the programming language. The quiz aims to offer a learning experience by highlighting the correct answers in green, even when the user selects an incorrect option.

Are you ready for the challenge? <a href="https://dfcmk.github.io/Quiz-Game/">JavaScript Quiz</a>

## Table of Content

- <a href="#user-experience-ux">User Experience UX</a>

 [Site Structure](#site-structure)
  
- <a href="#design-choices">Design Choices</a>

  - [typography](#typography)

  - [Color Scheme](#color-scheme)

- <a href="#features">Features</a>
  - <a href="#existing-features">Existing Features:</a>
    - [Home page](#home-page)
    - [Question cards](#question-cards)
    - [Mute/unmute button](#mute/unmute-button)
    - [Questioncard-counter](#questioncard-counter)
    - [Score area](#score-area)
    - [Gamesound](#game-sound)
    - [Game over](#game-over)
    - [Replay menu](#historical-places)
    - [Results](#fun-places)

  - <a href="#features">Future Features</a>
    - [Name submission form](#name-submission-form)
    - [Levels](#levels)
    - [Jokers](#jokers)
    - [firework animation](#firework-animation)
    - [Timer](#timer)
    - [Countdown](#countdown)

- <a href="#technologies-used">Technologies Used</a>

- [Testing](#testing)

- [Deployment](#deployment)

- [Credits](#credits)

  - [Content](#content)
  
  - [Media](#media)
  
  - [Code](#code)
  
- [Acknowledgements](#acknowledgements)

<a class="heading-link" href="#user-experience-ux"></a>

<a class="heading-link" href="#user-experience-ux"></a>
## User Experience UX


### Site Structure:

The JavaScript Quiz is designed to test and engage users with 15 JavaScript-related questions. It features a homepage with an introduction and a start button, multiple-choice question cards, and results displayed at the end. The game promotes learning by highlighting correct and incorrect answers.


<a class="heading-link" href="#design-choices"></a>
## Design Choices

### Typography:

No custom fonts were imported for the quiz as it did not appear necessary. The site utilizes default fonts, which were deemed sufficient for the design.

### Color Scheme:

The selected color scheme for the quiz features a blue background with an hsl(--hue) hue, complemented by white question boxes and answer buttons in the same color. This choice was made to maintain focus on the quiz content. The combination of white question boxes and blue buttons enhances the visual harmony with the background while capturing the user's attention effectively.

For a visual representation of the contrast, refer to the screenshot below:
 

![Picture about colorscheme](./assets/images/color-scheme.png "color-scheme")


## Features:

The quiz website consists of a homepage with a brief introduction and a start button to initiate the quiz. The main quiz section includes 15 multiple-choice questions, each displaying a question and four possible answers. The game provides immediate feedback by highlighting correct answers in green and incorrect ones in red. At the end of the quiz, the user receives a summary of correct and incorrect answers, along with a congratulatory message. If the user answers incorrectly three times, the quiz ends, and they have the option to retry or return to the homepage. The site also features a mute button for audio control and includes a replay option.

### Existing Features:
  #### Home page:
  - The homepage comprises the game title, a concise introduction to the game and its rules, a start button for initiating the quiz, and a background image designed to pique curiosity about the quiz. 
  
  The screenshots below provide examples of how the homepage would appear on both a laptop and a smartphone.

  ![Homepage on Laptop](./assets/images/homepage-laptop.png "Homepage on Laptops")

  ![Homepage on smartphone](./assets/images/homepage-smartphone.png "Homepage on smartphone")


  #### Question cards: 
  
  - The question cards feature a clear and user-friendly design. Each card includes a well-formulated question, accompanied by four multiple-choice answers. The chosen color scheme ensures a visually cohesive experience, with white question boxes and hsl(--hue) blue answer buttons, blending seamlessly with the background.
  
  The screenshots below illustrate these design elements on both a laptop and a smartphone for a comprehensive view.

  ![Homepage on Laptop](./assets/images/homepage-laptop.png "Homepage on Laptops")

  ![Homepage on smartphone](./assets/images/homepage-smartphone.png "Homepage on smartphone")

  #### Mute/unmute button: 
  - The mute/unmute button serves as a crucial element for sound control within the quiz. Users can easily toggle between muted and unmuted states, providing them with the flexibility to customize their audio experience. This feature ensures a seamless and adjustable sound environment, catering to individual preferences.
  
  The game sound is muted by default to enhance the user experience, as illustrated below:


      ![Mute/unmute button](./assets/images/mute&unmute-button.png "Mute/unmute button")

  #### Score area: 
  - Bla Bal Bal

  #### Gamesound: 
  - fnkasjfkjas
  
  #### Game over:
  - fkafasjklf 

  #### Replay menu: 
  - jkdbasjkf

  #### Results:
  - dkasnfklajsnf



## Technologies Used

- [HTML5](#html5): provides some of the content and structure for the website

- [CSS](#css): provide the styling

- [JavaScript](#javascript): Provides content and add interactivity to game.

- [VS Code](vs-code): used to deploy the website.

## Testing

Please refer to <a href="coming.soon"><em>here<em></a> for more information on testing the JavaScript quiz.

## Deployment 

This site was depolyed to GitHub pages. The steps to deploy a site are shown below:

1. In the GitHub Repository called <b>Quiz-Game</b> click on the <b>Settings</b> button on the Repoitory navigation menu.

2. In <b>Settings</b> on the left side, go down to the <b>Pages</b> item and click on it.

3. Make sure the <b>Source</b> item is set to: <b>Deploy from a branch</b>

4. at the <b>Branch</b> item underneth the <b>source</b> item, set the branch to main and save it.

5. Once you have selected the main branch, the page will automatically refresh to show a detailed ribbon display indicating that the deployment was successful. If the page does not refresh automatically, refresh it manually.
<!--
![Screenshoot from Github deployment](./assets/images/guthub-deployment.png "GitHub depoloyment")

To get to the live link of the GitHub repository - click here: <a href="https://github.com/DFCMK/Budapest">https://github.com/DFCMK/Budapest</a>
-->


### To Fork the repository on GitHub:

Forking a GitHub repository creates a copy of the repository in your own GitHub account. You can view and modify the copy without affecting the original repository.

To fork a repository:

1. Log in to GitHub and navigate to the repository you want to fork.
2. Click the Fork button in the top-right corner of the page.
3. Select a name for your forked repository.
4. Click the Fork button to create the copy.

Once you have forked a repository, you can clone it to your local computer and start making changes. When you are ready to share your changes, you can create a pull request to the original repository.
<!--
![Screenshoot from Github deployment](./assets/images/forking.png "GitHub depoloyment")
-->
#### To create a local clone of this project:

1. Click the Code tab under the repository's name.
2. Click the clipboard icon in the Clone with HTTPS section to copy the URL.
<!--
![Screenshoot from Github deployment](./assets/images/git-clone.png "GitHub depoloyment")
-->
Once you have copied the URL, you can use a Git client to clone the repository to your local computer.
Here are the steps to clone a repository using Git Bash:

3. Open Git Bash.
4. Navigate to the directory where you want to clone the repository.
5. Type the following command and press Enter:

git clone <URL>

Replace <URL> with the URL of the repository that you copied in step 2.

This will create a local clone of the repository in the current directory.

You also can create and name the directory where the clone should be saved in, with adding the directory name after the <URL>. So the full command would look like this: git clone <URl> XXXX(This is a directory name)

## Credits

  ### Content:

     

   ### Media:



   ## Acknowledgements:



Denes Kalnoky 2023.
   



 






















  



 