<script lang="ts">
	import { tick } from "svelte";

    const colors = ["#3AA6B9", "#FFD0D0", "#FF9EAA", "#C1ECE4", "yellow", "red", "blue", "gold", "black"];
    let random1: number = 0;
    let random2: number = 1;
    let random3: number = 2;
    let random4: number = 3;

    // setInterval(() => {
    //     random1 = Math.trunc(Math.random() * colors.length);
    //     random2 =  Math.trunc(Math.random() * colors.length);
    //     random3 =  Math.trunc(Math.random() * colors.length);
    //     random4 =  Math.trunc(Math.random() * colors.length);
    // }, 200);
</script>
<h1><span style="color:{colors[random1]}; background-color:{colors[random2]};">th</span>
<span style="color:{colors[random2]};background-color:{colors[random3]};">am</span>
<span style="color:{colors[random3]};background-color:{colors[random4]};">yr</span>
<span style="color:{colors[random4]};background-color:{colors[random1]};">es</span></h1>
<div style="display: flex; justify-content: center">
    <img src="./f.webp" alt="thamyres" style="width: 50%;"/>
</div>
