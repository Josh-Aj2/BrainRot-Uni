# **BrainRot Universe**

**Created by:** Ajene and Joshua

## 🚀 **Mission Statement**

**BrainRot Universe** is a user-friendly platform designed for anime enthusiasts to easily access and explore a wide variety of anime. Users can browse through a massive collection of anime, see upcoming seasons, a variety of character's information, search for their favorite anime, and enjoy fun interactive features like random joke generation and quirky language translations. Our goal is to provide a seamless and enjoyable entertainment experience.

## **API & React Router**

This application will use multiple APIs to provide comprehensive game data and interactive features.

- **Link to API Documentation:** Jikan API [`https://docs.api.jikan.moe/`]

### **API Endpoints:**

- **API Endpoint #1: `https://api.jikan.moe/v4/top/anime?page=${page}`**
  - **Description**: Fetch with detailed information about the top anime.
  - **Data Values**:
    - `mal_id`: Anime ID
    - `image`: Anime cover image
    - `title_english`: Anime title
    - `genre`: Anime genre
    - `synopsis`: Brief description of the anime
    - `trailer`: Link to a brief video of the anime
    - `aired`: Air date
    - `status`: If the show is aired
    - `demographics.name`: The type of anime
- **API Endpoint #2: `https://api.jikan.moe/v4/top/characters?page=${page}`**
  - **Description**: Fetch with detailed information about the top characters.
  - **Data Values**:
    - `mal_id`: Character ID
    - `name`: Character name
    - `image`: Image of character
    - `about`: Detailed description about character
    - `description`: Detailed description
    - `nicknames`: Other names character is known by
- **API Endpoint #3: `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`**
  - **Description**: Fetch with detailed information about new anime seasons.
  - **Data Values**:
    - `mal_id`: Anime ID
    - `image`: Anime cover image
    - `title_english`: Anime title
    - `genre`: Anime genre
    - `synopsis`: Brief description of the anime
    - `trailer`: Link to a brief video of the anime
    - `aired`: Air date
    - `status`: If the show is aired
    - `demographics.name`: The type of anime
- **API Endpoint #4: `https://api.jikan.moe/v4/anime?q=${searchQuery}&page=${page}`**
  - **Description**: Allow the user to search with given term through a list of anime that match given search term.
  - **Data Values**:
    - `mal_id`: Anime ID
    - `image`: Anime cover image
    - `title_english`: Anime title
    - `genre`: Anime genre
    - `synopsis`: Brief description of the anime
    - `trailer`: Link to a brief video of the anime
    - `aired`: Air date
    - `status`: If the show is aired
    - `demographics.name`: The type of anime
- **API Endpoint #5: `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${language}`**
  - **Description**: Allow the user to translate given text.
- **API Endpoint #6: `https://official-joke-api.appspot.com/random_joke`**
  - **Description**: Allow the user to generate a random joke.

## 👩‍💻 **MVP User Stories & Frontend Routes**

The application will feature the following frontend routes and core features:

- On the `/Anime` page, users can view a grid of all top anime, characters, upcoming anime, and search for anime with detailed information in a modal.
- On the `/JokeNTranslate` page, users can choose to view the random joke generator or the translator.

## 🤔 **Stretch User Stories**

If time permits, the following stretch features will be implemented in order of priority:

- **Save Favorite Anime**: Users will be able to save and view their favorite games using local storage.
- **Filter Anime**: Users will be able to filter games by genre, platform, or rating.
- **Create a Profile**: Users will be able to create a profile so they can save their favorite anime ans come back to it.

## 📆 **Timeline for Reaching MVP in 1 Week**

To ensure that we complete all core features in 1 week, we have outlined the following timeline:

### **Day 1**

- [ ] Set up the React project and install necessary dependencies (React Router, Axios).
- [ ] Create the basic structure for the homepage and search page.
- [ ] Set up basic API calls to fetch anime data from the Jikan API.

### **Day 2**

- [ ] Implement basic functionality for displaying anime on the homepage (`/Anime`).
- [ ] Display anime details on the `/Anime` page.
- [ ] Add basic styling for the homepage and game details page.

### **Day 3** (MVP due by the end of the day)

- [ ] Implement the search functionality on the `/search` component.
- [ ] Ensure the `/search` component is functional and allows users to search anime.
- [ ] Perform basic testing on the homepage and search page.

### **Day 4**

- [ ] Refine UI elements and improve the design.
- [ ] Ensure that all pages are responsive and work across all devices (mobile, tablet, desktop).

### **Day 5**

- [ ] Add error handling for API calls (e.g., display a message when there are no results).
- [ ] Implement sorting or filtering options (if time permits).
- [ ] Continue refining the UI and adding animations or transitions.

### **Day 6**

- [ ] Test all pages thoroughly to ensure there are no bugs.
- [ ] Finalize the save functionality for favorite games (using local storage or an external database).

### **Day 7**

- [ ] Conduct final reviews and testing.
- [ ] Ensure all features are live and functional.
- [ ] Deploy the application and perform last-minute optimizations.

---

## **Wireframes of Each Page in the Application**

Below, you can find wireframes for our project. These wireframes outline the structure and key components of each page in the application. Specific text values or images are not included to maintain focus on layout and functionality.

### **Homepage (`/games`) Wireframe**:

```
--------------------------------------------------------
| PlayHub Logo | Search Bar                         |
--------------------------------------------------------
| Game 1 Image   | Game 2 Image   | Game 3 Image      |
| Title: Game 1  | Title: Game 2  | Title: Game 3     |
| Genre: Action  | Genre: RPG     | Genre: Puzzle     |
--------------------------------------------------------
| Footer: About | Contact | Social Media Links       |
--------------------------------------------------------
```

### **Game Details Page (`/game/:gameId`) Wireframe**:

```
--------------------------------------------------------
| Back to Homepage | Game Title                      |
--------------------------------------------------------
| Game Image                                      |
| Description: A brief description of the game.     |
| Genre: Action, Platform: PC                      |
| Rating: 4.5/5                                    |
| Save to Favorites Button                         |
--------------------------------------------------------
| Footer: About | Contact | Social Media Links       |
--------------------------------------------------------
```

### **Search Page (`/search`) Wireframe**:

```
--------------------------------------------------------
| Search Bar                                          |
--------------------------------------------------------
| Search Results: Game 1 | Game 2 | Game 3            |
| Title: Game 1  | Title: Game 2  | Title: Game 3     |
| Genre: Action  | Genre: RPG     | Genre: Puzzle     |
--------------------------------------------------------
| Footer: About | Contact | Social Media Links       |
--------------------------------------------------------
```

### **Profile Page (`/profile`) Wireframe**:

```
--------------------------------------------------------
| User Info | Save Favorite Games                   |
--------------------------------------------------------
| List of Favorite Games: Game 1, Game 2, Game 3     |
--------------------------------------------------------
| Footer: About | Contact | Social Media Links       |
--------------------------------------------------------
```

---

## **Conclusion**

**BrainRot Universe** is designed to be the ultimate platform for all anime enthusiasts, offering access to a wide variety of anime, character information, and fun interactive features. The platform will make it easy for users to explore new anime, find information on their favorite anime, and enjoy fun utilities like random joke generation and quirky translations. By the end of our 1-week sprint, we will have an MVP ready for launch, and we will also implement any stretch features if time permits.

---
