/* KEMETIX — locally bundled asset URLs (served from client/public/images) */
const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const LOGO_NAVY = img("kemetix-saturn-logo.png");
export const LOGO_WHITE = img("kemetix-saturn-logo-white.png");
export const HERO_VIALS = img("kemetix-hero-vials.png");
export const SINGLE_VIAL = img("kemetix-single-vial.png");
export const SATURN_SPACE = img("kemetix-saturn-space.png");
export const MERCH_COLLECTION = img("kemetix-merch-collection.png");
export const BOX_KIT = img("kemetix-box-kit.png");
export const MOLECULE = img("kemetix-molecule.png");
export const VIAL_BPC157 = img("kemetix-vial-bpc157.png");
export const VIAL_TB500 = img("kemetix-vial-tb500.png");
export const VIAL_CJC1295 = img("kemetix-vial-cjc1295.png");
export const VIAL_IPAMORELIN = img("kemetix-vial-ipamorelin.png");
export const VIAL_IGF1LR3 = img("kemetix-vial-igf1lr3.png");
export const VIAL_MELANOTAN2 = img("kemetix-vial-melanotan2.png");
