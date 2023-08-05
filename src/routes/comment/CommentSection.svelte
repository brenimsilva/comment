<script>
	import CommentsByPost from "./CommentsByPost.svelte";


</script>


<div class="container">
    <h1>Comments</h1>
    <textarea id="comment" placeholder="Compartilhe sua opinião sobre"/>
    <CommentsByPost />
</div>

<style>
    .container {
        background-color: white;
        border-radius: 10px;
        padding: 10px 30px;
    }
    h1 {
        font-size: x-large;
        text-align: left;
    }
    #comment {
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
    #comment::-webkit-scrollbar {
        border-radius: 10px;
        background-color: var(--gray);
    }
    #comment::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    #comment::-webkit-scrollbar-thumb {
        background-color: var(--text);
        border-radius: 10px;
    }
</style>
