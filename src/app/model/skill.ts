export class Skill {

  constructor(public title: string, public rating: number, public skills: Skill[] = []) {

  }



  public getProgressColor(): string {
    if (this.rating > 90) {
      return 'success';
    } else if (this.rating >  85) {
      return 'info';
    } else {
      return 'warning';
    }
  }

}
