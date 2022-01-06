import React, { useState } from "react";
import styles from "./App.module.scss";
import EmployeeCard from "./EmployeeCard";

import team from "./data/teamsData";

const App = () => {
  const getEmployeeCardJsx = (team) => (
    <EmployeeCard key={team.id} team={team} />
  );

  return (
    <>
      <h1 className={styles.title}> TICKET TRACKER</h1>
      <section className={styles.content}>
        {team.map(getEmployeeCardJsx)}
      </section>
    </>
  );
};

export default App;

// 1. change title in public/index.html
// 2. Rename src/app.js to app.jsx
// 3. delete code in app.css
// 4. delete lovo.svg
// 5. in index.css add global reset to index.css
// 6. install sass
// 7. rename App.css => App.module.scss
