const path = require('path');
const fs = require('fs');

const skillPath = path.join(__dirname, 'SKILL.md');
const recipesPath = path.join(__dirname, 'RECIPES.md');
const checklistPath = path.join(__dirname, 'CHECKLIST.md');

module.exports = {
  name: 'peace-ui',
  author: 'Peace Sibanda',
  paths: {
    skill: skillPath,
    recipes: recipesPath,
    checklist: checklistPath,
  },
  getSkillContent: () => fs.readFileSync(skillPath, 'utf8'),
  getRecipesContent: () => fs.readFileSync(recipesPath, 'utf8'),
  getChecklistContent: () => fs.readFileSync(checklistPath, 'utf8'),
};
