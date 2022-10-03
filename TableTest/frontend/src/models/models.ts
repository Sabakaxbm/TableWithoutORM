export interface Distance {
  id: number;
  name: string;
  date: string;
  amount: number;
  distance: number;
}
export interface DistancePagination {
  countPages: number;
  data: Distance[];
}
