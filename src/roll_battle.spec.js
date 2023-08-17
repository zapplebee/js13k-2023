//roll_battle.spec.js

import { expect, test, describe } from "vitest";
import { rollBalance } from "./roll_battle";

const BEEFY_GUY_STATS = {
  balanceBonus: -2,
  sitBonus: 8,
};

describe("roll_battle", () => {
  test("should", () => {
    let didBalanceJousts = 0;
    for (let i = 0; i < 100; i++) {
      const result = rollBalance(BEEFY_GUY_STATS, { xOffset: 0, yOffset: 0 });
      console.log(result);
      if (!result.balanceFailed) {
        didBalanceJousts++;
      }
    }
    console.log(didBalanceJousts);
    expect(didBalanceJousts < 20).toBe(false);
  });
});
