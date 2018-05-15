import {
  trigger,
  style,
  state,
  animate,
  transition,
  AnimationTriggerMetadata,
  stagger
} from '@angular/animations';

export class HomeAnimations {

  public static slideUpQuestion() {
    return trigger('slideUpQuestion', [
      transition(':enter', [
        style({
          'margin-top': '20vh',
          'opacity': 0
        }),
        animate('1s', style({
          'margin-top': '30vh',
          'opacity': 1
        }))
      ])
    ]);
  }

  public static showInfo() {
    return trigger('showInfo', [
      transition(':enter', [
        style({ 'opacity': 0 }),
        animate('2s', style({ 'opacity': 1 }))
      ])
    ]);
  }

  public static slideDownBtn() {
    return trigger('slideDownBtn', [
      transition(':enter', [
        style({
          'padding-top': '200px',
          'opacity': 0
        }),
        animate('1s', style({
          'padding-top': '30px',
          'opacity': 1
        }))
      ])
    ]);
  }
}
