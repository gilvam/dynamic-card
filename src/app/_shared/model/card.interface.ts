export interface ICard {
  component: string,
  style: ICardStyle,
  inputs: Record<string, unknown> | undefined
}

export interface ICardStyle {
  color: string;
  height: string;
}
