// NOT REAL DOM, ILLISTRATED ON HOW A BROWSER MIGHT KEEP UP WITH ELEMENTS ON PAGE

const document = {
    doctype: "html",
    children: [
        {
            type: "html",
            children: [
                {
                    type: "head",
                    children: [
                        {type: "meta"},
                        {type: "meta"},
                        {type: "title"}
                    ]
                },
                {
                    type: "body",
                    children: [
                        {
                            type: "img",
                            properties: [
                                {
                                    type: "class",
                                    values: [
                                        "js-picture"
                                    ]
                                    },
                                    {
                                        type: "src"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }