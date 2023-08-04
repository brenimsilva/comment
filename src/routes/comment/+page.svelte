<script lang="ts">
	import CommentSection from "./CommentSection.svelte";
import Post from "./Post.svelte";


</script>


<div class="container">
    <!-- <div class="form">
        <div>
            <h4>Name:</h4>
            <input type="text" />
        </div>
        <div>
            <h4>Post:</h4>
            <input type="text" />
        </div>
    </div> -->
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
