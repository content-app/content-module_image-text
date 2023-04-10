module.exports = async function ({ client, space, environment }) {
    const fields = [
        {
            "id": "title",
            "name": "title",
            "type": "Symbol",
            "localized": false,
            "required": true,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "text",
            "name": "text",
            "type": "RichText",
            "localized": false,
            "required": false,
            "validations": [
                {
                    "enabledMarks": [
                        "bold",
                        "italic",
                        "underline",
                        "superscript",
                        "subscript"
                    ],
                    "message": "Only bold, italic, underline, superscript, and subscript marks are allowed"
                },
                {
                    "enabledNodeTypes": [
                        "heading-1",
                        "heading-2",
                        "heading-3",
                        "heading-4",
                        "heading-5",
                        "heading-6",
                        "ordered-list",
                        "unordered-list",
                        "hyperlink"
                    ],
                    "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, and link to Url nodes are allowed"
                },
                {
                    "nodes": {}
                }
            ],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "image",
            "name": "image",
            "type": "Link",
            "localized": false,
            "required": true,
            "validations": [
                {
                    "linkMimetypeGroup": [
                        "image"
                    ]
                }
            ],
            "disabled": false,
            "omitted": false,
            "linkType": "Asset"
        }
    ];

    const module = {
        name: 'Module: Image-Text',
        description: '',
        displayField: 'title',
        fields,
        sys: {
            id: 'ModuleImageText',
        }
    }

    const contentType = await environment.createContentTypeWithId('ModuleImageText', module);
    await contentType.publish();
};