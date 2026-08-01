import { Button, List, Cell, CellGroup, Form, Field, Popup, Picker, Toast } from "vant";

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
}