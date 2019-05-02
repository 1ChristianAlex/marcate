export interface ModelPost{
    $key?:string,
    userName?:string;
    datePost?:string;
    imgPath?:string;
    postContent?:string;
    likeCount?:number;
    comentCount?:number;
    comments?:Array<string>;
}
