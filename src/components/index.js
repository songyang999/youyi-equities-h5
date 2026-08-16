import { Button, List, Cell, CellGroup, Form, Field, Popup, Picker, Toast, Search } from "vant";

export function vant(app) {
    app.use(Button)
    app.use(List)
    app.use(Cell)
    app.use(CellGroup)
    app.use(Form)
    app.use(Field)
    app.use(Popup)
    app.use(Picker)
    app.use(Toast)
    app.use(Search)
}