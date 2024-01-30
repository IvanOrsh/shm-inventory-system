import { PropsWithChildren, useState } from "react";
import { twMerge } from "tailwind-merge";

import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import { Theme } from "./providers/theme/lib/ThemeContext";

type ContainerProps = {
  theme?: Theme;
};

const Container = ({ children, theme }: PropsWithChildren<ContainerProps>) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div
      className={twMerge(
        theme,
        "grid",
        "grid-cols-[1fr]",
        "bg-skin-fill-total",

        "bg-red-50",

        sideBarOpen ? "md:grid-cols-[220px,1fr]" : "md:grid-cols-[65px,1fr]",
      )}
    >
      <button
        onClick={() => setSideBarOpen((prev) => !prev)}
        className="col-span-1"
      >
        {sideBarOpen ? "Close" : "Open"}
      </button>
      {children}
    </div>
  );
};

const Sidebar = () => {
  const { toggleTheme } = useTheme();
  return (
    <aside className={twMerge("bg-yellow-50", "hidden", "md:block")}>
      <h1>Sidebar</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </aside>
  );
};

const MenuHamburger = () => {
  return <section className="absolute left-[20px] hidden"></section>;
};

const ContentWrapper = ({ children }: PropsWithChildren) => {
  return (
    <section className={twMerge("col-span-1", "w-full", "md:col-span-2")}>
      <h1>Main Content</h1>
      {children}
    </section>
  );
};

function App() {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <Sidebar />

      <MenuHamburger />

      <ContentWrapper>
        <AppRouter />
      </ContentWrapper>
    </Container>
  );
}

export default App;
