// Tailwind class mappings for the result screen's letter-grade badge.
// Kept here rather than in ResultCard.tsx so the lookup tables can be unit
// tested without mounting a component.
let getGradeColor = (grade: string): string =>
  switch grade {
  | "S" => "text-amber-400"
  | "A" => "text-green-400"
  | "B" => "text-blue-400"
  | "C" => "text-orange-400"
  | "D" => "text-red-400"
  | _ => "text-gray-400"
  }

let getGradeBg = (grade: string): string =>
  switch grade {
  | "S" => "bg-gradient-to-br from-amber-900/60 to-yellow-900/60 border-amber-500/50"
  | "A" => "bg-gradient-to-br from-green-900/60 to-emerald-900/60 border-green-500/50"
  | "B" => "bg-gradient-to-br from-blue-900/60 to-cyan-900/60 border-blue-500/50"
  | "C" => "bg-gradient-to-br from-orange-900/60 to-amber-900/60 border-orange-500/50"
  | "D" => "bg-gradient-to-br from-red-900/60 to-pink-900/60 border-red-500/50"
  | _ => "bg-gradient-to-br from-gray-900/60 to-slate-900/60 border-gray-500/50"
  }

let getGradeTitle = (grade: string): string =>
  switch grade {
  | "S" => `至高の境地`
  | "A" => `達人の域`
  | "B" => `熟練者`
  | "C" => `学習者`
  | "D" => `修行中`
  | _ => `挑戦者`
  }
