---

# **PlayHub: A Gateway to All Your Favorite Games**

**Created by:** Ajene and Joshua

---

## 🚀 **Mission Statement**

**PlayHub** is a user-friendly platform designed for game enthusiasts to easily access, explore, and enjoy a wide variety of games. Users can browse through a massive collection of games, create profiles, save their favorite games, and enjoy fun interactive features like random joke generation and quirky language translations. Our goal is to provide a seamless and enjoyable gaming and entertainment experience.

---

## **API & React Router**

This application will use multiple APIs to provide comprehensive game data and interactive features.

- **Link to API Documentation:** [API Documentation URL]

### **API Endpoints:**

- **API Endpoint #1: `https://api.freetogame.com/games`**
  - **Description**: Fetch a list of available games (across various genres and platforms).
  - **Data Values**:
    - `id`: Game ID
    - `title`: Game title
    - `genre`: Genre of the game
    - `description`: Brief description of the game
    - `platform`: Supported platforms (e.g., PC, console)
    - `image`: Game cover image
- **API Endpoint #2: `https://api.freetogame.com/games/{id}`**
  - **Description**: Fetch detailed information about a specific game.
  - **Data Values**:
    - `id`: Game ID
    - `title`: Game title
    - `genre`: Genre
    - `description`: Detailed description
    - `platform`: Platform
    - `rating`: User rating
- **API Endpoint #3: `https://api.freetogame.com/games/search?q={query}`**
  - **Description**: Search for games based on a query term.
  - **Data Values**:
    - `id`: Game ID
    - `title`: Game title
    - `genre`: Genre
    - `description`: Brief description

**API Key:**

- (Insert the API key for access)

---

## 👩‍💻 **MVP User Stories & Frontend Routes**

The application will feature the following frontend routes and core features:

- **On the `/games` page, users can** view a grid of all available games.
- **On the `/game/:gameId` page, users can** view detailed information about a specific game (including description, platform, genre, etc.).
- **On the `/search` page, users can** search for games by title and view search results.
- **On the `/profile` page, users can** create and manage their user profile, including saving favorite games.

---

## 🤔 **Stretch User Stories**

If time permits, the following stretch features will be implemented in order of priority:

- **Save Favorite Games**: Users will be able to save and view their favorite games using local storage.
- **Filter Games**: Users will be able to filter games by genre, platform, or rating.
- **Detailed Game Reviews**: Users will be able to view detailed game reviews and ratings from other users.

---

## 📆 **Timeline for Reaching MVP in 1 Week**

To ensure that we complete all core features in 1 week, we have outlined the following timeline:

### **Day 1**

- [ ] Set up the React project and install necessary dependencies (React Router, Axios).
- [ ] Create the basic structure for the homepage and search page.
- [ ] Set up basic API calls to fetch game data from the Free to Game API.

### **Day 2**

- [ ] Implement basic functionality for displaying games on the homepage (`/games`).
- [ ] Display game details on the `/game/:gameId` page.
- [ ] Add basic styling for the homepage and game details page.

### **Day 3** (MVP due by the end of the day)

- [ ] Implement the search functionality on the `/search` page.
- [ ] Ensure the `/profile` page is functional and allows users to save favorite games.
- [ ] Perform basic testing on the homepage, search page, and profile page.

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

**PlayHub** is designed to be the ultimate platform for all gamers, offering access to a wide variety of games, user profiles, and fun interactive features. The platform will make it easy for users to explore new games, keep track of their favorites, and enjoy fun utilities like random joke generation and quirky translations. By the end of our 1-week sprint, we will have an MVP ready for launch, and we will also implement any stretch features if time permits.

---
