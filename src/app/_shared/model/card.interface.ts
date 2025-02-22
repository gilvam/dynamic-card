export interface ICard {
  name: string;
  gridTemplateArea: string[];
  cardItems: ICardItem[];
}


export interface ICardItem {
  component: string,
  style: ICardStyle,
  inputs: Record<string, unknown> | undefined
}

export interface ICardStyle {
  color: string;
  height: string;
}
