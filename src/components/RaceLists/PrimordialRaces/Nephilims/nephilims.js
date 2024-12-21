import React from "react";
import { useNavigate } from "react-router-dom";
import "./nephilims.css"; // Assuming you have the corresponding CSS file.

const Nephilim = () => {
  return (
    <div>
      <header>
        <h1>Nephilim: The Titans of Dusk</h1>
        <nav>
          <ul>
            <li>
              <a href="/race-lists">Race Lists</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="nephilim">
        <h2>Nephilim: The Titans of Dusk</h2>
        <p>
          A primordial race of superior adaptability. Children of Dusk,
          naturally gifted with the vitality of strength. The race of evergrowth
          and the shapers of Destiny.
        </p>

        <h3>Racial Traits: (Passive)</h3>
        <ul>
          <li>
            <strong>Ability Score Increase:</strong> You can increase your
            Charisma, Wisdom, or Intelligence to 30, and your Strength by 3 and
            Constitution by 5 (Maximum 30). When rolling for ability scores, you
            can choose the Primordial Die (6d20).
          </li>
          <li>
            <strong>Dusk Essence:</strong> You are resistant to force damage.
          </li>
          <li>
            <strong>Age:</strong> You are immune to aging.
          </li>
          <li>
            <strong>Alignment:</strong> Nephilims are generally Lawful Evil due
            to their harsh origins but can have any alignment.
          </li>
          <li>
            <strong>Size:</strong> Nephilims stand between 7-10 feet tall.
          </li>
          <li>
            <strong>Powerful Build:</strong> You count as one size larger when
            determining your carrying capacity and weight you can push, drag, or
            lift.
          </li>
          <li>
            <strong>Hulking Fortitude:</strong> You gain 1 additional hit point
            at level-up and gain 1 more hit point every time you level up.
          </li>
          <li>
            <strong>Menacing:</strong> You are proficient in the Intimidation
            skill.
          </li>
          <li>
            <strong>Toughness:</strong> While unarmored, your Armor Class equals
            12 + your Constitution modifier. You can still use a shield and
            receive this benefit.
          </li>
          <li>
            <strong>Speed:</strong> Your base walking speed is 40 feet.
          </li>
          <li>
            <strong>Languages:</strong> You can speak Nephilic and Primordial
            Elven.
          </li>
        </ul>

        <h3>Racial Features: (Passive)</h3>
        <ul>
          <li>
            <strong>Primordial Essence:</strong> You gain primordial essence
            equal to your proficiency bonus + your spellcasting modifier. You
            can use this essence for racial abilities.
          </li>
          <li>
            <strong>Superior Darkvision:</strong> You can see in dim light
            within 120 feet as bright light and in darkness as dim light. You
            can't discern colors in darkness, only shades of gray.
          </li>
          <li>
            <strong>Nephilic Strength:</strong> Your unarmed strikes deal
            bludgeoning damage equal to 1d4 + your Strength modifier.
          </li>
          <li>
            <strong>Brutish Strength:</strong> When you roll a 1 on a
            Strength-based attack roll, ability check, or saving throw, you can
            reroll and must use the new roll.
          </li>
          <li>
            <strong>Juggernaut:</strong> You ignore difficult terrain.
          </li>
          <li>
            <strong>Titan Strength:</strong> You are proficient in the Athletics
            skill.
          </li>
          <li>
            <strong>Iron Gut:</strong> You have advantage on Constitution saving
            throws against ingesting poisons or harmful substances.
          </li>
          <li>
            <strong>Nephilic Training:</strong> You have proficiency with simple
            and martial weapons, and armor.
          </li>
          <li>
            <strong>Elemental Resistance:</strong> You can choose a resistance
            to an elemental damage type (fire, lightning, etc.) when you are hit
            by that type for 1 minute.
          </li>
        </ul>

        <h3>Feats</h3>
        <p>
          You can choose these when you reach the following levels: 4th, 6th,
          8th, 12th, 16th, and 19th, or you may choose ability modifiers or
          vanilla feats. Never all of them at once.
        </p>
        <ul>
          <li>
            <strong>Titan’s Grasp (Level 4):</strong> You can grapple creatures
            one size larger than you. While grappling, you can deal bonus
            bludgeoning damage equal to your Strength modifier and cast a
            touch-range spell on them as part of the same action.
          </li>
          <li>
            <strong>Dusk Rejuvenation (Level 6):</strong> When reduced to 0 hit
            points, you can expend 1 primordial essence to drop to 1 hit point
            instead, and gain temporary hit points equal to your Constitution
            modifier. Usable once per long rest.
          </li>
          <li>
            <strong>Titanic Leap (Level 8):</strong> Your jumping distance
            doubles. You can also make a Strength (Athletics) check to jump
            horizontally or vertically as part of your movement. If you land
            within 5 feet of an enemy, they must make a Dexterity saving throw
            or take 2d6 bludgeoning damage and be knocked prone.
          </li>
          <li>
            <strong>Elemental Mastery (Level 10):</strong> Once per short rest,
            you can absorb elemental damage with your reaction and gain
            resistance to that element for 1 minute. Your melee attacks deal an
            additional 1d6 damage of the absorbed element for that time.
          </li>
          <li>
            <strong>Colossal Endurance (Level 12):</strong> When you take
            damage, you can use a reaction and expend 1 primordial essence to
            reduce the damage by half your level + your Constitution modifier.
          </li>
          <li>
            <strong>Dusk’s Dominion (Level 16):</strong> As a bonus action, you
            can enter a heightened power state for 1 minute, gaining advantage
            on Strength checks and saving throws, and your melee attacks deal an
            additional 1d8 force damage. Usable once per long rest.
          </li>
          <li>
            <strong>Elemental Immunity (Level 18):</strong> As a bonus action,
            you can choose one element (fire, cold, lightning, acid, or thunder)
            to gain immunity to for 1 minute. You can use this ability once per
            long rest. At 20th level, you can choose a second element to gain
            immunity to.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Nephilim;
