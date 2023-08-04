<script lang="ts">
	import type { item } from "./Interface";
	import Task from "./Task.svelte";
	let item: item = {} as item;
    let todoList: Array<item> = [];
    function editItem(index: number, item: item) {
        todoList[index] = item;
    }
    function deleteItem(index: number) {
        todoList = todoList.filter((element, i) => {
            return i !== index;
        })
    }
</script>
<input type="text" placeholder="task name" bind:value={item.text}/>
<input type="text" placeholder="HOME || WORK" bind:value={item.itemType}/>
<button on:click={() => {todoList = [...todoList, {...item}]
}}>Append</button>
{#if todoList.length > 0}
    {#each todoList as item, i}
        <Task itemType={item.itemType} text={item.text} onEdit={(task) => editItem(i,task)} onDelete={() => {deleteItem(i)}}/>
    {/each}
{/if}

