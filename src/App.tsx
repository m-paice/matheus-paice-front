import React from "react";

// styles
import GlobalStyles from "./styles/GlobalStyles";

// routes
import Routes from "./routes";

// contexts
import { DefaultContextProvider } from "./contexts/DefaultContext";

interface Props {}

const App: React.FC<Props> = (props) => {
    return (
        <>
            <DefaultContextProvider>
                <Routes />
            </DefaultContextProvider>
            <GlobalStyles />
        </>
    );
};

export default App;
