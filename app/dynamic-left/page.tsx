import Number15 from "../../components/Number15/Number15"
type mT = {
    title: string,
    description: string,
    robots: string,
}
export const metadata: mT = {
    title: 'Dynamic Left',
    description: 'Dynamic Left',
    robots: "no-follow,no-index"
}

export default function Page() {
    return <Number15 />
}