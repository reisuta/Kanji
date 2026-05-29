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
import {
  build,
  getById,
  getByType,
  getByDifficultyExact,
  getByDifficultyRange,
  getAll,
  totalCount,
  availableTypes,
  availableDifficulties,
  QuestionSelectorT,
} from './QuestionSelector.res.mjs';

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
  private inner: QuestionSelectorT;

  constructor(questions: Question[] = questionBank) {
    this.inner = build(questions);
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
        ? filterByTypes(getAll(this.inner), types)
        : getAll(this.inner);

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
    return getById(this.inner, id);
  }

  getQuestionsByType(type: Question['type']): Question[] {
    return getByType(this.inner, type);
  }

  getQuestionsByDifficulty(
    difficulty: number | { min: number; max: number }
  ): Question[] {
    if (typeof difficulty === 'number') {
      return getByDifficultyExact(this.inner, difficulty);
    }
    return getByDifficultyRange(this.inner, difficulty.min, difficulty.max);
  }

  getAllQuestions(): Question[] {
    return getAll(this.inner);
  }

  getStats(): QuestionStats {
    return computeStats(getAll(this.inner)) as QuestionStats;
  }

  getTotalCount(): number {
    return totalCount(this.inner);
  }

  getAvailableTypes(): Question['type'][] {
    return availableTypes(this.inner);
  }

  getAvailableDifficulties(): number[] {
    return availableDifficulties(this.inner);
  }
}

export const defaultSelector = new QuestionSelector();
