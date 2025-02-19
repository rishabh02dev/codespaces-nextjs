function UsersInfo(props){
    return (<>
    <div>
        <h1>Users Page (SSG) </h1>
        {
            props.data.users.map((user)=>(
                <li key={user.id}>{user.firstName}</li>
            ))
        }
    </div>
    
    </>)
}




export const getStaticProps = async () =>{
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return{
        props:{
            data,
        },
    };
};

export default UsersInfo;