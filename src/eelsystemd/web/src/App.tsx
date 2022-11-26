import "./style.css"
import { defaultTheme, Flex, Provider, View } from "@adobe/react-spectrum"

export function App() {
    return (
        <Provider theme={defaultTheme}>
            <Flex direction="column" minHeight="100vh" alignItems="center">
                <Flex direction="column" width="100%" maxWidth="1200px">
                    <h1>Hello world!</h1>
                    <View backgroundColor="celery-600" height="size-600" />
                    <View backgroundColor="celery-500" height="size-600" />
                    <View backgroundColor="celery-400" height="size-600" />
                </Flex>
            </Flex>
        </Provider>
    );
}
