const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const { authenticate } = require('../middleware/auth');

// Recipe list - show all recipes (user-specific view)
router.get('/list', authenticate, async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('author', 'username').sort({ createdAt: -1 });
    res.render('recipelist', { recipes, user: req.user });
  } catch (error) {
    res.status(500).send('Error fetching recipes: ' + error.message);
  }
});

// My recipes - show logged-in user's recipes
router.get('/myrecipes', authenticate, async (req, res) => {
  try {
    const recipes = await Recipe.find({ author: req.user._id }).sort({ createdAt: -1 });
    res.render('myrecipes', { recipes, user: req.user });
  } catch (error) {
    res.status(500).send('Error fetching your recipes: ' + error.message);
  }
});

// Recipe form - create new recipe
router.get('/form', authenticate, (req, res) => {
  res.render('recipesform', { recipe: null, user: req.user, error: null });
});

// Create recipe
router.post('/form', authenticate, async (req, res) => {
  try {
    const { title, description, ingredients, instructions, cookingTime, servings, difficulty, category, imageUrl } = req.body;

    const ingredientsArray = typeof ingredients === 'string' 
      ? ingredients.split(',').map(ing => ing.trim()).filter(ing => ing)
      : ingredients;

    const recipe = new Recipe({
      title,
      description,
      ingredients: ingredientsArray,
      instructions,
      cookingTime: parseInt(cookingTime),
      servings: parseInt(servings),
      difficulty: difficulty || 'Medium',
      category: category || 'Main Course',
      imageUrl: imageUrl || '',
      author: req.user._id
    });

    await recipe.save();
    res.redirect('/recipes/myrecipes');
  } catch (error) {
    res.render('recipesform', { recipe: null, user: req.user, error: error.message });
  }
});

// View single recipe
router.get('/:id', authenticate, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('author', 'username');
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.render('recipesitem', { recipe, user: req.user });
  } catch (error) {
    res.status(500).send('Error fetching recipe: ' + error.message);
  }
});

// Edit recipe form
router.get('/edit/:id', authenticate, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }

    // Check if user owns the recipe
    if (recipe.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).send('You can only edit your own recipes');
    }

    res.render('recipesform', { recipe, user: req.user, error: null });
  } catch (error) {
    res.status(500).send('Error fetching recipe: ' + error.message);
  }
});

// Update recipe
router.post('/edit/:id', authenticate, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }

    // Check if user owns the recipe
    if (recipe.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).send('You can only edit your own recipes');
    }

    const { title, description, ingredients, instructions, cookingTime, servings, difficulty, category, imageUrl } = req.body;

    const ingredientsArray = typeof ingredients === 'string' 
      ? ingredients.split(',').map(ing => ing.trim()).filter(ing => ing)
      : ingredients;

    recipe.title = title;
    recipe.description = description;
    recipe.ingredients = ingredientsArray;
    recipe.instructions = instructions;
    recipe.cookingTime = parseInt(cookingTime);
    recipe.servings = parseInt(servings);
    recipe.difficulty = difficulty;
    recipe.category = category;
    recipe.imageUrl = imageUrl || '';
    recipe.updatedAt = Date.now();

    await recipe.save();
    res.redirect('/recipes/myrecipes');
  } catch (error) {
    res.render('recipesform', { recipe: req.body, user: req.user, error: error.message });
  }
});

// Delete recipe
router.get('/delete/:id', authenticate, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }

    // Check if user owns the recipe
    if (recipe.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).send('You can only delete your own recipes');
    }

    await Recipe.findByIdAndDelete(req.params.id);
    res.redirect('/recipes/myrecipes');
  } catch (error) {
    res.status(500).send('Error deleting recipe: ' + error.message);
  }
});

module.exports = router;

