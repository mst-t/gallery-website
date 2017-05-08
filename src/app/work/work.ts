export class Work {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public gitUrl: string,
    public activeUrl: string,
    public skills: Array<string>) {}
}
