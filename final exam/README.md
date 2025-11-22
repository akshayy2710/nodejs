# RecipeShare - Culinary Recipe Sharing Platform

A beautiful, culinary-themed recipe sharing platform built with Node.js, Express, MongoDB, and EJS.

## Features

- 🔐 User Authentication (Register/Login/Logout)
- 🍳 Recipe Management (Create, Read, Update, Delete)
- 👤 User-specific recipe filtering
- 🎨 Beautiful culinary-themed UI
- 🍪 JWT token authentication with cookies
- 📱 Responsive design

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens) stored in cookies
- **View Engine**: EJS
- **Styling**: Custom CSS with culinary theme

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update `MONGODB_URI` with your MongoDB connection string
   - Set a secure `JWT_SECRET`

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
├── index.js              # Main server file
├── models/
│   ├── User.js          # User model
│   └── Recipe.js        # Recipe model
├── routes/
│   ├── auth.js          # Authentication routes
│   └── recipes.js       # Recipe routes
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── views/
│   ├── navbar.ejs       # Navigation bar
│   ├── login.ejs        # Login page
│   ├── register.ejs     # Registration page
│   ├── recipelist.ejs   # All recipes list
│   ├── myrecipes.ejs    # User's recipes
│   ├── recipesform.ejs  # Recipe form (create/edit)
│   └── recipesitem.ejs  # Single recipe view
└── public/
    └── css/
        └── style.css    # Culinary theme styles
```

## Routes

### Authentication
- `GET /auth/register` - Registration page
- `POST /auth/register` - Register new user
- `GET /auth/login` - Login page
- `POST /auth/login` - User login
- `GET /auth/logout` - User logout

### Recipes
- `GET /recipes/list` - View all recipes (requires authentication)
- `GET /recipes/myrecipes` - View user's recipes (requires authentication)
- `GET /recipes/form` - Recipe creation form (requires authentication)
- `POST /recipes/form` - Create new recipe (requires authentication)
- `GET /recipes/:id` - View single recipe (requires authentication)
- `GET /recipes/edit/:id` - Edit recipe form (requires authentication)
- `POST /recipes/edit/:id` - Update recipe (requires authentication)
- `GET /recipes/delete/:id` - Delete recipe (requires authentication)

## User Model

- `username` - Unique username
- `email` - Unique email address
- `password` - Hashed password (bcrypt)
- `role` - User role (user/admin)

## Recipe Model

- `title` - Recipe title
- `description` - Recipe description
- `ingredients` - Array of ingredients
- `instructions` - Cooking instructions
- `cookingTime` - Cooking time in minutes
- `servings` - Number of servings
- `difficulty` - Difficulty level (Easy/Medium/Hard)
- `category` - Recipe category
- `imageUrl` - Optional image URL
- `author` - Reference to User model

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens stored in httpOnly cookies
- Authentication middleware protects routes
- Users can only edit/delete their own recipes (admins can edit/delete any)

## License

ISC

