<script>
  // imports
  import { isModalOpen, modalData } from "../../../store";

  // props
  export let download = "/logo.png";
  export let buy = "/";
  export let src = false;

  // btns
  const downloadImage = () => {
    isModalOpen.set(true);
    modalData.set({
      title: "Download Your Favourite Avatar",
      url: download,
      description: `To download your chosen avatar instantly, simply click the "Download" button. Your avatar will be downloaded immediately, allowing you to effortlessly enhance your online presence on platforms like Discord, Instagram, Reddit, Slack, and more. Start expressing your unique personality and making a lasting impression with AvatarArchives.`,
      download: true,
    });
  };
  const buyImage = () => {
    modalData.set({
      title: src ? "Source Of Original Avatar" : "Buy Your Favourite Avatar",
      url: buy,
      description: src
        ? `This avatar's original source can be found by clicking the "Source" button below. Clicking on it will redirect you to an external website where you can learn more about its origins and creators. Feel free to explore further to discover the background and context of this avatar.`
        : `To purchase the avatar of your choice, simply click the "Buy" button. This will redirect you to an external website where you can explore options to either acquire the avatar as an NFT (Non-Fungible Token) or obtain a license for personal or commercial use. Unlock endless possibilities and support the creators behind these avatars by making a purchase through AvatarArchives.`,
    });
    isModalOpen.set(true);
  };
</script>

<div class="flex py-4 gap-1 md:gap-3">
  <button
    on:click={downloadImage}
    type="button"
    class="w-full rounded-lg btn btn-lg mx-4 bg-gradient-to-bl noSelect transition from-primary to-primary-dark"
    >Download
  </button>
  <button
    type="button"
    on:click={buyImage}
    class="w-full rounded-lg btn btn-lg mx-4 bg-gradient-to-br noSelect from-green-600 via-green-500 to-green-700"
    >{src ? "Source" : "Buy"}</button
  >
</div>
