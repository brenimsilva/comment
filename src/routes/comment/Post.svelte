<script lang="ts">
//regular solid
let actions = {
    like: "fa-regular",
    save: "fa-regular"
}
let liked = true;
let saved = false;
let likeCount: number;
let saveCount: number;
$: {
    actions.like = liked ? "fa-solid" : "fa-regular",
    actions.save = saved ? "fa-solid" : "fa-regular"
    likeCount = liked ? 1 : 0
    saveCount = saved ? 1 : 0
}


</script>

<div class="container">
    <div>
        <h1 class="title">Porque svelte é melhor que React</h1>
        <p class="tiny">por: Breno Almeida</p>
    </div>
    <hr />
    <div class="content">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nulla rerum saepe atque fugit voluptas deleniti minus illum iure excepturi enim nemo, assumenda expedita dolore possimus voluptatem totam facere adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim, repellat facilis illo consequuntur quos nobis distinctio, id temporibus excepturi hic. Culpa, sunt aspernatur commodi consequuntur cumque labore voluptate rem?</p>
        <div class="actions">
            <button class="action-btn like-btn" on:click={() => {liked = !liked}}><i class={`${actions.like} fa-heart`}></i></button><span>{likeCount}</span>
            <button class="action-btn save-btn" on:click={() => {saved = !saved}}><i class={`${actions.save} fa-bookmark`}></i></button><span>{saveCount}</span>
            <button class="action-btn reply-btn"><i class="fa-solid fa-reply"></i> reply</button>
        </div>
    </div>
</div>


<style>
    /* :root{
        --primary: #4c6fff;
        --gray: #f1f4f8;
        --text: #99a8b5;
    } */
    .action-btn {
        background-color: transparent;
        border: none;
        outline: none;
        scale: 1.1;
        cursor: pointer;
    }
    .action-btn:hover {
        text-shadow: 3px 3px 3px var(--text);
        transition: all 0.3s;
    }
    .actions {
        display: flex;
        gap: 5px;
    }
    .tiny {
        font-size: 10px;
    }
    hr {
        margin: 10px;
        border: 1px solid rgba(108, 108, 241, 0.616);
    }
    .title {
        font-size: xx-large;
        min-width: 100px;
    }
    .content {
        margin-top: 50px;
    }
    .container {
        display: flex;
        justify-content: space-evenly;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        min-height: 500px;
    }
</style>
