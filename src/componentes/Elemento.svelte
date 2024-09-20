<script>
	import Modal from "./Modal.svelte";

    export let bgImage;         // Prop for background image
    export let video;    // Prop for background position, default is center
    export let justify = 'justify-start';  // Prop for alignment, default is center
    export let bgPosition = 'bg-center';    // Prop for background position, default is center
</script>
<section class={`${bgPosition} ${justify} relative text-white h-[600px] bg-cover bg-no-repeat bg-center flex items-center`} style="background-image: url({bgImage});">
    <div class="absolute inset-0 bg-black opacity-45"></div> <!-- This darkens the background -->
    <div class="relative z-10 w-2/3 md:w-auto h-fit inline-flex flex-col justify-center gap-10 p-6 mx-20 backdrop-brightness-25 backdrop-blur-sm border border-white rounded-2xl">
        
        <h3 class="text-xl md:text-2xl">Nuestras impresoras</h3>
        <slot name="servicio" />

        <div class="text-lg space-y-2 lg:space-y-0">
            <slot name="impresion" />
            <slot name="papeles" />
            <slot name="info" />
            <slot name="tipo" />
        </div>
        <Modal {video}/>
    </div>
</section>