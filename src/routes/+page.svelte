<script>
    import "/src/style.css";
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import Elemento from "/src/componentes/Elemento.svelte"
	import CTA from "../componentes/CTA.svelte";
	import Contacto from "../componentes/Contacto.svelte";

    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
        carousel.goToNext()
    }
</script>


<div class="font-mabry min-h-screen bg-gradient-to-b from-white to-sky-300">

    <div class="max-w-[1440px] mx-auto">
        <header class="flex items-center justify-between px-8">
            <img class="" src="logo.png" alt="Logo">

        <ul class="flex items-center gap-4">
                <a target="_blank" href="https://www.instagram.com/ipsograf/?hl=es-la"><img src="ig.svg" alt="Instagram"></a>
                <a target="_blank" href="https://www.facebook.com/p/Ipsograf-Impresiones-graficas-100067227882329/?paipv=0&eav=AfZAtjUe6phpMuH15H1E-7uV2fDT5jpbxi6SBp-8LLhU7bfKKRfWKdnt_DSP2OMant4&_rdr"><img src="fb.svg" alt="Facebook"></a>
                <a target="_blank" href="mailto:administracion@ipsograf.com.ar"><img src="mail.svg" alt="Mail"></a>
        </ul>
        </header>

        
        {#if browser}
            <Carousel
                bind:this={carousel}
            >   
                <Elemento bgImage="carousel/anapurna.jpeg" justify="justify-end" >
                    <h1 class="text-7xl" slot="servicio">Anapurna</h1>
                    <p slot="impresion">Impresión digital cama plana</p>
                    <p slot="papeles">PAI | Lona | Papel | Microperforado | Vinilo</p>
                    <p slot="tipo">Ancho máximo: 2500 mm</p>
                    <p slot="info">Blue back | Microcorrugado plástico, Madera</p>
                </Elemento>

                <Elemento bgImage="carousel/plotter2.png" >
                    <h1 class="text-7xl" slot="servicio">Plotter</h1>
                    <p slot="impresion">Impresión digital</p>
                    <p slot="papeles">Vinilo | Papel | Lona | Blue back</p>
                    <p slot="tipo">Ancho máximo: 3200 mm</p>
                    <p slot="info">Microperforado</p>
                </Elemento>

                <Elemento bgImage="carousel/ctp.png" bgPosition="bg-right-top" justify="justify-end" >
                    <h1 class="text-7xl" slot="servicio">CTP</h1>
                    <p slot="impresion">Copia de chapas térmicas</p>
                    <!-- <p slot="papeles">Vinilo | Papel | Lona | Blue back</p> -->
                    <p slot="tipo">Desde 320x460mm hasta 1275x1630 mm</p>
                    <!-- <p slot="info">Microperforado</p> -->
                </Elemento>

                <Elemento bgImage="carousel/offset.png" bgPosition="bg-top">
                    <h1 class="text-7xl" slot="servicio">ROLAND offset</h1>
                    <!-- <p slot="impresion">Copia de chapas térmicas</p> -->
                    <!-- <p slot="papeles">Vinilo | Papel | Lona | Blue back</p> -->
                    <!-- <p slot="tipo">Desde 320x460mm hasta 1275x1630 mm</p> -->
                    <!-- <p slot="info">Microperforado</p> -->
                </Elemento>
            </Carousel>
        {/if}

        <CTA/>

        <Contacto/>
    </div>

</div>