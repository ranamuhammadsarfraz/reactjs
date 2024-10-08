import ToDoApp from "../../components/ToDoApp/ToDoApp"

export const metadata = {
    title: 'To do APp',
    description: 'To do APp',
    robots: "follow,index"
}
export default function page() {
    return <ToDoApp />
}
