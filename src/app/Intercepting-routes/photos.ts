export type Photo = {
  id: string;
  title: string;
  location: string;
  color: string;
  description: string;
};

export const photos: Photo[] = [
  {
    id: "1",
    title: "Saigon Morning",
    location: "Ho Chi Minh City",
    color: "#f97316",
    description: "A warm city sunrise used to demonstrate route interception.",
  },
  {
    id: "2",
    title: "Da Nang Coast",
    location: "Da Nang",
    color: "#0ea5e9",
    description: "A bright coastal card that can open as a modal or full page.",
  },
  {
    id: "3",
    title: "Ha Noi Evening",
    location: "Ha Noi",
    color: "#8b5cf6",
    description: "A calm evening scene for testing direct navigation behavior.",
  },
];

export function getPhoto(id: string) {
  return photos.find((photo) => photo.id === id);
}
