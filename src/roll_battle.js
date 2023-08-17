function roleDie(sides) {
  return Math.ceil(sides * Math.random());
}

const BALANCE_CHALLENGE = 10;
const SIT_CHALLENGE = 10;
const CHALLENGE_DIE = 20;

export function rollBalance(stats, targeting) {
  const balancePenalty = Math.floor(Math.abs(targeting.xOffset));

  const balanceBonus = stats.balanceBonus;

  const balanceRoll = roleDie(CHALLENGE_DIE);

  const balanceFailed =
    balanceRoll > BALANCE_CHALLENGE + (balanceBonus - balancePenalty);

  return { balancePenalty, balanceBonus, balanceRoll, balanceFailed };
}

export function sitChallenge(stats, targeting) {
  const sitPenalty = Math.floor(targeting.yOffset);
  const sitBonus = stats.sitBonus;
  const sitRoll = roleDie(CHALLENGE_DIE);
  const sitFailed = sitRoll > SIT_CHALLENGE + (sitBonus - sitPenalty);
  return { sitPenalty, sitBonus, sitRoll, sitFailed };
}
