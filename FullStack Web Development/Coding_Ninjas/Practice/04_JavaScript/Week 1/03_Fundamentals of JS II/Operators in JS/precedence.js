// let m1 = 50;
// let m2 = 60;
// let m3 = 70;

// let average = (m1 + m2 + m3) / 3;
// console.log(average);

// let firstMonthBuy = 1000;
// let secondMonthBuy = 800;
// let thirdMonthBuy = 999;

// isEligible = true;
// isEligible =
//   (firstMonthBuy > 999 && secondMonthBuy > 999) ||
//   (firstMonthBuy > 999 && thirdMonthBuy > 999) ||
//   (secondMonthBuy > 999 && thirdMonthBuy > 999);

// console.log(isEligible);
// let mathScore = 77;
// let englishScore = 84;
// let scienceScore = 93;

function isEligible(mathScore, englishScore, scienceScore) {
  // Check if the student is eligible for a scholarship (at least two subject scores above 80).
  let eligibleForScholarship;

  eligibleForScholarship =
    (mathScore > 80 && englishScore > 80) ||
    (scienceScore > 80 && mathScore > 80) ||
    (englishScore > 80 && scienceScore > 80);

  // Check if the student qualifies for the science fair (total score at least 250).
  let qualifiesForScienceFair;
  qualifiesForScienceFair = mathScore + englishScore + scienceScore >= 250;

  // Determine eligibility for the award (meets either scholarship or science fair criteria).
  let eligibleForAward;
  eligibleForAward = eligibleForScholarship || qualifiesForScienceFair;
  // Return the final eligibility status for the award.
  return eligibleForAward;
}
