import { Question } from '@/types/question';
import { questionBank } from '@/data/questionBank';

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

/**
 * 漢検問題の選択と管理を行うクラス
 * 大量の問題（1000問以上）を効率的に扱うための機能を提供
 */
export class QuestionSelector {
  private questions: Question[];
  private questionMap: Map<string, Question> = new Map();
  private typeMap: Map<Question['type'], Question[]> = new Map();
  private difficultyMap: Map<number, Question[]> = new Map();

  constructor(questions: Question[] = questionBank) {
    this.questions = questions;
    this.buildIndexes();
  }

  /**
   * インデックスを構築してパフォーマンスを向上
   */
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

  /**
   * 条件に基づいてランダムに問題を選択
   */
  getRandomQuestions(options: SelectionOptions = {}): Question[] {
    const {
      count = 5,
      difficulty,
      types,
      excludeIds = [],
      shuffle = true
    } = options;

    let candidates = this.filterQuestions({ difficulty, types, excludeIds });

    if (shuffle) {
      candidates = this.shuffleArray([...candidates]);
    }

    return candidates.slice(0, Math.min(count, candidates.length));
  }

  /**
   * 条件に基づいて問題をフィルタリング
   */
  private filterQuestions(options: Omit<SelectionOptions, 'count' | 'shuffle'>): Question[] {
    const { difficulty, types, excludeIds = [] } = options;
    let filtered: Question[] = [];

    if (types && types.length > 0) {
      filtered = types.flatMap(type => this.typeMap.get(type) || []);
    } else {
      filtered = [...this.questions];
    }

    if (difficulty !== undefined) {
      if (typeof difficulty === 'number') {
        filtered = filtered.filter(q => q.difficulty === difficulty);
      } else {
        filtered = filtered.filter(
          q => q.difficulty >= difficulty.min && q.difficulty <= difficulty.max
        );
      }
    }

    if (excludeIds.length > 0) {
      const excludeSet = new Set(excludeIds);
      filtered = filtered.filter(q => !excludeSet.has(q.id));
    }

    return filtered;
  }

  /**
   * Fisher-Yates シャッフルアルゴリズムを使用した高品質なランダム化
   */
  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * IDで問題を取得（高速）
   */
  getQuestionById(id: string): Question | undefined {
    return this.questionMap.get(id);
  }

  /**
   * タイプ別に問題を取得（インデックス使用）
   */
  getQuestionsByType(type: Question['type']): Question[] {
    return [...(this.typeMap.get(type) || [])];
  }

  /**
   * 難易度別に問題を取得（インデックス使用）
   */
  getQuestionsByDifficulty(difficulty: number | { min: number; max: number }): Question[] {
    if (typeof difficulty === 'number') {
      return [...(this.difficultyMap.get(difficulty) || [])];
    } else {
      const questions: Question[] = [];
      for (let d = difficulty.min; d <= difficulty.max; d++) {
        questions.push(...(this.difficultyMap.get(d) || []));
      }
      return questions;
    }
  }

  /**
   * 全問題を取得
   */
  getAllQuestions(): Question[] {
    return [...this.questions];
  }

  /**
   * 問題の統計情報を取得
   */
  getStats(): QuestionStats {
    const byType: Record<Question['type'], number> = {} as Record<Question['type'], number>;
    const byDifficulty: Record<number, number> = {};
    let minDifficulty = Infinity;
    let maxDifficulty = -Infinity;

    this.questions.forEach(question => {
      byType[question.type] = (byType[question.type] || 0) + 1;
      byDifficulty[question.difficulty] = (byDifficulty[question.difficulty] || 0) + 1;
      minDifficulty = Math.min(minDifficulty, question.difficulty);
      maxDifficulty = Math.max(maxDifficulty, question.difficulty);
    });

    return {
      totalQuestions: this.questions.length,
      byType,
      byDifficulty,
      difficultyRange: { min: minDifficulty, max: maxDifficulty }
    };
  }

  /**
   * 問題数を取得
   */
  getTotalCount(): number {
    return this.questions.length;
  }

  /**
   * 利用可能な問題タイプを取得
   */
  getAvailableTypes(): Question['type'][] {
    return Array.from(this.typeMap.keys());
  }

  /**
   * 利用可能な難易度レベルを取得
   */
  getAvailableDifficulties(): number[] {
    return Array.from(this.difficultyMap.keys()).sort((a, b) => a - b);
  }
}

export const defaultSelector = new QuestionSelector();