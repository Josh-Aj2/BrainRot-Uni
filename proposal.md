# **BrainRot Universe**

**Created by:** Ajene and Joshua

## 🚀 **Mission Statement**

**BrainRot Universe** is a user-friendly platform designed for anime enthusiasts to easily access and explore a wide variety of anime. Users can browse through a massive collection of anime, see upcoming seasons, explore character information, search for their favorite anime, and enjoy fun interactive features like random joke generation and quirky language translations. Our goal is to provide a seamless and enjoyable entertainment experience for anime fans.

## **API & React Router**

This application will use multiple APIs to provide comprehensive anime data and interactive features.

### **Primary APIs:**

- **Jikan API**: [`https://docs.api.jikan.moe/`](https://docs.api.jikan.moe/) - MyAnimeList unofficial API
- **MyMemory Translation API**: [`https://mymemory.translated.net/`](https://mymemory.translated.net/) - Free translation service
- **Official Joke API**: [`https://official-joke-api.appspot.com/`](https://official-joke-api.appspot.com/) - Random joke generator

### **API Endpoints:**

#### **Jikan API Endpoints:**

1. **Top Anime**: `https://api.jikan.moe/v4/top/anime?page=${page}`

   - **Description**: Fetch detailed information about top-rated anime
   - **Data Values**:
     - `mal_id`: Anime ID
     - `images.jpg.image_url`: Anime cover image
     - `title_english`: Anime title in English
     - `genres[].name`: Anime genres
     - `synopsis`: Brief description of the anime
     - `trailer.url`: Link to anime trailer
     - `aired.from`: Air date
     - `status`: Current airing status
     - `demographics[].name`: Target demographic

2. **Top Characters**: `https://api.jikan.moe/v4/top/characters?page=${page}`

   - **Description**: Fetch detailed information about top characters
   - **Data Values**:
     - `mal_id`: Character ID
     - `name`: Character name
     - `images.jpg.image_url`: Character image
     - `about`: Detailed character description
     - `nicknames`: Array of character nicknames

3. **Upcoming Seasons**: `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`

   - **Description**: Fetch information about upcoming anime seasons
   - **Data Values**:
     - `mal_id`: Anime ID
     - `images.jpg.image_url`: Anime cover image
     - `title_english`: Anime title in English
     - `genres[].name`: Anime genres
     - `synopsis`: Brief description
     - `aired.from`: Expected air date

4. **Search Anime**: `https://api.jikan.moe/v4/anime?q=${searchQuery}&page=${page}`
   - **Description**: Search for anime by title
   - **Data Values**: Same structure as top anime endpoint

#### **Additional API Endpoints:**

5. **Translation Service**: `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${language}`

   - **Description**: Translate text between different languages
   - **Supported Languages**: Multiple language pairs available

6. **Random Joke Generator**: `https://official-joke-api.appspot.com/random_joke`
   - **Description**: Generate random jokes for entertainment
   - **Data Values**:
     - `setup`: Joke setup
     - `punchline`: Joke punchline

## 👩‍💻 **MVP User Stories & Frontend Routes**

The application will feature the following frontend routes and core features:

- **`/` (Home)**: Landing page with navigation and overview
- **`/anime`**: Browse top anime, characters, and upcoming seasons with search functionality
- **`/joke-translate`**: Access random joke generator and translation tool
- **`/anime/:id`**: Detailed view of specific anime with full information

### **Core User Stories:**

- Users can browse a grid of top anime with detailed information
- Users can explore character profiles and descriptions
- Users can view upcoming anime seasons and releases
- Users can search for specific anime titles
- Users can translate text between different languages
- Users can generate random jokes for entertainment

## 🤔 **Stretch User Stories**

If time permits, the following stretch features will be implemented in order of priority:

- **Save Favorite Anime**: Users will be able to save and view their favorite anime using local storage
- **Filter Anime**: Users will be able to filter anime by genre, demographic, or rating
- **User Profiles**: Users will be able to create profiles to save their favorite anime and preferences
- **Dark Mode Toggle**: Implement theme switching using React Context

## 📆 **Timeline for Reaching MVP in 1 Week**

To ensure that we complete all core features in 1 week, we have outlined the following timeline:

### **Day 1**

- [ ] Set up the React project with Vite and install necessary dependencies (React Router, Axios)
- [ ] Create the basic project structure and routing setup
- [ ] Set up basic API calls to fetch anime data from the Jikan API

### **Day 2**

- [ ] Implement the main anime browsing page (`/anime`)
- [ ] Create components for displaying anime cards and character information
- [ ] Add basic styling and responsive design

### **Day 3** (MVP due by the end of the day)

- [ ] Implement the search functionality for anime
- [ ] Create the joke generator and translation tool page (`/joke-translate`)
- [ ] Ensure all core features are functional

### **Day 4**

- [ ] Implement React Context for global state management
- [ ] Add detailed anime view page (`/anime/:id`)
- [ ] Refine UI elements and improve the design

### **Day 5**

- [ ] Add error handling for API calls
- [ ] Implement responsive design for mobile and desktop
- [ ] Add loading states and user feedback

### **Day 6**

- [ ] Test all pages thoroughly to ensure there are no bugs
- [ ] Implement accessibility features and semantic HTML
- [ ] Add hover effects and interactive elements

### **Day 7**

- [ ] Conduct final reviews and testing
- [ ] Ensure all features are live and functional
- [ ] Deploy the application and perform last-minute optimizations

---

## **Wireframes of Each Page in the Application**

Below, you can find wireframes for our project. These wireframes outline the structure and key components of each page in the application.

### **Homepage (`/`) Wireframe**:

```
--------------------------------------------------------
| BrainRot-Uni Logo | Nav: Anime | Joke&Translate    |
--------------------------------------------------------
| Welcome to BrainRot Universe                        |
| Your ultimate anime discovery platform              |
--------------------------------------------------------
| Quick Access: Top Anime | Characters | Upcoming     |
--------------------------------------------------------
| Footer: About | Contact | Social Media Links       |
--------------------------------------------------------
```

### **Anime Page (`/anime`) Wireframe**:

```
--------------------------------------------------------
| Search Bar | Filter Options                         |
--------------------------------------------------------
| Top Anime Section                                   |
| [Anime Card] [Anime Card] [Anime Card]             |
| Title | Genre | Rating | View Details              |
--------------------------------------------------------
| Top Characters Section                              |
| [Char Card] [Char Card] [Char Card]                |
| Name | Description | View Profile                   |
--------------------------------------------------------
| Upcoming Seasons Section                            |
| [Season Card] [Season Card] [Season Card]          |
| Title | Expected Date | Synopsis                    |
--------------------------------------------------------
```

### **Anime Details Page (`/anime/:id`) Wireframe**:

```
--------------------------------------------------------
| Back to Anime | Anime Title                         |
--------------------------------------------------------
| [Large Anime Image] | Title | Genre | Status        |
| Synopsis: Detailed description of the anime...      |
| Aired: Date | Rating: 4.5/5                        |
| Trailer: [Watch Trailer Button]                     |
| Save to Favorites Button                            |
--------------------------------------------------------
| Related Information                                 |
| Characters | Episodes | Reviews                     |
--------------------------------------------------------
```

### **Joke & Translate Page (`/joke-translate`) Wireframe**:

```
--------------------------------------------------------
| Joke Generator | Translation Tool                   |
--------------------------------------------------------
| Random Joke Section:                                |
| [Generate Joke Button]                              |
| Setup: Joke setup text...                           |
| Punchline: Joke punchline text...                   |
--------------------------------------------------------
| Translation Section:                                |
| Input: [Text to translate]                          |
| Language: [Select Language Dropdown]                |
| [Translate Button]                                  |
| Result: Translated text appears here                |
--------------------------------------------------------
```

---

## **Conclusion**

**BrainRot Universe** is designed to be the ultimate platform for all anime enthusiasts, offering access to a wide variety of anime, character information, and fun interactive features. The platform will make it easy for users to explore new anime, find information on their favorite anime, and enjoy fun utilities like random joke generation and quirky translations.

By the end of our 1-week sprint, we will have an MVP ready for launch with all core features functional, and we will also implement any stretch features if time permits. The application will demonstrate our mastery of React development, API integration, and modern web development practices.

---
