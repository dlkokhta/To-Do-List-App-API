import { Request, Response } from "express";

const AddToDo = async (req: Request, _res: Response) => {
  console.log(req.body);
};

export default AddToDo;
