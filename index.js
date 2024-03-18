// index.js

const fs = require('fs');

class RecipeOrganizer {
  constructor() {
    this.recipes = [];
  }

  loadRecipes() {
    try {
      const data = fs.readFileSync('recipes.json', 'utf8');
      this.recipes = JSON.parse(data);
      console.log('Recipes loaded successfully.');
    } catch (err) {
      console.error('Error loading recipes:', err);
    }
  }

  saveRecipes() {
    try {
      const data = JSON.stringify(this.recipes, null, 2);
      fs.writeFileSync('recipes.json', data);
      console.log('Recipes saved successfully.');
    } catch (err) {
      console.error('Error saving recipes:', err);
    }
  }

  addRecipe(recipe) {
    this.recipes.push(recipe);
    this.saveRecipes();
  }

  displayRecipes() {
    console.log('Recipes:');
    this.recipes.forEach((recipe, index) => {
      console.log(`${index + 1}. ${recipe.name}`);
      console.log(`   Ingredients: ${recipe.ingredients}`);
      console.log(`   Instructions: ${recipe.instructions}`);
      console.log('-------------------------------------');
    });
  }
}

const recipeOrganizer = new RecipeOrganizer();
recipeOrganizer.loadRecipes();
recipeOrganizer.displayRecipes();

// Example: Add a new recipe
const newRecipe = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'bacon', 'egg', 'parmesan cheese', 'black pepper'],
  instructions: '...'
};
recipeOrganizer.addRecipe(newRecipe);
