export interface IStoreBlog{
  _id:string;
  lable: string;
  blogUrl: string;
  articles:[
    {
      cover: string;
      articleURL: string;
      title: string;
      author:string;

    }
  ]
  

}