<script>
  import { slide, fade } from 'svelte/transition';

  let menu = false;

  function open_menu(){
    menu = !menu
  }

</script>

<header class="fixed left-0 right-0 top-0 z-40 font-lato px-6 py-5 dark:bg-black bg-white grid grid-cols-3 <md:grid-cols-2 font-normal border-1 border-gray-800 <md:pl-8 <md:pr-0 <md:py-0 dark:text-white">
  <div class="flex content-center">
    <a class="nav-title text-2xl no-underline my-auto font-bold font-merri" href="/">LAMED</a>
  </div>
  <div class="mx-0 <md:hidden px-0 flex <md:gap-2 lg:gap-4 py-0 content-center justify-center">
    <a class="nav-link group !no-underline" href="/">Accueil
      <div class="relative h-[1px] w-0 group-hover:(bg-yellow-500 w-full) duration-600 ease-in-out transition-all p-0 m-0 bg-dark-50 left-0 -bottom-2 right-0"></div>
    </a>
    <a class="nav-link group !no-underline" href="/enseignements">Enseignements
      <div class="relative h-[1px] w-0 group-hover:(bg-yellow-500 w-full) duration-600 ease-in-out transition-all p-0 m-0 bg-dark-50 left-0 -bottom-2 right-0"></div>
    </a>
    <a class="nav-link group !no-underline" href="/nous">À&nbsp;propos
      <div class="relative h-[1px] w-0 group-hover:(bg-yellow-500 w-full) duration-600 ease-in-out transition-all p-0 m-0 bg-dark-50 left-0 -bottom-2 right-0"></div>
    </a>
    <a class="nav-link group !no-underline" href="/contact">Contact
      <div class="relative h-[1px] w-0 group-hover:(bg-yellow-500 w-full) duration-600 ease-in-out transition-all p-0 m-0 bg-dark-50 left-0 -bottom-2 right-0"></div>
    </a>
  </div>
  <div class="flex content-center justify-end">
    <!-- <a href="/connexion" class="nav-link-light px-4 py-3 hover:bg-light-600 dark:hover:bg-gray-900 rounded-md">Connexion</a> -->
    <button in:fade out:fade class="md:hidden { menu? 'invisible':'visible' }  rounded-md bg-transparent text-black border-transparent px-3" on:click={open_menu}>
      <svg width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"/></svg>
    </button>
    
    <button class="<md:hidden nav-link-light inline-flex items-center justify-center px-4 py-1.5 ml-4 text-base font-medium  rounded-md whitespace-nowrap hover:bg-gray-600 dark:border border-transparent dark:border-gray-600 dark:hover:border-transparent">S'inscrire</button>
  </div>
</header>

{#if menu}
<div in:slide={{duration:600}} out:slide class="{ menu? 'visible':'invisible' } mobile-menu w-full top-0 left-0 right-0 bg-black/75 backdrop-filter backdrop-blur-lg fixed z-50 md:hidden">
  <div class="left-0 right-0 top-0 font-lato px-0 flex justify-end">
    <button class="lg:hidden rounded-md bg-transparent text-black border-transparent px-3" on:click={open_menu}>
      <svg width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"/></svg>
    </button>
  </div>
  <div class="mt-0 px-16 pb-16 pt-4 font-merri">
    <div class="list-none py-2 grid grid-cols-1 grid-rows-5 gap-y-7">
      <div in:fade={{delay:200}} class="text-2xl">
        <a href="/" class="flex">
          <svg class="mr-3" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z"/></svg>&nbsp;Accueil
        </a>
      </div>
      <div in:fade={{delay:270}} class="text-2xl">
        <a href="/enseignements" class="flex">
          <svg class="mr-3" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12.486 5.414a1 1 0 0 0-.972 0L5.06 9l6.455 3.586a1 1 0 0 0 .972 0L18.94 9l-6.455-3.586zm-1.943-1.749a3 3 0 0 1 2.914 0l8.029 4.46a1 1 0 0 1 0 1.75l-8.03 4.46a3 3 0 0 1-2.913 0l-8.029-4.46a1 1 0 0 1 0-1.75l8.03-4.46z"/><path d="M21 8a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM6 10a1 1 0 0 1 1 1v5.382l4.553 2.276a1 1 0 0 0 .894 0L17 16.382V11a1 1 0 1 1 2 0v6a1 1 0 0 1-.553.894l-5.105 2.553a3 3 0 0 1-2.684 0l-5.105-2.553A1 1 0 0 1 5 17v-6a1 1 0 0 1 1-1z"/></g></svg>&nbsp;Enseignements
        </a>
      </div>
      <div in:fade={{delay:380}} class="text-2xl">
        <a href="/nous" class="flex">
          <svg class="mr-3" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM8 9a4 4 0 1 1 8 0a4 4 0 0 1-8 0zm11-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM2 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"/><path d="M17.268 13h3.464a2 2 0 0 0-3.464 0zM15 14a4 4 0 0 1 8 0v1h-7l-1-1zM3.268 13h3.464a2 2 0 0 0-3.464 0zM1 14a4 4 0 0 1 8 0l-1 1H1v-1z"/><path d="M12 13a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4zm-6 4a6 6 0 1 1 11.88 1.199l-.163.801H6.283l-.163-.801A6.022 6.022 0 0 1 6 17z"/></g></svg>&nbsp;Qui&nbsp;sommes-nous
        </a>
      </div>
      <div in:fade={{delay:500}} class="text-2xl">
        <a href="/contact" class="flex">
          <svg class="mr-3" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 13.842C15.976 13.337 14.146 13 12 13c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 20l-3-2v-4.158zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 20l3-2v-4.158zM12 4v4M4.636 6.636l2.828 2.828m11.9-2.828l-2.828 2.828"/></svg>&nbsp;Contactez-nous
        </a>
      </div>
    </div>
    <p class="mobile-base-text my-auto py-2 mx-6 -mb-12 text-xs"><span>Développer avec <span class="pb-2"><svg class="inline-flex" width="12" height="12" viewBox="0 0 24 24"><path fill="#F00" stroke="#F00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4z"/></svg></span> par la Grâce de Yéhowshuw'a Ha-Mashiyah</span></p>
  </div>
</div>
{/if}

<style lang="scss">
  @media (prefers-color-scheme: light) {
    .nav-link, .nav-title {
      color:black;
    }
  }
  @media (prefers-color-scheme: light) and (max-width: 563px) {
    header button {
      color:black;
      background-color: white;
    }
  }
  @media (prefers-color-scheme: dark) and (min-width: 763px) {
    header button {
      color:white;
      background-color: black;
      &:hover {
        color:#000;
        background-color: rgba(245, 158, 11, var(--tw-bg-opacity)) !important;
      }
    }
  }
  @media (prefers-color-scheme: dark) {
    header button {
      color:white;
      background-color: black;
      border-style: solid;

    }

    .nav-link {
      color:#CCC;
    }

    .nav-title {
      color:#FFF;
    }
  }

  .mobile-menu a {
    color: #FFF;
    text-decoration: none;
    transition: all .5;

    &:hover {
      transition: all .5;
      color:bisque;
    }

  }
  .mobile-base-text {
    color:white;
    opacity:.3;
    font-size: 10px;
  }
</style>