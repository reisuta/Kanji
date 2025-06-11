import { Question } from '@/types/question';

export const calculateScore = (
  userAnswers: string[],
  questions: Question[]
): number => {
  let correct = 0;
  
  for (let i = 0; i < Math.min(userAnswers.length, questions.length); i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      correct++;
    }
  }
  
  return Math.round((correct / questions.length) * 100);
};

export const getScoreGrade = (score: number): string => {
  if (score >= 90) return 'S';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  return 'D';
};

export const getScoreMessage = (score: number): string => {
  if (score >= 90) return '汝は深淵の奥義を極めし者...地獄の王座に相応しい魂よ';
  if (score >= 80) return '闇の知識に染まりし者よ、邪悪なる力が汝に宿る';
  if (score >= 70) return '呪いの文字に魅入られし者よ、更なる深淵が汝を待つ';
  if (score >= 60) return '地獄の門は開かれた...だが汝の魂は未だ浄化が必要である';
  return '絶望の淵に堕ちよ...汝の無知なる魂に恐怖の教えを';
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};