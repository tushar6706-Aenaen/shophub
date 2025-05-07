export const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" }
];

export async function GET() {
    return Response.json(users);
}

export async function POST(request: Request) {
    const user = await request.json(); // Read the JSON body from the request

    const newUser = {
        id: users.length + 1,  // Use 'users', not 'user'
        name: user.name
    };

    users.push(newUser); // Push to 'users', not 'user'

    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    });
}
