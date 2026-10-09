#!/usr/bin/env node

/**
 * Peace UI CLI Installer
 * Installs Peace Sibanda's signature design engineering skill into any project.
 * Usage: npx peace-ui [targetDir]
 */

const fs = require('fs');
const path = require('path');

const CWD = process.cwd();
const PACKAGE_ROOT = path.resolve(__dirname, '..');

const FILES_TO_COPY = ['SKILL.md', 'RECIPES.md', 'CHECKLIST.md'];

console.log('\x1b[36m%s\x1b[0m', '═══════════════════════════════════════════════════════════════');
console.log('\x1b[1m\x1b[32m%s\x1b[0m', '  Peace UI — Institutional Design Engineering System');
console.log('\x1b[90m%s\x1b[0m', '  Crafted with excellence by Peace Sibanda');
console.log('\x1b[36m%s\x1b[0m', '═══════════════════════════════════════════════════════════════\n');

// Detect destination paths
const targetArg = process.argv[2];
let targetSkillDir = path.join(CWD, '.agents', 'skills', 'peace-ui');

if (targetArg && targetArg !== '--help' && targetArg !== '-h') {
  targetSkillDir = path.resolve(CWD, targetArg);
}

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`Usage:
  npx peace-ui                 Install into .agents/skills/peace-ui/
  npx peace-ui <custom-path>   Install into a custom folder
  npx peace-ui --all           Install for Antigravity, Claude Code, and Cursor

Options:
  --all    Installs into .agents/skills, .claude/skills, and .cursor/skills
  --help   Show help information
`);
  process.exit(0);
}

const installLocations = [];

if (process.argv.includes('--all')) {
  installLocations.push(
    path.join(CWD, '.agents', 'skills', 'peace-ui'),
    path.join(CWD, '.claude', 'skills', 'peace-ui'),
    path.join(CWD, '.cursor', 'skills', 'peace-ui')
  );
} else {
  installLocations.push(targetSkillDir);
}

installLocations.forEach((destination) => {
  try {
    fs.mkdirSync(destination, { recursive: true });

    FILES_TO_COPY.forEach((file) => {
      const src = path.join(PACKAGE_ROOT, file);
      const dest = path.join(destination, file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
    });

    const relDest = path.relative(CWD, destination) || destination;
    console.log(`\x1b[32m✓\x1b[0m Installed Peace UI skill to: \x1b[1m${relDest}/\x1b[0m`);
  } catch (err) {
    console.error(`\x1b[31m✗\x1b[0m Failed to install to ${destination}:`, err.message);
  }
});

console.log('\n\x1b[33m%s\x1b[0m', '★ How to use in your project:');
console.log('  1. In Antigravity / Claude Code / Cursor:');
console.log('     Prompt: "Revamp this screen using peace-ui"');
console.log('     or:     "Audit this project against peace-ui checklist"\n');
console.log('\x1b[90m%s\x1b[0m', '  Repository: https://github.com/Peacsib/peace-ui');
console.log('\x1b[90m%s\x1b[0m\n', '  LinkedIn:   https://www.linkedin.com/in/peacesibanda/');
