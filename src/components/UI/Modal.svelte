<script>
  // imports 
  import { isModalOpen,modalData } from "../../store";
</script>
{#if $isModalOpen}
<div
class="relative z-10 modal-enter modal-leave-to"
aria-labelledby="modal-title"
role="dialog"
aria-modal="true"
>
  <div
    class="fixed inset-0 bg-primary-light bg-opacity-75 transition-opacity"
  />

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        class="relative  transform overflow-hidden rounded-2xl bg-primary-extra text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      >
        <div class="bg-primary-extra px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 sm:mx-0 sm:h-10 sm:w-10"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="w-6 h-6 stroke-primary">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
            
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3
                class="text-base font-semibold leading-6 text-white"
                id="modal-title"
              >
                {$modalData?.title}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-300">
                  {$modalData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-primary-extra px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <a
          target="_blank"
          on:click={() => isModalOpen.set(false)}
          download={$modalData.download ?? undefined}
            href={`${$modalData.url}`}
            class="capitalize inline-flex w-full justify-center rounded-md bg-gradient-to-br from-primary to-primary-dark px-3 py-2 text-sm font-semibold text-white shadow-sm hover:scale-105 sm:ml-3 sm:w-auto"
            ><button type="button" on:click={() => isModalOpen.set(false)}>{$modalData?.title.split(" ")[0]}</button></a>
          <button
            type="button"
            on:click={() => isModalOpen.set(false)}
            class="mt-3 inline-flex w-full justify-center rounded-md bg-gradient-to-br from-red-600 to-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:scale-105 sm:mt-0 sm:w-auto"
            >Cancel</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
{/if}