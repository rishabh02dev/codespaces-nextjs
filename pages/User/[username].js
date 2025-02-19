import {useRouter} from 'next/router'


const DynamicPage = () =>{
    const {query} = useRouter();
    return (
        <>
        <h1>This is a {query.username} page...</h1>
        </>
    ) 
}

export default DynamicPage