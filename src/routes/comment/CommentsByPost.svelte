<script lang="ts">
	import Comment from "./Comment.svelte";
import type { TComment } from "./Interfaces";

    export let commentList: Array<TComment>;
</script>

<div>
    {#each commentList as comment}
        <Comment comment={comment}/>
    {/each}
</div>
