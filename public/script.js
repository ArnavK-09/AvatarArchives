/**
 * add hashtags class to all hastags
 */
document.addEventListener("DOMContentLoaded", function () {
  changeBG();
  highlightHashtags();
});
document.addEventListener("astro:page-load", function () {
  document.getElementById("share_avatar_btn")?.addEventListener("click", () => {
    shareSite();
  });
  changeBG();
  highlightHashtags();
});

/**
 * configure share button
 */
document.querySelectorAll("share_avatar_btns").forEach((element) => {
  element.addEventListener("click", () => {
    shareSite();
  });
});

/**
 * Share url of site
 */
function shareSite() {
  if (navigator.share && window) {
    navigator
      .share({
        title: `🐻 Checkout "${window.document.title
          .toString()
          .split("|")[0]
          .trim()}" On AvatarArchives — Avatars for Every Mood, Avatar Archives for You...`,
        url: window.location.href,
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    alert("Unable to Share URL, Kindly copy and paste URL From Address Bar!");
  }
}

/**
 * Highlight hash tags
 */
function highlightHashtags() {
  const paragraphs = document.querySelectorAll(".prose");
  paragraphs.forEach(function (paragraph) {
    paragraph.innerHTML = paragraph.innerHTML.replace(
      /#(\w+)/g,
      '<span class="hashtag">#$1</span>',
    );
  });
}

/**
 * Change hero background patterns
 */
function changeBG() {
  const hero = document.getElementById("hero");
  hero?.classList.add(`bg_head_${Math.floor(Math.random() * (4 - 1) + 1)}`);
}

/**
 * Prevent context menu
 */
document.addEventListener("contextmenu", (e) => e.preventDefault());
