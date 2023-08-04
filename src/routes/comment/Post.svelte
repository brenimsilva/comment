<script lang="ts">
//regular solid
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
            <button>Like</button>
            <button><i class="fa-regular fa-bookmark"></i></button>
            <button>Reply</button>
        </div>
    </div>
</div>


<style>
    .actions {
        display: flex;
        gap: 5px;
    }
    .tiny {
        font-size: 10px;
    }
    hr {
        margin: 10px;
        border: 1px solid goldenrod;
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
