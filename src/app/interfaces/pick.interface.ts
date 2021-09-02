export interface IPick {
  id: string;
  name: string;
  baseLine?: string;
  odds?: number;
  order: number;
  status: number;
  mostBalanced?: boolean;
}

export interface ISelectedPick {
  id: string; // refering pick id
  eventId: string;
  marketId: string;
}
