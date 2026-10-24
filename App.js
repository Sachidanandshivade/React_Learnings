const heading = React.createElement("h1", {id: "heading", xyz: "abc"} ,"hello from React!");


const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {key: "child"},
        React.createElement(
            "h1",
            {},
            "Hi this the nested div structure"
        )
    ),
React.createElement(
        "div",
        {key: "child2"},
        React.createElement(
            "h1",
            {},
            "Hi this the nested div structure"
        )
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 