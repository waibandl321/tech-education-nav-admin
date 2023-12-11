import type { AppProps } from "next/app";
import { MessageAlertProvider } from "@/contexts/MessageAlertContext";
import { UserProvider } from "@/contexts/UserContext";
import { LoadingProvider } from "@/contexts/LoadingContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <UserProvider>
        <MessageAlertProvider>
          <Component {...pageProps} />
        </MessageAlertProvider>
      </UserProvider>
    </LoadingProvider>
  );
}
