<script lang="ts">
	import type { TComment } from "./Interfaces";
	import Reply from "./Reply.svelte";

    export let comment: TComment;
</script>
<div class="all">
    <div class="container">
        <img src={`./${comment.profilePicture}`} alt={comment.author} class="p-picture"/>
        <div class="comment-container">
            <a href="#">{comment.author}</a>
            <p class="comment-text">{comment.text}</p>
            <!-- <div class="actions-container">
                <div class="like-container">
                    <button class="action-btn like-btn" on:click={() => {}}><i class={`fa-solid fa-heart`}></i></button>
                    <span class="like-count">{1}</span>
                </div>
            </div> -->
        </div>
    </div>
    {#if comment.replies.length > 0}
        {#each comment.replies as reply}
            <Reply reply={reply}/>
        {/each}
    {/if}
</div>
<style>
    .like-container {
        display: flex;
        justify-content: flex-end;
    }
    .actions-container {
        display: flex;
        align-items: center;
    }
    .action-btn {
        background: none;
        cursor: pointer;
        border: none;
        outline: none;
        font-size: 10px;
    }
    .like-count {
        font-size: small;
    }
    .all {
        margin-bottom: 5px;
        padding: 5px;
    }
    .p-picture {
        width: 25px;
        border-radius: 12px;
    }
    .container {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
        box-shadow: 0 1px 3px #0000002c;
    }
    .comment-text {
        font-size: smaller;
        margin: 0;
    }
    .comment-container {
        display: flex;
        flex-direction: column;
    }
    a {
        font-size:small;
    }
</style>
