<script>
    export let bgImage;         // Prop for background image
    export let justify = 'justify-start';  // Prop for alignment, default is center
    export let bgPosition = 'bg-center';    // Prop for background position, default is center
</script>
<section class={`${bgPosition} ${justify} relative text-white h-[600px] bg-cover bg-no-repeat bg-center flex items-center`} style="background-image: url({bgImage});">
    <div class="absolute inset-0 bg-black opacity-45"></div> <!-- This darkens the background -->
    <div class="relative z-10 h-fit inline-flex flex-col justify-center gap-10 p-6 mx-20 backdrop-brightness-25 backdrop-blur-sm border border-white rounded-2xl">
        
        <h3 class="text-2xl">Nuestras impresoras</h3>
        <slot name="servicio" />

        <div class="text-lg">
            <slot name="impresion" />
            <slot name="papeles" />
            <slot name="info" />
            <slot name="tipo" />
        </div>
        <button class="rounded-full border border-white self-start px-4 py-1">+ info</button>
    </div>
</section>