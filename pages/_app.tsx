import "../styles/globals.scss";
import type { AppProps } from "next/app";
// Providers
import { RandomPersonProvider } from "modules/02-Random/context/cRandomPerson";
import { HackerNewsProvider } from "modules/06-HackerNews/context";
import { QuizProvider } from "modules/07-Quiz/context";

const MyProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <QuizProvider>
      <HackerNewsProvider>
        <RandomPersonProvider>{children}</RandomPersonProvider>
      </HackerNewsProvider>
    </QuizProvider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProviders>
      <Component {...pageProps} />
    </MyProviders>
  );
}
