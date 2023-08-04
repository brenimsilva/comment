<script lang="ts">
	import type { item } from "./Interface";

    export let text: string;
    export let itemType: "HOME" | "WORK";
    let editIsOpen: boolean = false;
    export let onEdit: (item: item) => void;
    export let onDelete: () => void;
</script>

<div class="{itemType === "HOME" ? 'container' : 'container2'} c">
    <h4>{text}</h4>
    <div class="c2">
        <button style="color: blue" on:click={() => {editIsOpen = !editIsOpen}}>E</button>
        <button style="color: red;" on:click={onDelete}>D</button>
    </div>
    {#if editIsOpen}
        <input type="text" bind:value={text}/>
        <button on:click={() => onEdit({itemType: itemType, text: text})}>Editar</button>
    {/if}
</div>


<style>
    .c {
        display: flex;
        justify-content: space-around;
        margin: 10px;
    }
    .c2 {
        display: flex;
        justify-content: flex-end;
    }
    .container {
        background-color: rgba(0, 128, 0, 0.425);
    }
    .container2 {
        background-color: rgba(0, 0, 255, 0.384);
    }
</style>
