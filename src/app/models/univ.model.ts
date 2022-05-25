import { ObjectId } from "mongoose";
import { Comment } from "./comment.model";

export class Univ {
  _id!: string;
  id!: string;
  name!: string;
  localisation!: string;
  picture!: string;
  description!: string;
  cost!: string;
  comments!: Array<Comment>;
  continent!: string;
  country!: string;
  latitude !: number;
  longitude !: number;
  temperature !: string;
  language !: string;
  excelAcademique !: string;
  LGBTQ_friendly !: string;


}
