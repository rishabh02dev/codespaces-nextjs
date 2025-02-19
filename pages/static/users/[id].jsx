const UserPage = (props) => {
    console.log(props.data)
    return(
        <div>
            <h1>Profile Page of </h1>
        </div>
    )
}

export const getStaticProps = async(context) =>{
    const id = context.query.id;
    const data = await (await fetch('https://dummjson.com/users/${id}')).json();

    return {
        props:{
            data,
        }
    }
}

export default UserPage;