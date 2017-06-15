exports.power = {
  name: "Shield Swipe",
  source: "Knight",
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Shield Stun"],
  cost: {
    pips: 0,
    resource: 18
  },
  tooltip: "Attack in front of you for 91 - 123 + 107% Crushing Weapon Damage.",
  icon: ""
};