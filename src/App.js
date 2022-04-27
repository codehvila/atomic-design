import logo from "./logo.svg";

import styles from "./App.module.css";
import Button from "./atoms/Button";
import Text from "./atoms/Text";
import Card from "./molecules/Card";
import Placeholder from "./atoms/Placeholder";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className={styles.AppContent}>
        <div>
          <h2>System</h2>
          <div>
            <h3>Colors</h3>
            <Text
              css={{ textColor: "#383838" }}
              textContent="Define Colors. Use the 60/30/10 rule."
            />
            <Text>&nbsp;Primary Color 60%&nbsp;</Text>
            <Placeholder
              css={{ width: "6rem", height: "2rem", forClass: "Primary" }}
            />
            <Text>Secondary Color 30%</Text>
            <Placeholder
              css={{ width: "3rem", height: "2rem", forClass: "Secondary" }}
            />
            <Text>Accent Color 10%</Text>
            <Placeholder
              css={{ width: "1rem", height: "2rem", forClass: "Accent" }}
            />
          </div>
          <div>
            <h3>Fonts</h3>
            <Text css={{ textColor: "black" }} textContent="Define Fonts..." />
          </div>
          <div>
            <h3>Icons</h3>
            <Text>@mui/material</Text>
          </div>
          <div>
            <h3>Atoms</h3>
            <Button css={{ bgColor: "#fefefe", forClass: "Large" }}>
              Large
            </Button>
            <Button css={{ bgColor: "#fefefe", forClass: "Normal" }}>
              Normal
            </Button>
            <Button css={{ bgColor: "#fefefe", forClass: "Small" }}>
              Small
            </Button>
            <Button
              disabled
              css={{
                bgColor: "#fefefe",
                forClass: "Small",
                disabled: "Disabled",
              }}
            >
              Disabled
            </Button>
            <div>
              <Placeholder
                css={{ width: "4rem", height: "1.5rem", forClass: "Secondary" }}
              />
              <Placeholder
                css={{ width: "6rem", height: "1.5rem", forClass: "Secondary" }}
              />
              <Placeholder
                css={{ width: "8rem", height: "1.5rem", forClass: "Secondary" }}
              />
            </div>
            <div>
              <Placeholder css={{ width: "4.5rem", height: "1.5rem" }} />
              <Placeholder css={{ width: "2.5rem", height: "1.5rem" }} />
              <Placeholder css={{ width: "7rem", height: "1.5rem" }} />
              <Placeholder css={{ width: "3.5rem", height: "1.5rem" }} />
            </div>
            <div>
              <Placeholder css={{ width: "2.5rem", height: "1.5rem" }} />
              <Placeholder css={{ width: "7rem", height: "1.5rem" }} />
              <Placeholder css={{ width: "3.5rem", height: "1.5rem" }} />
              <Placeholder css={{ width: "4.5rem", height: "1.5rem" }} />
            </div>
          </div>
          <div>
            <h3>Molecules</h3>
            <Card />
          </div>
          <div>
            <h3>Organisms</h3>
            Organisms...
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
