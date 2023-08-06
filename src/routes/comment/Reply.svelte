<script lang="ts">
	import type { TComment } from "./Interfaces";
    export let reply: TComment;
</script>

<div class="container">
    <div class="reply-separator"></div>
    <div class="reply-container">
            <img src={`./${reply.profilePicture}`} alt={reply.author} class="p-picture"/>
            <div class="comment-container">
                <a href="#">{reply.author}</a>
                <p class="comment-text">{reply.text}</p>
            </div>
</div>
</div>

<style>
    .container {
        margin-left: 25px;
    }
    .reply-separator {
        width: 2px;
        height: 7px;
        background-color: #3333333b;
    }
    .reply-container {
        background-color: var(--gray);
        padding: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.342);
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .p-picture {
        width: 25px;
        border-radius: 12px;
    }
    a {
        font-size:small;
    }
    .comment-text {
        font-size: smaller;
        margin: 0;
    }
</style>
