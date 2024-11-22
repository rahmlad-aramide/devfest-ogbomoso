export interface Speaker {
  image: string | StaticImageData;
  name: string;
  role: string;
  day: "conference" | "workshop" | "panelist";
}
