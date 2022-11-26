import "./style.css"
import { Provider, defaultTheme, Flex, ToggleButton } from "@adobe/react-spectrum"
import Moon from '@spectrum-icons/workflow/Moon'
import React = require("react");
import { Main } from "./components/Main";

export function App() {
    let [isDark, setIsDark] = React.useState(true)
    return (
        <Provider theme={defaultTheme} colorScheme={isDark ? "dark" : "light"}>
            <Flex direction="column" minHeight="100vh" alignItems="center">
                <Flex direction="column" width="100%" maxWidth="1200px">
                    <ToggleButton
                        isSelected={isDark}
                        onChange={setIsDark}
                        position="absolute"
                        top="size-200"
                        end="size-200"
                    >
                        <Moon />
                    </ToggleButton>
                    <Main />
                </Flex>
            </Flex>
        </Provider>
    );
}
