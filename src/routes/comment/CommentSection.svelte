<script lang="ts">
	import Comment from "./Comment.svelte";
	import CommentsByPost from "./CommentsByPost.svelte";
	import type { TComment } from "./Interfaces";

    let comments: TComment[] = [
        {author: "Breno", profilePicture: "profile.jpg", text: "Melhor artigo que ja li", replies: [{author: "Thamyres", profilePicture: "gatinha.jpg", text: "Muito bom esse artigo", replies: []}]},
        {author: "Vini", profilePicture: "vini.jpg", text: "Temos que tentar entender melhor sua utilização", replies: []},
        {author: "Patrik", profilePicture: "patrik.jpeg", text: "De fato faz sentido", replies: []},
        ];
        let text: string;
        let obj: TComment;
        $: obj = {author: "Breno", profilePicture: "profile.jpg", text: text, replies: []};
</script>


<div class="container">
    <h1>Comments</h1>
    <textarea class="comment" placeholder="Compartilhe sua opinião sobre" bind:value={text}/>
    <button on:click={() => {comments = [...comments, obj]}}>></button>
    <CommentsByPost commentList={comments}/>
</div>

<style>
    .container {
        background-color: white;
        border-radius: 10px;
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h1 {
        font-size: x-large;
        text-align: left;
    }
    .comment {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        padding: 20px;
        height: 80px;
        width: 100%;
        border-radius: 8px;
        background-color: var(--gray);
        border: none;
        outline: none;
        resize: none;
        overflow: auto;
    }
    .comment::-webkit-scrollbar {
        border-radius: 10px;
        background-color: var(--gray);
    }
    .comment::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    .comment::-webkit-scrollbar-thumb {
        background-color: var(--text);
        border-radius: 10px;
    }
</style>
