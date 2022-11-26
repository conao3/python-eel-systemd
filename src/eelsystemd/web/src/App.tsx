import "./style.css"
import { Provider, defaultTheme, Flex, ToggleButton, View } from "@adobe/react-spectrum"
import Moon from '@spectrum-icons/workflow/Moon'
import React = require("react");

export function App() {
    let [isDark, setIsDark] = React.useState(true)
    return (
        <Provider theme={defaultTheme} colorScheme={isDark ? "dark" : "light"}>
            <Flex direction="column" minHeight="100vh" alignItems="center">
                <Flex direction="column" width="100%" maxWidth="1200px">
                    <h1>Hello world!</h1>
                    <ToggleButton
                        isSelected={isDark}
                        onChange={setIsDark}
                        position="absolute"
                        top="size-200"
                        end="size-200"
                    >
                        <Moon />
                    </ToggleButton>
                    <View backgroundColor="celery-600" height="size-600" />
                    <View backgroundColor="celery-500" height="size-600" />
                    <View backgroundColor="celery-400" height="size-600" />
                </Flex>
            </Flex>
        </Provider>
    );
}
