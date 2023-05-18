import type { AchievementItemModel } from "$models/achievementItem";

export const calculateCheevoCompletion = (listCheevo: AchievementItemModel[]) => {
  const achieved = listCheevo.filter(cheevo => cheevo.achieved === 1).length
  const percentage = (achieved / listCheevo.length * 100).toFixed()
  return {
    achieved,
    percentage: parseInt(percentage)
  };
}