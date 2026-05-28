import { Question } from '@/types/question';
import { questionBank } from '@/data/questionBank';
import {
  shuffleArray,
  filterByDifficultyExact,
  filterByDifficultyRange,
  filterByTypes,
  excludeByIds,
  computeStats,
} from './QuestionFilters.res.mjs';

export interface SelectionOptions {
  count?: number;
  difficulty?: number | { min: number; max: number };
  types?: Question['type'][];
  excludeIds?: string[];
  shuffle?: boolean;
}

export interface QuestionStats {
  totalQuestions: number;
  byType: Record<Question['type'], number>;
  byDifficulty: Record<number, number>;
  difficultyRange: { min: number; max: number };
}

export class QuestionSelector {
  private questions: Question[];
  private questionMap: Map<string, Question> = new Map();
  private typeMap: Map<Question['type'], Question[]> = new Map();
  private difficultyMap: Map<number, Question[]> = new Map();

  constructor(questions: Question[] = questionBank) {
    this.questions = questions;
    this.buildIndexes();
  }

  private buildIndexes(): void {
    this.questionMap = new Map();
    this.typeMap = new Map();
    this.difficultyMap = new Map();

    this.questions.forEach(question => {
      this.questionMap.set(question.id, question);

      if (!this.typeMap.has(question.type)) {
        this.typeMap.set(question.type, []);
      }
      this.typeMap.get(question.type)!.push(question);

      if (!this.difficultyMap.has(question.difficulty)) {
        this.difficultyMap.set(question.difficulty, []);
      }
      this.difficultyMap.get(question.difficulty)!.push(question);
    });
  }

  getRandomQuestions(options: SelectionOptions = {}): Question[] {
    const {
      count = 5,
      difficulty,
      types,
      excludeIds: excludeIdsList = [],
      shuffle = true,
    } = options;

    let candidates: Question[] =
      types && types.length > 0
        ? filterByTypes(this.questions, types)
        : [...this.questions];

    if (difficulty !== undefined) {
      candidates =
        typeof difficulty === 'number'
          ? filterByDifficultyExact(candidates, difficulty)
          : filterByDifficultyRange(candidates, difficulty.min, difficulty.max);
    }

    if (excludeIdsList.length > 0) {
      candidates = excludeByIds(candidates, excludeIdsList);
    }

    if (shuffle) {
      candidates = shuffleArray(candidates);
    }

    return candidates.slice(0, Math.min(count, candidates.length));
  }

  getQuestionById(id: string): Question | undefined {
    return this.questionMap.get(id);
  }

  getQuestionsByType(type: Question['type']): Question[] {
    return [...(this.typeMap.get(type) || [])];
  }

  getQuestionsByDifficulty(
    difficulty: number | { min: number; max: number }
  ): Question[] {
    if (typeof difficulty === 'number') {
      return [...(this.difficultyMap.get(difficulty) || [])];
    }
    const questions: Question[] = [];
    for (let d = difficulty.min; d <= difficulty.max; d++) {
      questions.push(...(this.difficultyMap.get(d) || []));
    }
    return questions;
  }

  getAllQuestions(): Question[] {
    return [...this.questions];
  }

  getStats(): QuestionStats {
    return computeStats(this.questions) as QuestionStats;
  }

  getTotalCount(): number {
    return this.questions.length;
  }

  getAvailableTypes(): Question['type'][] {
    return Array.from(this.typeMap.keys());
  }

  getAvailableDifficulties(): number[] {
    return Array.from(this.difficultyMap.keys()).sort((a, b) => a - b);
  }
}

export const defaultSelector = new QuestionSelector();
