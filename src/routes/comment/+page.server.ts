import type { PageServerLoad } from "./$types";

interface SocialActivity {
    likeCount: number
}


export const load = (async ({fetch}) => {
    console.log("SERVER RENDERING");
    async function fetchProducts() {
        const res = await fetch('https://dummyjson.com/products?limit=10');
        const json = await res.json();
        console.log(json);
        return json.products;
    }

    async function fetchUsers() {
        const res = await fetch('https://dummyjson.com/users?limit=10');
        const json = await res.json();
        console.log(json);
        return json.users;
    }

    return {
        likeCount: 10,
        products: fetchProducts(),
        users: fetchUsers()
    }
}) satisfies PageServerLoad
