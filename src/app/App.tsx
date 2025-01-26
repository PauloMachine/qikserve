import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { ModalProvider } from "../components/ui/modal/modal.context";
import { GlobalStyle } from "./App.styles";
import Layout from "../components/layout";
import Routes from "./routes";
import { LayoutProvider } from "../components/layout/layout.context";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { store } from "./store";
import i18n from "src/locales";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <Router>
          <QueryClientProvider client={queryClient}>
            <LayoutProvider>
              <ModalProvider>
                <GlobalStyle />
                <Layout>
                  <Routes />
                </Layout>
              </ModalProvider>
            </LayoutProvider>
          </QueryClientProvider>
        </Router>
      </StyleSheetManager>
    </I18nextProvider>
  </Provider>
);

export default App;
