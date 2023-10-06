// imports
import { atom, map } from "nanostores";

/**
 * is Modal Open
 */
export const isModalOpen = atom<boolean>(false);

/**
 * Modal Content Data
 */
export const modalData = map({
  title: "Modal",
  url: "/",
  description: "Modal Desc",
  download: false,
});

// @TODO
// src/content/avatars/
// src/content
// public/avatars
