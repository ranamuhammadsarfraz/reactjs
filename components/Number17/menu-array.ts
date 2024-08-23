type urlTYpe = {
    title: string,
    link: string
}[]

type menuArrayType = [
    {
        img: string,
        img_source: string,
        person: string,
        profession: string,
        short_intro: string
    },
    urlTYpe
]

const menuArray: menuArrayType = [
    {
        img: "/gallery/gif_first.gif",
        img_source: "https://pixabay.com/users/pexels-2286921/",
        person: "Mr XYZ",
        profession: "Photographer or etc.",
        short_intro: "Lorem ipsum is a dummy text, used by software developers during developing. Image source is https://pixabay.com/users/pexels-2286921/"
    },
    [
        {
            title: "GitHub",
            link: "#"
        },
        {
            title: "Twitter",
            link: "#"
        },
        {
            title: "Facebook",
            link: "#"
        },
        {
            title: "LinkedIn",
            link: "#"
        },
        {
            title: "Website",
            link: "#"
        }

    ]
]

export default menuArray;