import type { AchievementItemModel } from "./achievementItem";

export interface PlayerStat {
  achievements: AchievementItemModel[];
  gameName: string;
  steamId: string;
}