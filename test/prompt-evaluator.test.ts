import test from 'node:test';
import assert from 'node:assert/strict';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const {
  analyzePrompt,
  generateOptimizedPrompt,
  calculateQuizScore,
  getMasteryLevel,
  MODULES_DATA,
  COMPARISONS_DATA,
  QUIZ_QUESTIONS
} = require('../script.js');

test('curriculum datasets are properly populated', () => {
  assert.equal(Array.isArray(MODULES_DATA), true);
  assert.equal(MODULES_DATA.length >= 6, true);

  assert.equal(Array.isArray(COMPARISONS_DATA), true);
  assert.equal(COMPARISONS_DATA.length >= 5, true);

  assert.equal(Array.isArray(QUIZ_QUESTIONS), true);
  assert.equal(QUIZ_QUESTIONS.length >= 10, true);
});

test('analyzePrompt handles empty input gracefully', () => {
  const result = analyzePrompt('');
  assert.equal(result.score, 0);
  assert.equal(result.grade, 'No Input');
  assert.equal(result.criteria.role, false);
});

test('analyzePrompt identifies persona and structure', () => {
  const weakPrompt = 'make a python script';
  const weakAnalysis = analyzePrompt(weakPrompt);
  assert.equal(weakAnalysis.score < 60, true);
  assert.equal(weakAnalysis.criteria.role, false);

  const strongPrompt = `Act as a Senior Python Backend Architect.
Given a high-throughput websocket server, refactor the connection pool.
Constraints: Do not use third-party packages, under 200 words.
Format: Return as Markdown with bulleted reasoning.`;

  const strongAnalysis = analyzePrompt(strongPrompt);
  assert.equal(strongAnalysis.score >= 80, true);
  assert.equal(strongAnalysis.criteria.role, true);
  assert.equal(strongAnalysis.criteria.constraints, true);
  assert.equal(strongAnalysis.criteria.format, true);
  assert.equal(strongAnalysis.grade.includes('Architect'), true);
});

test('generateOptimizedPrompt wraps objective with standard engineering pillars', () => {
  const draft = 'write an essay on machine learning';
  const optimized = generateOptimizedPrompt(draft);
  assert.equal(optimized.includes('Senior Domain Specialist'), true);
  assert.equal(optimized.includes('Requirements & Guidelines'), true);
  assert.equal(optimized.includes('Constraints:'), true);
});

test('calculateQuizScore accurately computes percentages and ranks', () => {
  const perfect = calculateQuizScore(10, 10);
  assert.equal(perfect.percent, 100);
  assert.equal(perfect.rank, 'Master Prompt Architect');

  const passing = calculateQuizScore(7, 10);
  assert.equal(passing.percent, 70);
  assert.equal(passing.rank, 'Intermediate Prompt Engineer');

  const failing = calculateQuizScore(3, 10);
  assert.equal(failing.percent, 30);
  assert.equal(failing.rank, 'Novice Prompt Engineer');
});

test('getMasteryLevel scales with completed modules and score', () => {
  const novice = getMasteryLevel(0, 0);
  assert.equal(novice.title, 'Novice Engineer');

  const lead = getMasteryLevel(6, 100);
  assert.equal(lead.title, 'Lead Architect');
});

test('quiz questions have valid options and correct index bounds', () => {
  QUIZ_QUESTIONS.forEach((q: any, i: number) => {
    assert.equal(Array.isArray(q.options), true, `Question ${i} options must be an array`);
    assert.equal(q.options.length >= 2, true, `Question ${i} must have at least 2 options`);
    assert.equal(q.correctIndex >= 0 && q.correctIndex < q.options.length, true, `Question ${i} correctIndex out of bounds`);
    assert.equal(typeof q.explanation === 'string' && q.explanation.length > 0, true, `Question ${i} must have explanation`);
  });
});
