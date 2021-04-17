import Link from "next/link";


export function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <head>
                <title>{title} | Next course</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next JS" />
                <meta charSet='utf-8'/>
            </head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0px;
                    top: 0px;
                    right: opx;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                nav a {
                    color: #fff;
                    text-decoration: none;
                }
                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}</style>

        </>
    )
}