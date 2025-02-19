import Link from "next/link"

function Home(){
    return (
        <>
        <h1>Welcome to the HomePage</h1>
        <Link href = "/about">Go to the About Page</Link>
        </>
    )
}

export default Home