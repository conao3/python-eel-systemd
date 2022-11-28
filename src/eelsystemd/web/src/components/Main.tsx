import { Cell, Column, Row, TableBody, TableHeader, TableView, useAsyncList, View } from "@adobe/react-spectrum";
import { eel } from "../eel";

export function Main() {
    const columns = [
        { name: "Unit", uid: "unit" },
        { name: "Load", uid: "load" },
        { name: "Active", uid: "active" },
        { name: "Sub", uid: "sub" },
        { name: "Description", uid: "description" },
    ]

    const rows = useAsyncList({
        async load({ signal, cursor }) {
            eel.set_host('ws://localhost:8088')
            const res = await eel.py_systemctl()()
            console.log(res)
            return {
                items: res.slice(10),
            }
        }
    })
    return <>
        <h1>Hello world!</h1>
        <View backgroundColor="celery-600" height="size-600" />
        <View backgroundColor="celery-500" height="size-600" />
        <View backgroundColor="celery-400" height="size-600" />
        <TableView>
            <TableHeader columns={columns}>
                {column => (
                    <Column key={column.uid}>{column.name}</Column>
                )}
            </TableHeader>
            <TableBody items={rows.items} loadingState={rows.loadingState}>
                {item => (
                    <Row key={(item as any).unit}>
                        {key => <Cell>{(item as any)[key]}</Cell>}
                    </Row>
                )}
            </TableBody>
        </TableView>
    </>;
}
