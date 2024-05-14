export interface Skill {
  name: string;
  image: string;
  width: string;
}

export interface Section {
  name: string;
  skills: Skill[];
}
