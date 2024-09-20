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

<svelte:head>
  <title>Ipsograf - Impresión Digital</title>
  <meta name="description" content="Tus ideas en impresiones">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
</svelte:head>

<div class="font-mabry min-h-screen bg-gradient-to-b from-white to-sky-300">

    <div class="max-w-[1440px] mx-auto">
        <header class="flex items-center justify-between lg:px-8">
            <img class="mx-auto lg:mx-0" src="logo.png" alt="Logo">

            <ul class="hidden lg:flex items-center gap-4">
                    <a target="_blank" href="https://www.instagram.com/ipsograf/?hl=es-la"><img class="h-8" src="ig.svg" alt="Instagram"></a>
                    <a target="_blank" href="https://www.facebook.com/p/Ipsograf-Impresiones-graficas-100067227882329/?paipv=0&eav=AfZAtjUe6phpMuH15H1E-7uV2fDT5jpbxi6SBp-8LLhU7bfKKRfWKdnt_DSP2OMant4&_rdr"><img class="h-8" src="fb.svg" alt="Facebook"></a>
                    <a href="https://wa.me/541121343956" target="_blank"><img class="h-8" src="wpp.svg" alt="whatsapp"></a>
                    <a target="_blank" href="mailto:administracion@ipsograf.com.ar"><img class="h-8" src="mail.svg" alt="Mail"></a>
            </ul>
        </header>

        
        {#if browser}
            <Carousel
                bind:this={carousel}
            >   
                <Elemento bgImage="carousel/anapurna.jpeg" video="videos/video1-anapurna.mp4" justify="justify-end" >
                    <h1 class="text-4xl md:text-7xl" slot="servicio">Anapurna</h1>
                    <p class="text-xs md:text-base" slot="impresion">Impresión digital cama plana</p>
                    <p class="text-xs md:text-base" slot="papeles">PAI | Lona | Papel | Microperforado | Vinilo</p>
                    <p class="text-xs md:text-base" slot="tipo">Ancho máximo: 2500 mm</p>
                    <p class="text-xs md:text-base" slot="info">Blue back | Microcorrugado plástico, Madera</p>
                </Elemento>

                <Elemento bgImage="carousel/plotter2.png" video="videos/video2.mp4" >
                    <h1 class="text-4xl md:text-7xl" slot="servicio">Plotter</h1>
                    <p class="text-xs md:text-base" slot="impresion">Impresión digital</p>
                    <p class="text-xs md:text-base" slot="papeles">Vinilo | Papel | Lona | Blue back</p>
                    <p class="text-xs md:text-base" slot="tipo">Ancho máximo: 3200 mm</p>
                    <p class="text-xs md:text-base" slot="info">Microperforado</p>
                </Elemento>

                <Elemento bgImage="carousel/ctp.png" video="videos/video3.mp4" bgPosition="bg-right-top" justify="justify-end" >
                    <h1 class="text-4xl md:text-7xl" slot="servicio">CTP</h1>
                    <p class="text-xs md:text-base" slot="impresion">Copia de chapas térmicas</p>
                    <!-- <p slot="papeles">Vinilo | Papel | Lona | Blue back</p> -->
                    <p class="text-xs md:text-base" slot="tipo">Desde 320x460mm hasta 1275x1630 mm</p>
                    <!-- <p slot="info">Microperforado</p> -->
                </Elemento>

                <Elemento bgImage="carousel/offset.png" video="videos/video4-offset.mp4" bgPosition="bg-top">
                    <h1 class="text-4xl md:text-7xl" slot="servicio">ROLAND offset</h1>
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

    <footer class="bg-black/0 text-black text-center py-2">
        <p class="text-xs">&copy; 2024 Ipsograf. Todos los derechos reservados.</p>
    </footer>
</div>