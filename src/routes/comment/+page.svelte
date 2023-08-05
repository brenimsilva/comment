<script lang="ts">
import CommentSection from "./CommentSection.svelte";
import Post from "./Post.svelte";


</script>


<div class="container">
    <div class="post-section">
        <Post />
    </div>
    <CommentSection />
</div>


<style>
.container {
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
}
</style>
