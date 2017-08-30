export class HomeModel {
    title: string;
    items: Array<HomeItemModel>;
}
export class HomeItemModel {
    name: string;
    img: string;
    total: Number;
}