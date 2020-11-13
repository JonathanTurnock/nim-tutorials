module.exports = {
    title: "Nim Tutorials, Guides & Reference",
    tagline: "A Collection of ramblings about Nim",
    url: "https://jonathanturnock.github.io/",
    baseUrl: "/nim-tutorials/",
    onBrokenLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "JonathanTurnock", // Usually your GitHub org/user name.
    projectName: "nim-tutorials", // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ["nim"],
        },
        navbar: {
            title: "Nim Tutorials",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                // {to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: "https://github.com/JonathanTurnock/nim-tutorials/",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Github Projects",
                    items: [
                        {
                            label: "Nim",
                            href: "https://github.com/nim-lang/Nim",
                        },
                        {
                            label: "Nimble",
                            href: "https://github.com/nim-lang/nimble",
                        },
                        {
                            label: "ChooseNim",
                            href: "https://github.com/dom96/choosenim",
                        },
                    ],
                },
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Nim",
                            href: "https://nim-lang.org/docs/manual.html",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        // {
                        //   label: 'Blog',
                        //   to: 'blog',
                        // },
                        {
                            label: "GitHub",
                            href: "https://github.com/JonathanTurnock/nim-tutorials/",
                        },
                        {
                            label: "Nimble Directory",
                            href: "https://nimble.directory/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Jonathan Turnock. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/JonathanTurnock/nim-tutorials/edit/master/website/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/JonathanTurnock/nim-tutorials/edit/master/website/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    plugins: ["plugin-image-zoom"],
}
