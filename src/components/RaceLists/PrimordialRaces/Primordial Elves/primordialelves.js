import React from "react";
import styles from "./primordialelves.css";

const PrimordialElves = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Primordial Elf: The Sovereigns of Dawn</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/race-lists" className={styles.navLink}>
                Race Lists
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className={styles.primordialElf} id="primordial-elf">
        <h2>Primordial Elf: The Sovereigns of Dawn</h2>
        <p>
          A primordial race gifted with the essence of magic itself. Natural
          born of Dawn, they are peaceful and they follow the natural order of
          life and fate.
        </p>

        <h3>Racial Traits: (Passive)</h3>
        <ul className={styles.traitList}>
          <li className={styles.traitItem}>
            <strong>Ability Score Increase:</strong> You can choose to increase
            your Charisma, Wisdom, or Intelligence to 6. Your Dexterity is
            increased by 2. And all other skills are increased by 1 (Max 30).
            When rolling for ability scores, you can choose the Primordial Die
            (6d20).
          </li>
          <li className={styles.traitItem}>
            <strong>Dawn Essence:</strong> You are resistant against radiant and
            necrotic damage.
          </li>
          <li className={styles.traitItem}>
            <strong>Age:</strong> You are immune to aging.
          </li>
          <li className={styles.traitItem}>
            <strong>Alignment:</strong> Elves love magic, art, music, variety,
            and self-expression, so they lean strongly towards the gentler
            aspects of chaos (Chaotic).
          </li>
          <li className={styles.traitItem}>
            <strong>Size:</strong> Elves range from under 6 to over 7 feet tall.
            Your size is Medium.
          </li>
          <li className={styles.traitItem}>
            <strong>Speed:</strong> Your base walking speed is 35 feet.
          </li>
          <li className={styles.traitItem}>
            <strong>Elven Ancestry:</strong> You have advantage on saving throws
            against being charmed, and magic can't put you to sleep.
          </li>
          <li className={styles.traitItem}>
            <strong>Languages:</strong> Nephilic, Primordial Elven.
          </li>
        </ul>

        <h3>Racial Features: (Passive)</h3>
        <ul className={styles.featureList}>
          {/* Add features here following the same pattern */}
        </ul>

        <h3>Feats: Primordial Elf Abilities</h3>
        <p>
          You can choose these when you reach the following levels: 4th, 6th,
          8th, 12th, 16th, and 19th, or you may choose ability modifiers or
          vanilla feats. Never all of them at once.
        </p>
        <ul className={styles.featList}>
          {/* Add feats here following the same pattern */}
        </ul>
      </section>
    </div>
  );
};

export default PrimordialElves;
