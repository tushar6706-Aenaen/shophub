import {revalidatePath} from "next/cache"

type mockusers = {
    id : number;
    name:string;
}



export default async function mokeUsers(){
    
    const res = await fetch("https://681b9fc817018fe5057c3dc1.mockapi.io/users");
    const users = await res.json();

    async function addUser(formData:FormData){
        "use server"
        const name = formData.get("name")
        const res = await fetch("https://681b9fc817018fe5057c3dc1.mockapi.io/users",

            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({name}),
            }
        );
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }
 
    return(
            <div>
                <form action={addUser}>
                    <input type="text" name="name" placeholder="Name" required className="bg-gray-800 p-2 rounded-md"/>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Add mockusers</button>
                </form>
        <ul>
            {users.map((user:mockusers)=>{
                return(
                    <li key={user.id} className=" flex justify-between items-center text-2xl font-bold text-gray-200 bg-gray-800 p-4 rounded-md">
                        {user.name}
                    </li>
                )
            })}
        </ul>
            </div>
    )
}