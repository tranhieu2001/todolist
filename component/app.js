import html from "../core.js"
import Header from "./header.js"
import Footer from "./footer.js"
import TodoList from "./todolist.js"
import { connect } from "../store.js"

function App({ todos }) {
    return html`<section class="todoapp">
        ${Header()}
        ${todos.length > 0 && TodoList()}
        ${todos.length > 0 && Footer()}
    </section>`
}

export default connect()(App)
