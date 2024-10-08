export const MOCK_SPELL_DETAIL = {
  index: "acid-arrow",
  name: "Acid Arrow",
  desc: [
    "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
  ],
  higher_level: [
    "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
  ],
  range: "90 feet",
  components: ["V", "S", "M"],
  material: "Powdered rhubarb leaf and an adder's stomach.",
  ritual: false,
  duration: "Instantaneous",
  concentration: false,
  casting_time: "1 action",
  level: 2,
  attack_type: "ranged",
  damage: {
    damage_type: {
      index: "acid",
      name: "Acid",
      url: "/api/damage-types/acid",
    },
    damage_at_slot_level: {
      2: "4d4",
      3: "5d4",
      4: "6d4",
      5: "7d4",
      6: "8d4",
      7: "9d4",
      8: "10d4",
      9: "11d4",
    },
  },
  school: {
    index: "evocation",
    name: "Evocation",
    url: "/api/magic-schools/evocation",
  },
  classes: [
    {
      index: "wizard",
      name: "Wizard",
      url: "/api/classes/wizard",
    },
  ],
  subclasses: [
    {
      index: "lore",
      name: "Lore",
      url: "/api/subclasses/lore",
    },
    {
      index: "land",
      name: "Land",
      url: "/api/subclasses/land",
    },
  ],
  url: "/api/spells/acid-arrow",
};

export const MOCK_SPELL = {
  index: "acid-arrow",
  name: "Acid Arrow",
  level: 2,
  url: "/api/spells/acid-arrow",
};

export const MOCK_SPELL_LIST = [
  { index: "aid", name: "Aid", level: 2, url: "/api/spells/aid" },
  { index: "alarm", name: "Alarm", level: 1, url: "/api/spells/alarm" },
  {
    index: "alter-self",
    name: "Alter Self",
    level: 2,
    url: "/api/spells/alter-self",
  },
];

export const MOCK_STAT = {
  label: "This is a label",
  value: "This is the data",
};
