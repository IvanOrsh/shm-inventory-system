import { PropsWithChildren } from "react";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-1">{children}</div>;
};

function App() {
  const { toggleTheme } = useTheme();
  return (
    <Container>
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </Container>
  );
}

export default App;
